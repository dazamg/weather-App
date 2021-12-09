import React from 'react'
import {    
    Box,
    Flex,
  } from "@chakra-ui/react"

import ContentData from './Content'


const Header = () => {
    return (
        <Box as='nav' display='flex' >
           <Flex pr="10" justify="right" as='h2' fontSize='2xl' fontFamily='Source Serif Pro, serif' color='rgb(237, 149, 109)' fontWeight='bold' >
             Weather App
           </Flex>
           <ContentData/>
        </Box>
    )
}

export default Header
