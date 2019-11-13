import { combineReducers } from 'redux';

import { SnackbarState, snackbarReducer } from './snackbar';

const reducers = combineReducers({
  snackbar: snackbarReducer,
});

export interface ApplicationState {
  snackbar: SnackbarState;
}

export default reducers;
