import { dispatch, state } from '../../../model';
import firebase from '../../firebase';
import { setSnackbarMessage } from '../../snackbar';
import PublicHoliday from '../../../types/PublicHoliday';

const getPublicHolidays = async (countryCode: string) => {
  await firebase
    .firestore()
    .collection('publicHolidays')
    .doc(countryCode)
    .collection('data')
    .get()
    .then((snapshot) => {
      const publicHolidays: PublicHoliday[] = snapshot.docs.map((document) => {
        const { id } = document;
        const { name, date } = document.data();
        const newDate = new Date(date.seconds * 1000); // Convert the firebase timestamp into a date

        return {
          name,
          date: newDate,
          id,
        };
      });

      state.publicHolidays = publicHolidays;
    })
    .catch((error) => {
      dispatch(setSnackbarMessage)(error.message);
    });
};

export default getPublicHolidays;
