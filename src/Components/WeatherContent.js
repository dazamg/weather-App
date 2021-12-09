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
    Badge,
    Button,
  } from '@chakra-ui/react'
  
  import { SearchIcon} from '@chakra-ui/icons'

const WeatherContentList = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleSubmit = (ele) => {
        let data = {day: ele, status: true}
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
   
            let iconImg = result.weather[0].icon;
            let icUrl = "http://openweathermap.org/img/w/" + iconImg + ".png";
   
            // converting to Fahrenheit 
            let temp = Math.trunc((result.temp.day - 273.15) * 9/5 + 32)
            return (
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Box p='6'>
                        <Box 
                            display='flex' 
                            alignItems='baseline' 
                            key={result.dt} >
                            <Badge fontFamily='Source Serif Pro, serif' key={result.dt} color='black' fontWeight='bold' borderRadius='md' onClick={onOpen}>
                                {moment.unix(result.dt).format("llll").split("2021 11:00 AM")} Temp: {temp} °F
                                <img id="wicon" src={icUrl} alt="Weather icon" sizes="8px"></img>
                                <Button  key={result.dt} onClick={() => handleSubmit(result)}><SearchIcon w={8} h={8} color="red.500" /> </Button>
                                
                            </Badge>
                            <Box>
                        <Modal isOpen={isOpen} onClose={reload}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader as="h1" textAlign="center" fontFamily='Source Serif Pro, serif' color='rgb(237, 149, 109)' fontWeight='bold'>More Info</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody textAlign="right" >
                            <Box fontFamily='Source Serif Pro, serif' as="h3">{moment().format('llll')}</Box>
                            <Box fontFamily='Source Serif Pro, serif' as="h3">Description: {result.weather? result.weather[0].description : null}</Box>
                            <Box fontFamily='Source Serif Pro, serif' as="h3">Wind speed: {result.wind_speed}</Box>
                            <Box as="h3">Sunrise: {moment.unix(result.sunrise).format('h:mm:ss a')}</Box>
                            <Box as="h3">Sunset: {moment.unix(result.sunset).format('h:mm:ss a')}</Box>

                            <Box as="h3">Humidity{result.humidity}</Box>

                        </ModalBody>
                        </ModalContent>
                    </Modal>
                    </Box>
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
