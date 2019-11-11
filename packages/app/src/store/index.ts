import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { logger } from 'redux-logger';

import { DEV } from '../config';
import reducers from '../reducers';

// add the middlewares
const middlewares = [];

if (DEV) {
  middlewares.push(logger);
}

// apply the middleware
const middleware = applyMiddleware(...middlewares);

const persistConfig = {
  key: 'root',
  stateReconciler: autoMergeLevel2,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
