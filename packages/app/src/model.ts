import { createModel } from '@prodo/core';
import loggerPlugin from '@prodo/logger';
import { User } from 'firebase';

export interface State {
  snackbar: {
    message?: string;
  };
  user: User | null;
}

export const model = createModel<State>().with(loggerPlugin);

export const { Provider } = model.createStore({
  logger: true,
  initState: {
    snackbar: {},
    user: null,
  },
});

export const { state, watch, dispatch } = model.ctx;
