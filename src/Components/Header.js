import React from 'react'
import {    
    FormControl,
    Button,
    Box,
    Flex,
    Input,
    InputGroup,
  } from "@chakra-ui/react"


const Header = () => {
    return (
        <Box as='nav' display='flex'  >
      

        <FormControl isRequired display='flex' ml='13vw'>
          <InputGroup> 
            <Input 
              type="search"
              className="form-control"
              placeholder="EMAIL"
              focusBorderColor="rgb(237, 149, 109)"
              variant='filled'
            />
          </InputGroup>
          <Button 
            ml='0.5vw'
            background="rgb(75, 97, 113)" 
            color='white'
            className="btn"  
    
          >
            Search
          </Button>
        </FormControl>
        <FormControl isRequired ml='13vw'>
          <InputGroup> 
            <Input 
              type="search"
              className="form-control"
              placeholder="EMAIL"
              focusBorderColor="rgb(237, 149, 109)"
              variant='filled'
            />
          </InputGroup>
        </FormControl>
      </Box>
    )
}

export default Header
