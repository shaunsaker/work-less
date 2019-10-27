import { DOMAIN } from '../config';

export interface IAssets {
  logo: string;
}

const getImageUrl = (image: string) => `${DOMAIN}/assets/images/${image}`;

const Assets: IAssets = {
  logo: getImageUrl('logo'),
};

export default Assets;
