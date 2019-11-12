import React, { useEffect } from 'react';
import { Animated, Styles, Types } from 'reactxp';

import animate from './animate';

// TODO: width, height etc?
type TransformTypes = 'translateY' | 'translateX' | 'scale' | 'rotate' | 'perspective';
type StyleTypes = 'opacity' | 'backgroundColor';
type Type = StyleTypes | TransformTypes;

interface Props {
  type: Type;
  initialValue?: number;
  finalValue?: number;
  initialInterpolatedValue?: string;
  finalInterpolatedValue?: string;
  shouldAnimateIn?: boolean;
  shouldAnimateOut?: boolean;
  style?: Types.ViewStyle;
  children: any;
  handleAnimateIn?: () => void;
  handleAnimateOut?: () => void;
}

const Animator: React.FC<Props> = ({
  type,
  initialValue = 0,
  finalValue = 1,
  initialInterpolatedValue,
  finalInterpolatedValue,
  shouldAnimateIn,
  shouldAnimateOut,
  style,
  children,
  handleAnimateIn,
  handleAnimateOut,
}) => {
  // TODO: isTransform
  // TODO: useNativeDriver?
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
  styleObject[type] = interpolatedValue || animatedValue; // TODO: transform
  const animatedStyle = Styles.createAnimatedViewStyle(styleObject);

  useEffect(() => {
    if (shouldAnimateIn) {
      animate(animatedValue, finalValue, true, handleAnimateIn);
    }
  }, [shouldAnimateIn]);

  useEffect(() => {
    if (shouldAnimateOut) {
      animatedValue.setValue(finalValue); // for some reason it resets to initialValue by itself
      animate(animatedValue, initialValue, true, handleAnimateOut);
    }
  }, [shouldAnimateOut]);

  return <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>;
};

export default Animator;
