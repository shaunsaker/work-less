import { createModel } from '@prodo/core';
import loggerPlugin from '@prodo/logger';

export interface State {
  snackbar: {
    message?: string;
  };
}

export const model = createModel<State>().with(loggerPlugin);

export const { state, watch, dispatch } = model.ctx;
