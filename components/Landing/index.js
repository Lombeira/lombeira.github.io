import { motion } from 'framer-motion';
import {
  Box,
  Center,
  chakra,
  Heading,
  shouldForwardProp,
} from '@chakra-ui/react';
import Spotlight from '../../public/Spotlight.png';
import ChakraImage from '../ChakraImage';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Title = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: -600, opacity: 0 }}
      animate={{ ease: 'bounce', y: -800, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, duration: 1.2, delay: 2 }}
    >
      <Center>
        <Heading as="h1" pos="absolute" size="4xl">
          Lombeira.
        </Heading>
        <Heading as="h2" pos="absolute" size="3xl" mt="40">
          Frontend Developer
        </Heading>
      </Center>
    </StyledDiv>
  );
};

const TitleMask = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: -600, opacity: 1 }}
      animate={{ ease: 'bounce', y: -800, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 1.2, delay: 2 }}
    >
      <Center>
        <Heading as="h1" pos="absolute" size="4xl" color="black">
          Lombeira.
        </Heading>
        <Heading as="h2" pos="absolute" size="3xl" mt="40" color="black">
          Frontend Developer
        </Heading>
      </Center>
    </StyledDiv>
  );
};

const Landing = ({ delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 2, delay }}
    mb={6}
  >
    <Box align="center" pos="relative">
      <ChakraImage
        src={Spotlight}
        layout="fill"
        objectFit="none"
        quality={80}
      />
      <Title />
      <TitleMask />
    </Box>
  </StyledDiv>
);

export default Landing;
