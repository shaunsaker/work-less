import { createModel } from '@prodo/core';
import loggerPlugin from '@prodo/logger';
import { User } from 'firebase';

import Country from './types/Country';

export interface State {
  snackbar: {
    message?: string;
  };
  user: User | null;
  countries: Country[];
}

export const model = createModel<State>().with(loggerPlugin);

export const { Provider } = model.createStore({
  logger: true,
  initState: {
    snackbar: {},
    user: null,
    countries: [],
  },
});

export const { state, watch, dispatch } = model.ctx;
