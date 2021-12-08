import React, { Component } from 'react'
import Geocode from "react-geocode"
import { connect } from 'react-redux'
import { getWeatherRequest, requestDataItem } from "../redux/actions"
// I couldn't get the useDispatch and useSelector to work 
//in functional component so i had to switch to a class component
// import {useDispatch, useSelector} from 'react-redux'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Input
  } from '@chakra-ui/react'

//geocode Api Key
Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY)

class ContentData extends Component {
    //set the default state for the form
    state ={
        inputVal: ""
    }
    // use similar to useEffect to get component to update on load
    componentDidUpdate(){
        document.title = this.props.cityLog
     }

    handleSelectedCities = (e, { name }) => {
        this.props.requestDataItem({name})
        // Update location coordinates to lat lng
        Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
            // request the weather api
                this.props.getWeatherRequest({lat, lng});      
        },
        err => {
        console.error(err)
    })  
    }

    handleOnChange = (e) => {
        let val = e.target.value.toLowerCase()
        if(val.length >= 2){
         this.setState({
           inputVal: val[0].toUpperCase() + val.substring(1)
         })
        }   
    }

    handleSubmit = () => {
        //form control -- GA
        let name = this.state.inputVal
        this.props.requestDataItem({name})
        // Update location coordinates to lat lng
        Geocode.fromAddress(name)
        .then(r => {
            const {lat, lng} = r.results[0].geometry.location
            // request the weather api
            this.props.getWeatherRequest({lat, lng});
                 
       },
       err => {
         console.error(err)
       })
     
       //clear state 
       this.setState({
         inputVal: ""
       })
         
      }


    render() {
        const { cityLog } = this.props

    return (
        <Menu>
            <MenuButton as={Button} >
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem 
                    name='New York'
                    active={cityLog === 'New York'}
                    onClick={this.handleSelectedCities}></MenuItem>
                <MenuItem 
                    name='Los Angeles'
                    active={cityLog === 'Los Angeles'}
                    onClick={this.handleSelectedCities}></MenuItem>

                <MenuItem 
                    name='Miami'
                    active={cityLog === 'Miami'}
                    onClick={this.handleSelectedCities}>Mark as Draft</MenuItem>
                <MenuItem>
                    <Input type='text'  action>
                    <Input size="mini" onChange={this.handleOnChange} placeholder='Search...' />
                    <Button color="violet" inverted type='submit' size="mini" onClick={this.handleSubmit}>Search</Button>
                    </Input>
                </MenuItem>
            </MenuList>
        </Menu>
    )
    }
}
const mapStateToProps = (state) => {
    return(
        { ...state }
        )
};
    
export default connect(mapStateToProps,
    { getWeatherRequest, requestDataItem })
    (ContentData);