import { Location } from 'reactxp';
import axios from 'axios';

import { state, dispatch } from '../../../model';
import { googleMaps } from '../../../config';
import { setSnackbarMessage } from '../../snackbar';

const getLocation = async () => {
  const isAvailable = await Location.isAvailable();

  if (isAvailable) {
    const position = await Location.getCurrentPosition();

    state.location.position = position;

    /*
     * Fetch the country using the position
     */
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${googleMaps.apiKey}&result_type=country`;

    try {
      const response = await axios.get(url);
      const countryCode =
        response.data.results[0] &&
        response.data.results[0].address_components[0].short_name.toLowerCase();

      state.location.countryCode = countryCode;
    } catch (error) {
      dispatch(setSnackbarMessage)(error.message);
    }
  }
};

export default getLocation;
