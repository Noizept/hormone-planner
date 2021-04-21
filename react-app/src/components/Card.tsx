import React from 'react';
import { BoxProps, Box, useColorModeValue } from '@chakra-ui/react';
import colors from '../theme/colors';
export const Card: React.FC<BoxProps> = (props) => {
  const bgColor = useColorModeValue(colors.lightModeBg, colors.darkModeBg);

  return (
    <Box bg={bgColor} shadow="dark-lg" rounded="2xl" {...props}>
      {props.children}
    </Box>
  );
};
export default Card;
