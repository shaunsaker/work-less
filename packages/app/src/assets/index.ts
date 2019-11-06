import { DOMAIN } from '../config';

export interface Assets {
  logo: string;
  home: string;
  selectCountry: string;
  inputLeaveDays: string;
  results: string;
}

const getImageUrl = (image: string) => `${DOMAIN}/assets/images/${image}.png`;

const Assets: Assets = {
  logo: getImageUrl('logo'),
  home: getImageUrl('home'),
  selectCountry: getImageUrl('select-country'),
  inputLeaveDays: getImageUrl('input-leave-days'),
  results: getImageUrl('results'),
};

export default Assets;
