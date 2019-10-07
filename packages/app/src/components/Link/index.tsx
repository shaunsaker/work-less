import React from 'react';
import { Animated, Styles } from 'reactxp';

import Link, { LinkType } from './Link';

interface Props extends LinkType {}

const LinkContainer: React.FC<Props> = (props: Props) => {
  const initialValue = 0.85;
  const finalValue = 1.0;
  const animatedValue = Animated.createValue(initialValue);
  const animatedStyle = Styles.createAnimatedTextStyle({
    opacity: animatedValue,
  });
  const animate = (toValue: number) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 250,
      easing: Animated.Easing.InOut(),
    }).start();
  };
  const onHoverStart = () => {
    animate(finalValue);
  };
  const onHoverEnd = () => {
    animate(initialValue);
  };

  return (
    <Link
      {...props}
      hoverStyles={animatedStyle}
      handleHoverStart={onHoverStart}
      handleHoverEnd={onHoverEnd}
    />
  );
};

export default LinkContainer;
