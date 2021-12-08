import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

const WeatherContentList = (props) => {

    const handleSubmit = (ele) => {
        let data = {day: ele, status: true}
    }

    if(props.weathers.length !== 0){
        // 7 days Forecast - map through the weather arr
       return props.weathers.daily.map((ele) => {
   
            let iconCode = ele.weather[0].icon;
            let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
   
            // converting Kelvin to Fahrenheit 
            let temp = Math.trunc((ele.temp.day - 273.15) * 9/5 + 32)
            return (
                <List spacing={3}>
                    <ListItem divided key={ele.dt} onClick={() => handleSubmit(ele)}>
                        Date: {moment.unix(ele.dt).format("MM/DD/YYYY")} Temp: {temp} °F
                        <img id="wicon" src={iconUrl} alt="Weather icon"></img>
                    </ListItem>
                </List>
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
