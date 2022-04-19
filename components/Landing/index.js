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
import VSCode from '../VSCode';
import Iphone from '../Iphone';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Title = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: -700, opacity: 0 }}
      animate={{ ease: 'bounce', y: -900, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, duration: 1.5, delay: 2 }}
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
      initial={{ y: -700, opacity: 1 }}
      animate={{ ease: 'bounce', y: -900, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 1.5, delay: 2 }}
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

const VSCodeAnimated = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: -300, x: 800, opacity: 0, rotate: 0 }}
      animate={{ ease: 'bounce', y: -750, x: 200, opacity: 1, rotate: -5 }}
      transition={{ type: 'spring', stiffness: 200, duration: 5, delay: 3 }}
    >
      <VSCode />
    </StyledDiv>
  );
};

const IphoneAnimated = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: -700, x: 100, opacity: 0, rotate: 0 }}
      animate={{ ease: 'bounce', y: -1100, x: 800, opacity: 1, rotate: 7 }}
      transition={{ type: 'spring', stiffness: 200, duration: 5, delay: 4 }}
    >
      <Iphone />
    </StyledDiv>
  );
};

const Landing = ({ delay = 0 }) => (
  <>
    <StyledDiv
      initial={{ y: 0, opacity: 0.5 }}
      animate={{ y: -300, opacity: 1 }}
      transition={{ duration: 3, delay: 1.5 }}
      mb={6}
    >
      <Box align="center" pos="relative">
        <ChakraImage
          src={Spotlight}
          layout="fill"
          objectFit="none"
          quality={80}
        />
      </Box>
    </StyledDiv>
    <Title />
    <TitleMask />
    <VSCodeAnimated />
    <IphoneAnimated />
  </>
);

export default Landing;
