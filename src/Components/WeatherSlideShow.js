import React, { useRef, useEffect } from "react";
import {
    Box,
    Flex,
    Center, 
    Square
} from "@chakra-ui/react"
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
0% { opacity:0; }
100% { opacity:1; }
`;

const arr = [
  { show: "block", url: "https://images.unsplash.com/photo-1530563885674-66db50a1af19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" },
  { show: "none", url: "https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
  { show: "none", url: "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1491&q=80" },
  { show: "none", url: "https://images.unsplash.com/photo-1584265728328-b242c3d05acc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" },
  { show: "none", url: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVscGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" }
];

function WeatherSlideShow() {
  const [value, setValue] = React.useState(1);
  const [delay] = React.useState(4000);

  useInterval(() => {
    // Your custom logic here
    value === 4 ? setValue(1) : setValue(value + 1);
    arr.map(i => {
      return (i.show = "none");
    });
    arr[value].show = "block";
  }, delay);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  return (
    <Box>
      <Flex >
       
            <Center 
                as='h6' 
                fontSize='2.5vw' 
                w='100%' 
                fontFamily='Source Serif Pro, serif'  
                color='rgb(237, 149, 109)'
                ml='2vw'
                mr='1vw'
                h="450" ></Center>
            <Square flex="2" >
                {arr.map((item, key) => {
            return (
                    <Box
                        backgroundColor="#222"
                        backgroundImage={`url(${item.url})`}
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"
                        width="50vw"
                        height="60vh"
                        animation={`${fadeIn} ease 3s`}
                        display={item.show}
                        key={key}
                    >
                    </Box>
            );
            })}  
            </Square>
      </Flex>
    </Box>
  );
}



export default WeatherSlideShow