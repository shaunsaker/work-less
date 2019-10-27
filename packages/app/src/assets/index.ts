export interface IAssets {
  logo: string;
}

const domain = 'http://localhost:9999/packages/app/src';
const getImageUrl = (image: string) => `${domain}/assets/images/${image}`;

const Assets: IAssets = {
  logo: getImageUrl('logo'),
};

export default Assets;
