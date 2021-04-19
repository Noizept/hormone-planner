import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import AuthButton from "./components/AuthButton";
import Profile from "./components/Profile";
import ToggleColor from "./components/ToggleColor";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <Auth0Provider
      domain="dev-40zn7o28.eu.auth0.com"
      clientId="JfS1fybspwR76xNoOhu4tIEDWdNxEgZ0"
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      {"React sim"}
      <ChakraProvider theme={theme}>
        <ToggleColor></ToggleColor>
        <AuthButton />
        <Profile />
      </ChakraProvider>
    </Auth0Provider>
  );
}

export default App;
