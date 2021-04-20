import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size={'lg'}
      variant={'ghost'}
      aria-label={'Toggle'}
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <FiSun /> : <FaMoon />}
    />
  );
};

export default Login;
