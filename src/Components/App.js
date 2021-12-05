
import React from 'react'
import Header from './Header'

import {    
  FormControl,
  Button,
  Box,
  Flex,
  Input,
  InputGroup,
} from "@chakra-ui/react"

function App() {
  return (
    <Box >
      
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
        <main className="main_content">
          {/* add weather fetching component */}
          <dv></dv>
        </main>
        <footer className="main_content">
          Page created by yournamehere
        </footer>
    </Box>
    </Box>
    
  );
}

export default App;
