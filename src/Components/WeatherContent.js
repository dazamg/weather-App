import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {requestModalData} from "../redux/actions/weather"

// //Upon clicking on a day, a modal window should open a display 
// //additional information: sunset time, sunrise time, description, and wind speed
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    List,
    ListItem,
    Button
  } from '@chakra-ui/react'
  
  import { SearchIcon} from '@chakra-ui/icons'

const WeatherContentList = (props) => {
    const { onOpen, onClose } = useDisclosure()
    const handleSubmit = (result) => {
        let data = {day: result, status: true}
        props.requestModalData(data)
    }
    //Allow the user to refresh the content of the forecast
    const reload = () => {
        window.location.reload();
        onClose()
    }
    if(props.weathers.length !== 0){
        // 7 days Forecast - map through the weather arr
       return props.weathers.daily.map((result) => {
            console.log("%%%%%$#$@", result)
            let iconImg = result.weather[0].icon;
            let icUrl = "http://openweathermap.org/img/w/" + iconImg + ".png";
          
            // converting to Fahrenheit 
            let temp = Math.trunc((result.temp.day - 273.15) * 9/5 + 32)
            return (
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'> 
                    <Box 
                        display='flex' 
                        alignItems='baseline' 
                    >
                        <List>
                            <ListItem onClick={onOpen}>
                            {moment.unix(result.dt).format("llll").split("2021 11:00 AM")} Temp: {temp} °F
                            <img id="wicon" src={icUrl} alt="Weather icon"></img>
                            <Button  key={result.dt} onClick={() => handleSubmit(result)}><SearchIcon w={8} h={8} color="red.500" /> </Button>
                            </ListItem>
                        </List>   
                    </Box>
                <Modal
                    isOpen={props.status}
                    onClose={reload}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader as="h1" textAlign="center" fontFamily='Source Serif Pro, serif' color='rgb(237, 149, 109)' fontWeight='bold'>Weather Forecast for the day</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody textAlign="right" >
                            <Box fontFamily='Source Serif Pro, serif' as="h3">Description: {props.day.weather? props.day.weather[0].description : null}</Box>
                            <Box fontFamily='Source Serif Pro, serif' as="h3">Sunrise: {moment.unix(props.day.sunrise).format('h:mm:ss a')}</Box>
                            <Box fontFamily='Source Serif Pro, serif' as="h3" >Sunset: {moment.unix(props.day.sunset).format('h:mm:ss a')}</Box>
                            <Box as="h3">Wind speed: {props.day["wind_speed"]}</Box>
                        </ModalBody>
                    </ModalContent>        
                </Modal>
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