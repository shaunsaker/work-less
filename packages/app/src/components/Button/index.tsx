import React from 'react';
import { Animated, Styles } from 'reactxp';

import animate from '../../helpers/animate';
import { colors } from '../../styleConstants';

import Button, { ButtonType } from './Button';

interface Props extends ButtonType {}

const ButtonContainer: React.FC<Props> = (props: Props) => {
  const { isSecondary } = props;
  const initialBackgroundColor = isSecondary ? colors.primaryText : colors.primary;
  const finalBackgroundColor = isSecondary ? colors.secondaryText : colors.darkPrimary;
  const initialValue = 0.85;
  const finalValue = 1;
  const animatedValue = Animated.createValue(initialValue);
  const animatedBackgroundColor = Animated.interpolate(
    animatedValue,
    [initialValue, finalValue],
    [initialBackgroundColor, finalBackgroundColor],
  );
  const animatedStyle = Styles.createAnimatedViewStyle({
    backgroundColor: animatedBackgroundColor,
  });
  const onHoverStart = () => {
    animate(animatedValue, finalValue);
  };
  const onHoverEnd = () => {
    animate(animatedValue, initialValue);
  };

  return (
    <Button
      {...props}
      hoverStyles={animatedStyle}
      handleHoverStart={onHoverStart}
      handleHoverEnd={onHoverEnd}
    />
  );
};

export default ButtonContainer;
