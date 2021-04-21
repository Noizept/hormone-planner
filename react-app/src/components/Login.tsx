import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';
const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      leftIcon={<FiLogIn />}
      onClick={() => loginWithRedirect()}
      // variant={'outline'}
      colorScheme={'telegram'}
    >
      Log In
    </Button>
  );
};

export default Login;
