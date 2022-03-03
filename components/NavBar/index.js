import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex as="nav" mt="2">
      <Box p="2" ml="4">
        <Heading size="md">
          Lomb<span>eira</span>.
        </Heading>
      </Box>
      <Spacer />
      <Box mr="4">
        {colorMode === 'light' ? (
          <IconButton
            icon={<Icon as={SunIcon} />}
            onClick={toggleColorMode}
            mr="4"
          />
        ) : (
          <IconButton
            icon={<Icon as={MoonIcon} />}
            onClick={toggleColorMode}
            mr="4"
          />
        )}
        <Button colorScheme="blue" mr="4">
          Sign Up
        </Button>
        <Button colorScheme="blue">Log in</Button>
      </Box>
    </Flex>
  );
}
