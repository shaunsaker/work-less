import React from 'react';
import { Button, Animated, Styles, Types } from 'reactxp';

import animate from '../../helpers/animate';
import getFinalColor from './helpers/getFinalColor';

interface Props extends Types.ButtonProps {
  color: string;
  amount: number;
}

const ButtonWithBgHoverEffect: React.FC<Props> = (props) => {
  const { color, amount, disabled, children } = props;
  const initialColor = color;
  const finalColor = getFinalColor(color, amount);
  const initialValue = 0;
  const finalValue = 1;
  const animatedValue = Animated.createValue(initialValue);
  const animatedBackgroundColor = Animated.interpolate(
    animatedValue,
    [initialValue, finalValue],
    [initialColor, finalColor],
  );
  const animatedStyle = Styles.createAnimatedViewStyle({
    backgroundColor: animatedBackgroundColor,
  });
  const onHoverStart = () => {
    if (!disabled) {
      animate(animatedValue, finalValue);
    }
  };
  const onHoverEnd = () => {
    animate(animatedValue, initialValue);
  };

  return (
    <Button {...props} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
      <Animated.View style={animatedStyle}>{children}</Animated.View>
    </Button>
  );
};

export default ButtonWithBgHoverEffect;
