import React from 'react';
import { Animated, Styles } from 'reactxp';

const withHoverStyles = <Props extends object>(Component: React.ComponentType<Props>) => {
  const WithHoverStyles: React.FC<Props> = (props) => {
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
      <Component
        {...props}
        style={animatedStyle}
        handleHoverStart={onHoverStart}
        handleHoverEnd={onHoverEnd}
      />
    );
  };

  return WithHoverStyles;
};

export default withHoverStyles;
