import { Reducer } from 'redux';
import { SnackbarState, SnackbarActionTypes } from './types';

const initialState: SnackbarState = {
  message: undefined,
};

const reducer: Reducer<SnackbarState> = (state = initialState, action) => {
  switch (action.type) {
    case SnackbarActionTypes.SET_SNACKBAR_MESSAGE: {
      return { ...state, message: action.payload.message };
    }
    case SnackbarActionTypes.RESET_SNACKBAR_MESSAGE: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
