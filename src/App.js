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
    document.title = props.weathers
    Geocode.fromAddress(props.cityLog)
    .then(res => {
        const {lat, lng} = res.results[0].geometry.location
         props.getWeatherRequest({lat, lng});
        
    },
    err => {
    console.error(err)
    })
  },[])

  return (
    // <Box>
      <Box 
        w='100%'
        minH='100vh'
        bgImage="url('https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')"
        bgSize='contain'
        bgRepeat='no-repeat'
        bgPosition='-30%'
        display='flex'
        flexDirection='column'
        backgroundPosition="center"
        backgroundSize="cover"
        width="100vw"
      >
      <Grid 
        templateRows='repeat(2, 1fr)'
      > <Header/>
      <Flex align="center" justify="center" as='h2' fontSize='2xl' w='100%' fontFamily='Source Serif Pro, serif' color='rgb(237, 149, 109)' fontWeight='bold'>Today in {props.cityLog}</Flex>
          <Container>
            <Box as='h3' color='rgb(237, 149, 109)' fontWeight='bold'>
             7 Day Forecast 
            </Box>
            
            <WeatherContentList/> 
          </Container>
      </Grid>
    </Box>
  );   
    
 
}


const mapStateToProps = state => ({ ...state });

// export default connect(null, {
//   getWeatherRequest
// })(App);

export default connect(mapStateToProps, {getWeatherRequest, requestDataItem})(App);
