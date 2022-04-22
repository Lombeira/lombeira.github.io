import { Icon } from '@chakra-ui/icons';
import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function VSCode() {
  const importCode = (str1, str2, destructure) => {
    return (
      <Text fontSize="0.7rem" color="pink.300" ml="1rem">
        import{' '}
        <Box as="span" color="blue.200">
          {destructure ? (
            <>
              <Box as="span" color="yellow.200">{`{`}</Box>
              <Box as="span" color="blue.200">
                {` ${str1} `}
              </Box>
              <Box as="span" color="yellow.200">{`}`}</Box>
            </>
          ) : (
            ` ${str1} `
          )}
        </Box>{' '}
        from{' '}
        <Box as="span" color="orange.400">
          &apos;{str2}&apos;
        </Box>
        <Box as="span" color="white">
          ;
        </Box>{' '}
      </Text>
    );
  };

  const propsCode = (name, value) => {
    if (typeof value === 'string') {
      return (
        <Text fontSize="0.8rem" ml="3rem">
          <Box as="span" color="blue.200">{`${name}=`}</Box>
          <Box as="span" color="orange.300">
            &apos;{value}&apos;
          </Box>
        </Text>
      );
    }
    if (typeof value === 'number') {
      return (
        <Text fontSize="0.8rem" ml="3rem">
          <Box as="span" color="blue.200">{`${name}=`}</Box>
          <Box as="span" color="pink.300">{`{`}</Box>
          <Box as="span" color="teal.100">
            {` ${value} `}
          </Box>
          <Box as="span" color="pink.300">{`}`}</Box>
        </Text>
      );
    }

    if (typeof value === 'object') {
      return (
        <Text fontSize="0.8rem" ml="3rem">
          <Box as="span" color="blue.200">{`${name}=`}</Box>
          <Box as="span" color="pink.300">{`{ `}</Box>
          <Box as="span" color="teal.300">{`[ `}</Box>

          <Box as="span" color="orange.300">
            &apos;{value[0]}&apos;, &apos;{value[1]}&apos;, &apos;{value[2]}
            &apos;
          </Box>
          <Box as="span" color="teal.300">{` ]`}</Box>
          <Box as="span" color="pink.300">{` }`}</Box>
        </Text>
      );
    }
  };

  const jsxCode = () => {
    return (
      <>
        <Text fontSize="0.75rem" ml="1rem">
          <Box as="span" color="pink.300">
            {`export default `}
          </Box>
          <Box as="span" color="blue.500">
            {`function `}
          </Box>
          <Box as="span" color="yellow.200">
            {`FrontEndDev `}
          </Box>
          <Box as="span" color="yellow.400">
            {`() { `}
          </Box>
        </Text>
        <Text fontSize="0.85rem" ml="2rem">
          <Box as="span" color="gray.400">
            {`<`}
          </Box>
          <Box as="span" color="teal.300">
            GlaucoLomenha
          </Box>
        </Text>
        {propsCode('age', 33)}
        {propsCode('city', 'Teresópolis')}
        {propsCode('lang', ['Js', 'Ts', 'Kotlin', 'Dart'])}
        {propsCode('frameworks', [
          'Next',
          'Framer-Motion',
          'ChakraUI',
          'TailwindCSS',
        ])}

        <Text fontSize="0.8rem" ml="2rem">
          <Box as="span" color="gray.400">
            {` />`}
          </Box>
        </Text>
        <Text fontSize="0.8rem" ml="1.5rem">
          <Box as="span" color="yellow.300">
            {` }`}
          </Box>
          <Box as="span" color="white">
            ;
          </Box>{' '}
        </Text>
      </>
    );
  };

  const Code = () => {
    return (
      <>
        <Box mt="0.5rem">
          {importCode('React', 'react')}
          {importCode('GlaucoLomenha', '@RiodeJaneiro/Brazil', true)}
        </Box>
        <Box mt="1rem">{jsxCode()}</Box>
      </>
    );
  };

  return (
    <Box
      maxW="2xl"
      minW="2xl"
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
        <Flex direction="column">
          <Code />
        </Flex>
      </Flex>
    </Box>
  );
}
