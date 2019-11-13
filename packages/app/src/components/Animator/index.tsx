import React, { useEffect } from 'react';
import { Animated, Styles } from 'reactxp';

import animate from './animate';

type Type =
  | 'opacity'
  | 'backgroundColor'
  | 'width'
  | 'height'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'translateY'
  | 'translateX'
  | 'scale'
  | 'rotate'
  | 'perspective';

interface Props {
  type: Type;
  initialValue?: number;
  finalValue?: number;
  initialInterpolatedValue?: string;
  finalInterpolatedValue?: string;
  duration?: number;
  shouldAnimateIn?: boolean;
  shouldAnimateOut?: boolean;
  style?: any; // FIXME:
  children: any; // FIXME:
  handleAnimateIn?: () => void;
  handleAnimateOut?: () => void;
}

const TRANSFORM_TYPES = ['translateY', 'translateX', 'scale', 'rotate', 'perspective'];

const NATIVELY_SUPPORTED_TYPES = ['opacity', ...TRANSFORM_TYPES]; // types that can use the native driver

const Animator: React.FC<Props> = ({
  type,
  initialValue = 0,
  finalValue = 1,
  initialInterpolatedValue,
  finalInterpolatedValue,
  duration = 250,
  shouldAnimateIn,
  shouldAnimateOut,
  style,
  children,
  handleAnimateIn,
  handleAnimateOut,
}) => {
  const animatedValue = Animated.createValue(initialValue);
  const styleObject: { [key: string]: any } = {}; // FIXME: Key can only be one of type and result object could be an array if type is a transform
  const interpolatedValue =
    initialInterpolatedValue &&
    finalInterpolatedValue &&
    Animated.interpolate(
      animatedValue,
      [initialValue, finalValue],
      [initialInterpolatedValue, finalInterpolatedValue],
    );

  if (TRANSFORM_TYPES.includes(type)) {
    const transformObject: { [key: string]: any } = {}; // FIXME: Key can only be one of type and result object could be an array if type is a transform
    transformObject[type] = animatedValue;
    styleObject.transform = [transformObject];
  } else {
    styleObject[type] = interpolatedValue || animatedValue;
  }

  const animatedStyle = Styles.createAnimatedViewStyle(styleObject);
  const useNativeDriver = Boolean(NATIVELY_SUPPORTED_TYPES.includes(type));

  useEffect(() => {
    if (shouldAnimateIn) {
      animate({
        animatedValue,
        toValue: finalValue,
        useNativeDriver,
        duration,
        handleAnimateEnd: handleAnimateIn,
      });
    }
  }, [shouldAnimateIn]);

  useEffect(() => {
    if (shouldAnimateOut) {
      animatedValue.setValue(finalValue); // for some reason it resets to initialValue by itself
      animate({
        animatedValue,
        toValue: initialValue,
        useNativeDriver,
        duration,
        handleAnimateEnd: handleAnimateOut,
      });
    }
  }, [shouldAnimateOut]);

  return <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>;
};

export default Animator;
