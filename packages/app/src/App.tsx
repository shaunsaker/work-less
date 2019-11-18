import React from 'react';

import { Provider } from './model';
import Router from './Router';
import ErrorHandler from './containers/ErrorHandler';
import AuthHandler from './containers/AuthHandler';
import LocationHandler from './containers/LocationHandler';
import SnackbarHandler from './containers/SnackbarHandler';
import StatusBarHandler from './containers/StatusBarHandler';

const App: React.FC = () => {
  return (
    <Provider>
      <ErrorHandler>
        <AuthHandler />
        <LocationHandler />
        <StatusBarHandler />
        <SnackbarHandler>
          <Router />
        </SnackbarHandler>
      </ErrorHandler>
    </Provider>
  );
};

export default App;
