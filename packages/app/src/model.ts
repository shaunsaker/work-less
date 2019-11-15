import { createModel } from '@prodo/core';
import loggerPlugin from '@prodo/logger';
import { User } from 'firebase';

import Country from './types/Country';

export interface State {
  countries: Country[];
  form: {
    country: Country | null;
    leaveDays: number | null;
  };
  location: {
    position: Position | null;
    countryCode: string | null;
  };
  snackbar: {
    message?: string;
  };
  user: User | null;
}

export const model = createModel<State>().with(loggerPlugin);

export const { Provider } = model.createStore({
  logger: true,
  initState: {
    countries: [],
    form: {
      leaveDays: null,
      country: null,
    },
    location: {
      position: null,
      countryCode: null,
    },
    snackbar: {},
    user: null,
  },
});

export const { state, watch, dispatch } = model.ctx;
