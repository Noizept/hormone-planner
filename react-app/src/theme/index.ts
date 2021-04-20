import { extendTheme } from '@chakra-ui/react';
import { global } from './globalStyles';

const theme = extendTheme({
  fonts: {
    body: 'playfair-display',
  },
  styles: {
    global,
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
});
export default theme;
