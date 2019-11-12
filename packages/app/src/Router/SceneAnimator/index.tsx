import React, { useEffect } from 'react';
import { Animated, Styles } from 'reactxp';

import animate from '../../helpers/animate';

import styles from './styles';

interface Props {
  shouldAnimateIn: boolean;
  children: any;
}

const SceneAnimator: React.FC<Props> = ({ shouldAnimateIn, children }) => {
  const initialOpacity = 0;
  const finalOpacity = 1;
  const animatedOpacityValue = Animated.createValue(initialOpacity);
  const animatedStyle = Styles.createAnimatedViewStyle({
    opacity: animatedOpacityValue,
  });

  useEffect(() => {
    if (shouldAnimateIn) {
      animate(animatedOpacityValue, finalOpacity);
    }
  }, [shouldAnimateIn]);

  return <Animated.View style={[styles.container, animatedStyle]}>{children}</Animated.View>;
};

export default SceneAnimator;
