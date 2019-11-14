import React from 'react';

import { Provider } from './model';
import Router from './Router';
import ErrorHandler from './containers/ErrorHandler';
import SnackbarHandler from './containers/SnackbarHandler';

const App: React.FC = () => {
  return (
    <Provider>
      <ErrorHandler>
        <SnackbarHandler>
          <Router />
        </SnackbarHandler>
      </ErrorHandler>
    </Provider>
  );
};

export default App;
