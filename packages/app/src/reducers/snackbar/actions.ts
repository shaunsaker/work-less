import { createAction } from 'typesafe-actions';

import { Message } from './models';

export const setSnackbarMessage = createAction('SET_SNACKBAR_MESSAGE', (message: Message) => ({
  message,
}))();
