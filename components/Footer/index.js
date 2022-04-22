import { Box, Center, Text, useColorMode } from '@chakra-ui/react';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Center>
      <Box
        bg={colorMode === 'light' ? 'white' : 'black'}
        opacity={1}
        w="100%"
        fontSize="sm"
        p="4"
        position="fixed"
        bottom="0"
      >
        <Text align="center">
          &copy; {new Date().getFullYear()} Glauco Lomenha. All Rights Reserved.
        </Text>
      </Box>
    </Center>
  );
};

export default Footer;
