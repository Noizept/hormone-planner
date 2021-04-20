import React from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { ChakraProvider, Spinner } from '@chakra-ui/react';
import Landing from './pages/Landing';
import theme from './theme';

function App() {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuth0();
  return (
    <Auth0Provider
      domain="dev-40zn7o28.eu.auth0.com"
      clientId="JfS1fybspwR76xNoOhu4tIEDWdNxEgZ0"
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <ChakraProvider theme={theme}>
        {!isAuthenticated && <Landing />}
      </ChakraProvider>
    </Auth0Provider>
  );
}

export default App;
