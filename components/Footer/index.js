import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="black" align="center" opacity={0.6} fontSize="sm" pt="4" pb="4">
      &copy; {new Date().getFullYear()} Glauco Lomenha. All Rights Reserved.
    </Box>
  );
};

export default Footer;
