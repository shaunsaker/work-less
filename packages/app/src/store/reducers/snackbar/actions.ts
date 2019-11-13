import { action } from 'typesafe-actions';

import { SnackbarActionTypes, Message } from './types';

export const setSnackbarMessage = (message: Message) =>
  action(SnackbarActionTypes.SET_SNACKBAR_MESSAGE, { message });

export const resetSnackbarMessage = () => action(SnackbarActionTypes.RESET_SNACKBAR_MESSAGE);
