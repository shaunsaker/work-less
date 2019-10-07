import React, { useState } from 'react';
import { Animated, Styles } from 'reactxp';

import Link from './Link';

interface Props {
  url: string;
  text: string;
}

const LinkContainer: React.FC<Props> = ({ url, text }) => {
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
      url={url}
      text={text}
      style={animatedStyle}
      handleHoverStart={onHoverStart}
      handleHoverEnd={onHoverEnd}
    />
  );
};

export default LinkContainer;
