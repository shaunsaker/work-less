import { state } from '../../../model';
import Country from '../../../types/Country';

const setCountry = (country: Country) => {
  state.form.country = country;
};

export default setCountry;
