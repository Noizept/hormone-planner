import { mode } from '@chakra-ui/theme-tools';
import Colors from './colors';

export const global = (props: any) => ({
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    bg: mode(Colors.lightModeBg, Colors.darkModeBg)(props),
  },
  '#root': {
    height: '100%',
  },
});
