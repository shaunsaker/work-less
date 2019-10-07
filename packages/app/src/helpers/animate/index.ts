import { Animated, Types } from 'reactxp';

const animate = (animatedValue: Types.AnimatedValue, toValue: number) => {
  Animated.timing(animatedValue, {
    toValue,
    duration: 250,
    easing: Animated.Easing.InOut(),
    useNativeDriver: true,
  }).start();
};

export default animate;
