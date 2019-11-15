import { dispatch, state } from '../../../model';
import firebase from '../../firebase';
import { setSnackbarMessage } from '../../snackbar';

const getCountries = async () => {
  await firebase
    .firestore()
    .collection('countries')
    .get()
    .then((snapshot) => {
      const countries = snapshot.docs.map((document) => {
        const { id } = document;
        const { name } = document.data();

        return {
          name,
          id,
        };
      });

      state.countries = countries;
    })
    .catch((error) => {
      dispatch(setSnackbarMessage)(error.message);
    });
};

export default getCountries;
