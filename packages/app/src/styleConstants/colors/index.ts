export const getPrimaryTextColor = (alpha: number = 1) => `rgba(66, 66, 66, ${alpha})`;

const colors = {
  primaryText: getPrimaryTextColor(),
};

export default colors;
