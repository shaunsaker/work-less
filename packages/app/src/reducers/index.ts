import { combineReducers } from 'redux';

import userReducer, { UserState, initialUserState } from './user';
import Action from '../types/Action';

interface State {
  user: UserState;
}

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: State, action: Action) => {
  let newState = state;

  if (action.type === 'PURGE_STORE') {
    newState = {
      user: initialUserState,
    };
  }

  return appReducer(newState, action);
};

export default rootReducer;
