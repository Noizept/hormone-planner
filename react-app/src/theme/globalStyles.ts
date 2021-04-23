import { mode } from '@chakra-ui/theme-tools';
import Colors from './colors';

export const global = (props: any) => ({
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    bg: mode(
      Colors.lightModeBackgroundImage,
      Colors.darkModeBackgroundImage
    )(props),
  },
  '#root': {
    height: '100%',
  },
});
