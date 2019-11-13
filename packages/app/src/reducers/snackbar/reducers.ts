import { createReducer } from 'typesafe-actions';

import { setSnackbarMessage } from './actions';
import { State, Action } from './models';

const initialState = {
  message: undefined,
};

const reducer = createReducer(initialState).handleAction(
  setSnackbarMessage,
  (state: State, action: Action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
);

export type SnackbarState = ReturnType<typeof reducer>;

export default reducer;
