import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  chakra,
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
          Lomb
          <chakra.span color={colorMode === 'light' ? 'blue.500' : 'blue.300'}>
            eira
          </chakra.span>
          .
        </Heading>
      </Box>
      <Spacer />
      <Breadcrumb separator=" " mt="2">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Spacer />
      <Box mr="4">
        {colorMode === 'light' ? (
          <IconButton
            icon={<Icon as={SunIcon} />}
            onClick={toggleColorMode}
            mr="2"
          />
        ) : (
          <IconButton
            icon={<Icon as={MoonIcon} />}
            onClick={toggleColorMode}
            mr="2"
          />
        )}
      </Box>
    </Flex>
  );
}
