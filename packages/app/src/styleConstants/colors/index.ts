export const getPrimaryTextColor = (alpha: number = 1) => `rgba(66, 66, 66, ${alpha})`;

const colors = {
  primaryText: getPrimaryTextColor(),
  secondaryText: getPrimaryTextColor(0.85),
  lightPrimaryText: '#e8e8e8',
  primary: '#EF5350',
  darkPrimary: '#D32F2F',
  secondary: '#4DB6AC',
};

export default colors;
