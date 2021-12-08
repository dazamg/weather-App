import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {requestModalData} from "../redux/actions/weather"
import ForecastModal from './Modal'
// import { List } from 'semantic-ui-react'

import {
    Box, 
    Badge
  } from '@chakra-ui/react'

const WeatherContentList = (props) => {

    const handleSubmit = (ele) => {
        let data = {day: ele, status: true}
        props.requestModalData(data)
    }

    if(props.weathers.length !== 0){
        // 7 days Forecast - map through the weather arr
       return props.weathers.daily.map((ele) => {
   
            let iconImg = ele.weather[0].icon;
            let icUrl = "http://openweathermap.org/img/w/" + iconImg + ".png";
   
            // converting Kelvin to Fahrenheit 
            let temp = Math.trunc((ele.temp.day - 273.15) * 9/5 + 32)
            return (
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Box p='6'>
                        <Box 
                            display='flex' 
                            alignItems='baseline' 
                            key={ele.dt} >
                            <Badge borderRadius='md' px='2' colorScheme='teal' onClick={() => handleSubmit(ele)}>
                                {moment.unix(ele.dt).format("llll").split("2021 11:00 AM")} Temp: {temp} °F
                                <img id="wicon" src={icUrl} alt="Weather icon"></img>
                            </Badge>
                            <ForecastModal onClick={() => handleSubmit(ele)}/>
                        </Box>
                    </Box>
                </Box>
            )
       })
    } else {
        return null
    }
}


const mapStateToProps = (state) => {
 
    return {
       weathers: state.weathers,
       day: state.setDay,
       status: state.modalStatus
    }
  }
  
  
  export default connect(mapStateToProps, {requestModalData})(WeatherContentList)
