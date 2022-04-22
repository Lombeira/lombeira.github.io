import { Icon } from '@chakra-ui/icons';
import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import avatarImage from '../../public/avatar.jpg';
import ChakraImage from '../ChakraImage';

export default function Iphone() {
  return (
    <Box
      w="13.2rem"
      h="26.2rem"
      borderWidth="2px"
      borderRadius="3xl"
      background="#39393A"
    >
      <Box
        w="13rem"
        h="26rem"
        borderWidth="8px"
        borderColor="black"
        borderRadius="3xl"
        overflow="hidden"
      >
        <Box
          background="#212121"
          h="5%"
          ml="2.4rem"
          borderBottomRadius="xl"
          position="absolute"
          zIndex="1"
        >
          <Center w="7.5rem" h="15px">
            <Box background="#39393A" h="4px" w="26px" mr="0.5rem" />
            <Icon viewBox="0 0 200 200" color="blue.900">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          </Center>
        </Box>
        <ChakraImage src={avatarImage} />
      </Box>
    </Box>
  );
}
