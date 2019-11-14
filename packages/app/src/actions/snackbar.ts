import { state } from '../model';

const setSnackbarMessage = (message: string) => {
  state.snackbar.message = message;
};

const resetSnackbarMessage = () => {
  state.snackbar.message = undefined;
};

export { setSnackbarMessage, resetSnackbarMessage };
