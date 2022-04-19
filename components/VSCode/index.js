import { Icon } from '@chakra-ui/icons';
import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function VSCode() {
  return (
    <Box
      maxW="2xl"
      h="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      background="#39393A"
      ml="4"
    >
      <HStack spacing="4px" mt="6px" ml="6px">
        <Icon viewBox="0 0 200 200" color="red.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Icon viewBox="0 0 200 200" color="yellow.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Icon viewBox="0 0 200 200" color="green.500">
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
      </HStack>
      <Flex background="#212121" h="88%" mt="1.5">
        <Center background="#3A3A3A" w="4%" h="100%" />
        <Box background="#2a2a2b" w="18%" h="100%">
          <Flex direction="column" align="start" ml="1rem" mt="0.5rem">
            <Text fontSize="0.7rem">OPEN EDITOR</Text>
            <Text fontSize="0.7rem">OPEN EDITOR</Text>
            <Text fontSize="0.7rem">OPEN EDITOR</Text>
            <Text fontSize="0.7rem">OPEN EDITOR</Text>
            <Text fontSize="0.7rem">OPEN EDITOR</Text>
          </Flex>
        </Box>
        <Text fontSize="0.7rem" color="pink.400">
          import react from 'react'
        </Text>
      </Flex>
    </Box>
  );
}
