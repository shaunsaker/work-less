import React, { useEffect } from 'react';
import { Animated, Styles } from 'reactxp';

import animate from '../../helpers/animate';

import styles from './styles';

interface Props {
  shouldAnimate: boolean;
  children: any;
}

const SceneAnimator: React.FC<Props> = ({ shouldAnimate, children }) => {
  const animatedValue = Animated.createValue(0);
  const animatedStyle = Styles.createAnimatedViewStyle({
    opacity: animatedValue,
  });

  useEffect(() => {
    if (shouldAnimate) {
      animate(animatedValue, 1);
    }
  }, [shouldAnimate]);

  return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>;
};

export default SceneAnimator;
