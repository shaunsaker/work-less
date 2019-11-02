import { DOMAIN } from '../config';

export interface IAssets {
  logo: string;
  home: string;
}

const getImageUrl = (image: string) => `${DOMAIN}/assets/images/${image}.png`;

const Assets: IAssets = {
  logo: getImageUrl('logo'),
  home: getImageUrl('home'),
};

export default Assets;
