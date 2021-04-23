import React from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import {
  Link,
  HStack,
  Text,
  Flex,
  FlexProps,
  useColorModeValue,
} from '@chakra-ui/react';
import colors from '../theme/colors';

type NavigationLinkProps = {
  to: string;
  text: string;
  icon: React.ReactElement;
};
export const NavigationLink: React.FC<NavigationLinkProps & FlexProps> = (
  props
): JSX.Element => {
  const { to, text, icon, ...rest } = props;
  const activeBorderColor = useColorModeValue(
    colors.darkModeBg,
    colors.lightModeBackgroundImage
  );
  return (
    <Flex {...rest} width={'100%'}>
      <Link
        cursor={'pointer'}
        margin={'12px 15px'}
        width={'100%'}
        exact
        as={ReactLink}
        to={to}
        boxShadow={'none'}
        _focus={{ outline: 'none' }}
        _hover={undefined}
        sx={{ WebkitTapHighlightColor: 'transparent' }}
        activeStyle={{
          fontWeight: 'bold',
          borderRight: `2px solid ${activeBorderColor}`,
        }}
      >
        <HStack spacing={4}>
          {icon}
          <Text>{text}</Text>
        </HStack>
      </Link>
    </Flex>
  );
};
