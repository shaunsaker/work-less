import React from 'react';

import { model } from './model';
import Router from './Router';
import ErrorHandler from './containers/ErrorHandler';
import SnackbarHandler from './containers/SnackbarHandler';

const { store, Provider } = model.createStore({
  logger: true,
  initState: {
    snackbar: {},
  },
});

console.log({ store });

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
