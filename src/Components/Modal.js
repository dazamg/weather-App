import React from 'react'
import { connect } from 'react-redux'
//makes the time data more readable
import moment from 'moment'
import {requestModalData} from '../redux/actions/weather'
import { Modal } from 'semantic-ui-react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    List,
    ListItem,
    OrderedList
} from "@chakra-ui/react"

//Upon clicking on a day, a modal window should open a display 
//additional information: sunset time, sunrise time, description, and wind speed

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
          
        </Modal>
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
