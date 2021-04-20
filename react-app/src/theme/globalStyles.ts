import { mode } from '@chakra-ui/theme-tools';
import Colors from './colors';

export const global = (props: any) => ({
  body: {
    bg: mode(Colors.lightModeBg, Colors.darkModeBg)(props),
  },
});
