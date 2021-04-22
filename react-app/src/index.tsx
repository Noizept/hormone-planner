import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/playfair-display';
import './i18n';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <React.Suspense fallback="">
    <React.StrictMode>
      <Auth0Provider
        domain="dev-40zn7o28.eu.auth0.com"
        clientId="JfS1fybspwR76xNoOhu4tIEDWdNxEgZ0"
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Auth0Provider>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);
