import { state } from '../../../model';

const setSnackbarMessage = (message: string) => {
  state.snackbar.message = message;
};

export default setSnackbarMessage;
