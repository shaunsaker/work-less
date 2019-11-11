import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import Router from './Router';
import Loading from './components/Loading';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={Loading} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
