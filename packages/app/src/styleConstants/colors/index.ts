export const getPrimaryTextColor = (alpha: number = 1) => `rgba(66, 66, 66, ${alpha})`;

const colors = {
  primaryText: getPrimaryTextColor(),
  lightPrimaryText: '#F3F3F3',
  mediumPrimaryText: '#E5E5E5',
  secondaryText: getPrimaryTextColor(0.85),
  primary: '#EF5350',
  darkPrimary: '#D32F2F',
  secondary: '#4DB6AC',
  accent: '#1A68A5',
};

export { colors };
