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

  return (
      <Box 
      bgColor='	honeydew'
      >
      <Grid 
        templateRows='repeat(2, 1fr)'
      > <Header/>
      <Flex align="center" justify="center" as='h2' fontSize='2xl' w='100%' fontFamily='Source Serif Pro, serif' color='rgb(237, 149, 109)' fontWeight='bold'>Today in {props.cityLog}</Flex>
          <Container >
             <Square position="flex" >
               
               <Box marginLeft="45"> 
                <Box as='h3' color='rgb(237, 149, 109)' fontWeight='bold' >
                  7 Day Forecast 
                </Box>  <WeatherContentList/> </Box>
                <Box backgroundColor="#222"
                    bgImage="url('https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')"
                    backgroundPosition="right"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    width="40vw"
                    height="60vh"
                    p="10"
                    opacity="0.9"
                    zIndex=""
                    m="45"
                ></Box>    
            </Square>
           
          </Container>
      </Grid>
    </Box>
  );   
    
 
}


const mapStateToProps = state => ({ ...state });



export default connect(mapStateToProps, {getWeatherRequest, requestDataItem})(App);
