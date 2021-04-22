import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner, Flex, HStack } from '@chakra-ui/react';
import { LanguageSelector, ToggleColor } from './components';
import Logout from './components/Logout';
import { useIsMobile } from './hooks';

const LazyLanding = React.lazy(() => import('./pages/Landing'));

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const isMobile = useIsMobile();

  return (
    <Flex direction={'column'} height={'100%'} borderRadius="xl">
      <Flex width={'100%'} justifyContent={isMobile ? 'center' : 'flex-end'}>
        <HStack spacing="24px" margin={'15px'}>
          <LanguageSelector />
          <ToggleColor />
        </HStack>
      </Flex>
      {isLoading && <Spinner />}
      {!isAuthenticated && !isLoading && <LazyLanding />}
      {isAuthenticated && !isLoading && <Logout />}
    </Flex>
  );
}

export default App;
