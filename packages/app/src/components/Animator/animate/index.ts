import { Animated, Types } from 'reactxp';

interface Args {
  animatedValue: Types.AnimatedValue;
  toValue: number;
  duration: number;
  useNativeDriver: boolean;
  handleAnimateEnd?: () => void;
}

// NOTE: No test needed here since it's very close to the native function
const animate = ({ animatedValue, toValue, duration, useNativeDriver, handleAnimateEnd }: Args) => {
  Animated.timing(animatedValue, {
    toValue,
    duration,
    easing: Animated.Easing.InOut(),
    useNativeDriver,
  }).start(handleAnimateEnd);
};

export default animate;
