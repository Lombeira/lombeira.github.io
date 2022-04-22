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
import Button from '../Button';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const Title = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: -700, opacity: 0, scale: 1 }}
      animate={{
        ease: 'bounce',
        y: -950,
        opacity: 1,
        scale: [1, 1, 0.8],
      }}
      transition={{ type: 'spring', stiffness: 100, duration: 2, delay: 3 }}
    >
      <Center>
        <Heading as="h1" pos="absolute" size="4xl">
          Lombeira
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
      animate={{ ease: 'bounce', y: -950, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 8, delay: 3 }}
    >
      <Center>
        <Heading as="h1" pos="absolute" size="4xl" color="black">
          Lombeira
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
      initial={{ y: 100, x: 400, opacity: 1, rotate: 0 }}
      animate={{ ease: 'bounce', y: -790, x: -100, opacity: 1, rotate: -5 }}
      transition={{ type: 'tween', stiffness: 200, duration: 1, delay: 3 }}
    >
      <Center>
        <VSCode />
      </Center>
    </StyledDiv>
  );
};

const IphoneAnimated = ({ delay = 0 }) => {
  return (
    <StyledDiv
      initial={{ y: 100, x: 0, opacity: 1, rotate: 0 }}
      animate={{ ease: 'bounce', y: -1200, x: 300, opacity: 1, rotate: 7 }}
      transition={{ type: 'tween', stiffness: 200, duration: 1, delay: 3.5 }}
    >
      <Center>
        <StyledDiv
          whileHover={{
            scale: 1.5,
            rotate: -7,
            delay: 0,
          }}
        >
          <Iphone />
        </StyledDiv>
      </Center>
    </StyledDiv>
  );
};

const AnimatedButton = () => {
  return (
    <StyledDiv
      initial={{ y: -700, opacity: 1 }}
      animate={{ ease: 'bounce', y: -1000, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, duration: 8, delay: 5 }}
    >
      <Center>
        <Button href="/home">RECEBA</Button>
      </Center>
    </StyledDiv>
  );
};

const Landing = ({ delay = 0 }) => (
  <Box overflow="hidden" w="100%" h="100%">
    <StyledDiv
      initial={{ y: 0, opacity: 0.5 }}
      animate={{ y: -300, opacity: 1 }}
      transition={{ duration: 3, delay: 1.5 }}
      mb={6}
    >
      <Box align="center" pos="relative">
        <ChakraImage src={Spotlight} quality={80} />
      </Box>
    </StyledDiv>
    <Title />
    <TitleMask />
    <VSCodeAnimated />
    <IphoneAnimated />
    <AnimatedButton />
  </Box>
);

export default Landing;
