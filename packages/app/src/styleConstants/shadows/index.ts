import { getPrimaryTextColor } from '../colors';

const getShadowProps = (height: number, opacity: number) => {
  return {
    elevation: height,
    shadowColor: getPrimaryTextColor(opacity),
    shadowRadius: height,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
  };
};

const shadows = {
  none: getShadowProps(0, 0),
  small: getShadowProps(1, 0.33),
  regular: getShadowProps(4, 0.67),
  large: getShadowProps(8, 0.9),
};

export default shadows;
