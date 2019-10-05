import { getPrimaryTextColor } from '../colors';

const getShadowProps = (height: number, opacity: number) => {
  return {
    elevation: height,
    shadowColor: getPrimaryTextColor(opacity),
    shadowRadius: height,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    borderBottomWidth: 0.1,
    borderColor: getPrimaryTextColor(opacity),
  };
};

const shadows = {
  small: getShadowProps(1, 0.33),
  regular: getShadowProps(4, 0.67),
  large: getShadowProps(8, 0.9),
};

export default shadows;
