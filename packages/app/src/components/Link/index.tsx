import React from 'react';
import { Animated, Styles } from 'reactxp';

import animate from '../../helpers/animate';

import Link, { LinkType } from './Link';

interface Props extends LinkType {}

const LinkContainer: React.FC<Props> = (props: Props) => {
  const initialValue = 0.85;
  const finalValue = 1;
  const animatedValue = Animated.createValue(initialValue);
  const animatedStyle = Styles.createAnimatedTextStyle({
    opacity: animatedValue,
  });
  const onHoverStart = () => {
    animate(animatedValue, finalValue);
  };
  const onHoverEnd = () => {
    animate(animatedValue, initialValue);
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
