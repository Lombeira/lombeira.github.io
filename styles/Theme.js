import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  pink: '#FF0080',
  gray: {
    50: '#f7fafc',
    900: '#171923',
  },
};

const fonts = { heading: 'Lexend Mega', body: 'Montserrat' };

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode(colors.white, colors.black)(props),
    },
  }),
};

const theme = extendTheme({ colors, config, fonts, styles });

export default theme;
