import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
    Box,
    Badge,
  } from '@chakra-ui/react'
const TodayWeatherDisplay = (props) => {
    // const [temps, setTemps] = useState('')
   
    if(props.weathers.length !== 0){ 
        return props.weathers.current
    }

        // let iconImg = props.weathers.current.weather[0].icon;
        // let icUrl = "http://openweathermap.org/img/w/" + iconImg + ".png";
      
        // converting to Fahrenheit 
        // let temp = Math.trunc((props.weathers.current.temp - 273.15) * 9/5 + 32)
        // let des = props.weathers.current.weather[0].description
        // let hum = result.wind_speed
        // console.log('&*&*&', des)
        // console.log('&*&*&', hum)
        return (
                <Box p='6'>
                     {/* Temp: {temp} °F
                     {des} */}
                    {/* <Box 
                        display='flex' 
                        alignItems='baseline' 
                         >
                        <Badge fontFamily='Source Serif Pro, serif' key={props.weathers.current.dt} color='black' fontWeight='bold' borderRadius='md'>
                        {des}
                        
                            <img id="wicon" src={icUrl} alt="Weather icon"></img>     
                        </Badge>
                    </Box> */}
                </Box>
        )
}


const mapStateToProps = (state) => {

return {
   weathers: state.weathers,
   day: state.setDay,
   status: state.modalStatus
}
}


export default connect(mapStateToProps,)(TodayWeatherDisplay)