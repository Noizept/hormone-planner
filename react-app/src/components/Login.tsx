import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { FiLogIn } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { loginWithPopup } = useAuth0();
  const { t } = useTranslation();
  return (
    <Button
      leftIcon={<FiLogIn />}
      onClick={() => loginWithPopup()}
      colorScheme={'telegram'}
    >
      {t('landing.login-button')}
    </Button>
  );
};

export default Login;
