import { state } from '../../../model';

const resetSnackbarMessage = () => {
  state.snackbar.message = undefined;
};

export default resetSnackbarMessage;
