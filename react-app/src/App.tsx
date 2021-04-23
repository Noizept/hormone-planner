import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LazyLanding = React.lazy(() => import('./pages/Landing'));
const LazyMain = React.lazy(() => import('./pages/MainPage'));

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {!isAuthenticated && <LazyLanding />}
      {isAuthenticated && <LazyMain />}
    </>
  );
}

export default App;
