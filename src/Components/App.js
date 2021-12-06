
import React from 'react';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux'
import { getWeatherSuccess } from '../redux/actions/weather';


import Header from './Header';

import {    
  FormControl,
  Button,
  Box,
  Flex,
  Input,
  InputGroup,
} from "@chakra-ui/react"

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.weatherReducer.users);
  console.log("$$$$$", users)
  // const { weather } = useSelector((state) => ({ ...state }));

  return (
    <Box>
      
      <Box 
        w='100%'
        minH='100vh'
        bgImage="url('https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')"
        bgSize='contain'
        bgRepeat='no-repeat'
        bgPosition='-30%'
        display='flex'
        flexDirection='column'
        // alignItems='center'
        // justifyContent='center'
        backgroundPosition="center"
        backgroundSize="cover"
        width="100vw"
      >
        <Header/>
        <Flex align="center" justify="center" as='h2' fontSize='2xl' w='100%' fontFamily='Source Serif Pro, serif' color='rgb(237, 149, 109)' fontWeight='bold'>
          React Weather App
        </Flex>
        <button onClick={() => dispatch(getWeatherSuccess())}>get weather</button>
        <div>
          Weather: {users.map((user => (
          <div>
            {user.name}
            
          </div>
            )))}
            {JSON.stringify(users)}
        </div>
        <footer className="main_content">
          Page created by yournamehere
        </footer>
    </Box>
    </Box>
    
  );
}

// export default connect(null, {
//   getWeatherRequest
// })(App);
export default App
