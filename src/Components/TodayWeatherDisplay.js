//  import React, {useEffect, useState} from 'react';
// import { connect } from 'react-redux';
// import moment from 'moment';

// import {
//     Box,
//     Badge,
//     ListItem,
//     List
//   } from '@chakra-ui/react'
// const TodayWeatherDisplay = (props) => {
//     // const [temps, setTemps] = useState('')
//     // console.log("eeeeee", props.weathers.current.weather[0].description)
//     if(props.weathers.length !== 0){
//         // 7 days Forecast - map through the weather arr
//        return Object.entries(props.weathers.current.weather[0].description).map((result, i) => {
//             console.log("%!!!###!!", result)
//             // let iconImg = result.weather[0].icon;
//             // let icUrl = "http://openweathermap.org/img/w/" + iconImg + ".png";
          
//             // converting to Fahrenheit 
//             // let temp = Math.trunc((result.temp.day - 273.15) * 9/5 + 32)
//             return (
//                 <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'> 
//                     <Box 
//                         display='flex' 
//                         alignItems='baseline' 
//                     >
//                         <List key={i}>
//                             <ListItem>
//                            result{result[result]}
//                             {JSON.stringify(result)}
//                             </ListItem>
//                         </List>   
//                     </Box>
//                 </Box>
//             )
//         })
//     } else {
//         return null
//     }

// }


// const mapStateToProps = (state) => {

// return {
//    weathers: state.weathers,
//    day: state.setDay,
//    status: state.modalStatus
// }
// }


// export default connect(mapStateToProps,)(TodayWeatherDisplay) 