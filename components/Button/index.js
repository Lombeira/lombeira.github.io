import { Box, Link } from '@chakra-ui/react';
import React from 'react';

export default function Button({ children, href }) {
  return (
    <Link href={href}>
      <Box
        as="button"
        height="3rem"
        width="14rem"
        lineHeight="1.2"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        px="8px"
        borderRadius="31.25rem"
        fontSize="14px"
        fontWeight="semibold"
        fontFamily="Lexend Mega"
        bgGradient="linear(to-r, #7928CA, #FF0080)"
        color="white"
        _active={{
          transform: 'scale(0.98)',
        }}
        _focus={{
          boxShadow: '0 0 1px 2px #ccd0d5, 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        {children}
      </Box>
    </Link>
  );
}
