import React from 'react'
import { connect } from 'react-redux'
//makes the time data more readable
import moment from 'moment'
import {requestModalData} from '../redux/actions/weather'
import { Modal } from 'semantic-ui-react'

// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalCloseButton,
//     List,
//     ListItem,
//     OrderedList
// } from "@chakra-ui/react"

//Upon clicking on a day, a modal window should open a display 
//additional information: sunset time, sunrise time, description, and wind speed
// const { isOpen, onOpen, onClose } = useDisclosure()
const ForecastModal = (props) => {
    
   if(props.day){
    return(
        <Modal
          closeIcon
          dimmer="blurring"
          size="mini"
          open={props.status}
          onClose={() => props.requestModalData({status: false})}
        >
          <Modal.Header>{moment().format('llll')}</Modal.Header>
          <Modal.Content>
             Sunrise: {moment.unix(props.day.sunrise).format('h:mm:ss a')}
          </Modal.Content>
          <Modal.Content>
            Sunset: {moment.unix(props.day.sunset).format('h:mm:ss a')}
          </Modal.Content>
          <Modal.Content>
            Description: {props.day.weather? props.day.weather[0].description : null}
          </Modal.Content>
           <Modal.Content>
               Wind speed: {props.day["wind_speed"]}
           </Modal.Content>
        </Modal>
    //     <Modal  closeIcon
    //       dimmer="blurring"
    //       size="mini"
    //       open={props.status}
    //       onClose={() => props.requestModalData({status: false})} isOpen>
    //     <ModalOverlay  />
    //     <ModalContent pb={5} >
    //       <ModalHeader>Wind speed: {props.day["wind_speed"]}</ModalHeader>
    //       <ModalCloseButton />
    //       <ModalBody>
    //       Sunrise: {moment.unix(props.day.sunrise).format('h:mm:ss a')}
    //       </ModalBody>
    //     </ModalContent>
    //   </Modal>
       )
}else{
    return null
}

}

const mapStateToProps = (state) => {
    return(
        {
          status: state.modalStatus,
          day: state.setDay
        }
    )
}

export default connect(mapStateToProps, {requestModalData})(ForecastModal) 
