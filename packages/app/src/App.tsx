import React from 'react';

import { Provider } from './model';
import Router from './Router';
import ErrorHandler from './containers/ErrorHandler';
import AuthHandler from './containers/AuthHandler';
import LocationHandler from './containers/LocationHandler';
import SnackbarHandler from './containers/SnackbarHandler';

const App: React.FC = () => {
  return (
    <Provider>
      <ErrorHandler>
        <AuthHandler />
        <LocationHandler />
        <SnackbarHandler>
          <Router />
        </SnackbarHandler>
      </ErrorHandler>
    </Provider>
  );
};

export default App;
