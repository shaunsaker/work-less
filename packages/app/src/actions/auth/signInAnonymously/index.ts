import { dispatch, state } from '../../../model';
import firebase from '../../firebase';
import { setSnackbarMessage } from '../../snackbar';

const signInAnonymously = async () => {
  try {
    const { user } = await firebase.auth().signInAnonymously();

    state.user = user;
  } catch (error) {
    dispatch(setSnackbarMessage)(error.message);
  }
};

export default signInAnonymously;
