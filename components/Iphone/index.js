import { Icon } from '@chakra-ui/icons';
import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function Iphone() {
  return (
    <Box
      maxW="14.1rem"
      h="26.1rem"
      borderWidth="1px"
      borderRadius="3xl"
      background="#39393A"
      ml="4"
    >
      <Box
        maxW="14rem"
        h="26rem"
        borderWidth="8px"
        borderColor="black"
        borderRadius="3xl"
        overflow="hidden"
        background="v"
      >
        <Box
          background="#212121"
          h="5%"
          maxW="50%"
          ml="3.5rem"
          borderBottomRadius="xl"
        >
          <Center w="7.5rem" h="15px">
            <Box background="#39393A" h="4px" w="26px" mr="0.5rem"></Box>
            <Icon viewBox="0 0 200 200" color="blue.900">
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}
