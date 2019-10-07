import React from 'react';
import { Button as ButtonComponent, Animated, Text, Types } from 'reactxp';

import styles from './styles';

export interface ButtonType {
  text: string;
  isSecondary?: boolean;
  handlePress: () => void;
}

interface Props extends ButtonType {
  hoverStyles: Types.AnimatedViewStyleRuleSet;
  handleHoverStart?: () => void;
  handleHoverEnd?: () => void;
}

const Button: React.FC<Props> = ({
  text,
  isSecondary,
  hoverStyles,
  handleHoverStart,
  handleHoverEnd,
  handlePress,
}) => {
  return (
    <ButtonComponent
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onPress={handlePress}
    >
      <Animated.View
        style={[
          styles.container,
          isSecondary ? styles.secondaryContainer : {},
          !isSecondary ? styles.shadow : {},
          hoverStyles,
        ]}
      >
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </Animated.View>
    </ButtonComponent>
  );
};

export default Button;
