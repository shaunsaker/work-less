import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Router from './Router';
import Loading from './components/Loading';
import ErrorHandler from './components/ErrorHandler';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <ErrorHandler>
          <Router />
        </ErrorHandler>
      </PersistGate>
    </Provider>
  );
};

export default App;
