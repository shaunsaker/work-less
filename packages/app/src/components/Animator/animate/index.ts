import { Animated, Types } from 'reactxp';

// NOTE: No test needed here since it's very close to the native function
const animate = (
  animatedValue: Types.AnimatedValue,
  toValue: number,
  useNativeDriver: boolean,
  handleAnimateEnd?: () => void,
) => {
  Animated.timing(animatedValue, {
    toValue,
    duration: 250,
    easing: Animated.Easing.InOut(),
    useNativeDriver,
  }).start(handleAnimateEnd);
};

export default animate;
