import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

const ChakraImage = chakra(NextImage, {
  baseStyle: { maxH: 120, maxW: 120 },
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export default ChakraImage;
