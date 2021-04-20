import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fontsource/playfair-display';
import './i18n';

ReactDOM.render(
  <React.Suspense fallback="">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);
