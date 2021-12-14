import React, {useEffect} from 'react';
import {connect} from 'react-redux';
// import {useDispatch, useSelector} from 'react-redux'

// 7 days forecast
import WeatherContentList from './Components/WeatherContent'
import { requestDataItem , getWeatherRequest } from './redux/actions/weather';
import Geocode from "react-geocode";
import Header from './Components/Header';

import {    
  Box,
  Flex,
  Container,
  Grid,
  Square
} from "@chakra-ui/react"
import WeatherSlideShow from './Components/WeatherSlideShow';
// import TodayWeatherDisplay from './Components/TodayWeatherDisplay'
//geocode Api Key
Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY)

const App = (props) => {
  
  // const dispatch = useDispatch();
  // const users = useSelector(state => state.weatherReducer.users);
  // console.log("$$$$$", users)
  // const { weather } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    document.title = props.cityLog

    Geocode.fromAddress(props.cityLog)
    .then(res => {
        const {lat, lng} = res.results[0].geometry.location
         props.getWeatherRequest({lat, lng});
         console.log("wwww", res)
        
    },
    err => {
    console.error(err)
    })
  },[])
  console.log(Object.values(props.weathers))
 
  return (
      <Box 
      bgColor='	honeydew'
      >
      <Grid 
        templateRows='repeat(2, 1fr)'
      > <Header/>
      <Flex 
        align="center" 
        justify="center" 
        as='h2' fontSize='2xl' 
        w='100%' 
        fontFamily='Source Serif Pro, serif' 
        color='rgb(237, 149, 109)' 
        fontWeight='bold'>Today in {props.cityLog}</Flex>
          <Container >
             <Square position="flex" >
               <Box marginLeft="45"> 
                <Box as='h3' color='rgb(237, 149, 109)' fontWeight='bold' >
                  7 Day Forecast 
                </Box>  <WeatherContentList/> </Box>
                <WeatherSlideShow/>
            </Square>
           
          </Container>
      </Grid>
    </Box>
  );   
    
 
}


const mapStateToProps = state => ({ ...state });



export default connect(mapStateToProps, {getWeatherRequest, requestDataItem})(App);
