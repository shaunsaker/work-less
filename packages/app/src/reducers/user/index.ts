import initialState from './initialState';
import { cloneObject } from '../../utils';
import Action from '../../types/Action';
import { UserState } from './initialState';

export { UserState, initialState as initialUserState };

export default function userReducer(state = initialState, action: Action) {
  let newState: UserState;

  switch (action.type) {
    case 'SIGN_IN_USER':
      newState = cloneObject(state);
      newState = {
        ...action.payload,
        authenticated: true,
      };
      return newState;

    case 'SIGN_OUT_USER':
      newState = cloneObject(state);
      newState = initialState;
      return newState;

    default:
      return state;
  }
}
