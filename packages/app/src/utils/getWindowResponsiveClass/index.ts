import { UserInterface } from 'reactxp';

const RESPONSIVE_CLASSES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const getWindowResponsiveClass = () => {
  const { width } = UserInterface.measureWindow();

  if (width < 768) {
    return RESPONSIVE_CLASSES.sm;
  } else if (width < 992) {
    return RESPONSIVE_CLASSES.md;
  } else if (width < 1200) {
    return RESPONSIVE_CLASSES.lg;
  } else {
    return RESPONSIVE_CLASSES.xl;
  }
};

export { getWindowResponsiveClass };
