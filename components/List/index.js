import { Box, Text, Flex, useColorMode, Divider } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';

const List = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };

  return (
    <Flex
      maxW="62.5rem"
      w={['90vw', '90vw', '90vw', '70vw']}
      direction={['column', 'column', 'row', 'row']}
      justify="center"
      bg={bgColor[colorMode]}
      boxShadow="md"
      rounded="lg"
      m="auto"
      my="12"
      p="4"
    >
      <Flex align="center" mx="2">
        <Icon viewBox="0 0 200 200" color={ colorMode === 'light' ? 'purple.600' : 'purple.400' }>
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Usability
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Sometimes the simples things are the hardest to find. So we created
            a new line for everday life.
          </Text>
        </Box>
      </Flex>
      <Divider orientation="vertical" borderColor="gray.300" my="2" />
      <Flex align="center" mx="2">
        <Icon viewBox="0 0 200 200" color={ colorMode === 'light' ? 'purple.600' : 'purple.400' }>
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Box m="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Parralax Effect
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Sometimes the simples things are the hardest to find. So we created
            a new line for everday life.
          </Text>
        </Box>
      </Flex>
      <Divider orientation="vertical" borderColor="gray.300" my="2" />
      <Flex align="center" mx="2">
        <Icon viewBox="0 0 200 200" color={ colorMode === 'light' ? 'purple.600' : 'purple.400' }>
          <path
            fill="currentColor"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        <Box mx="4">
          <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
            Unlimited Colors
          </Text>
          <Text as="h3" fontWeight="light" fontSize="lg">
            Sometimes the simples things are the hardest to find. So we created
            a new line for everday life.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default List;
