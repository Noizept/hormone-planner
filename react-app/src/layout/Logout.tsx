import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink as ReactLink } from 'react-router-dom';
import { Link, HStack, Text } from '@chakra-ui/react';

type NavigationLinkProps = {
  text: string;
  icon: React.ReactElement;
};
export default function Logout({ text, icon }: NavigationLinkProps) {
  const { logout } = useAuth0();

  return (
    <Link
      to={'#'}
      as={ReactLink}
      onClick={() => logout({ returnTo: window.location.origin })}
      cursor={'pointer'}
      margin={'12px 15px'}
      width={'100%'}
      boxShadow={'none'}
      _focus={{ outline: 'none' }}
      _hover={undefined}
    >
      <HStack spacing={4}>
        {icon}
        <Text>{text}</Text>
      </HStack>
    </Link>
  );
}
