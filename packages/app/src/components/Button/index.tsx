import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import { colors } from '../../styleConstants';

import ButtonWithBgHoverEffect from '../ButtonWithBgHoverEffect';

export interface Props {
  text: string;
  isSecondary?: boolean;
  isDisabled?: boolean;
  handlePress: () => void;
}

const Button: React.FC<Props> = ({ text, isSecondary, isDisabled, handlePress }) => {
  let color;
  let amount;

  if (isSecondary) {
    color = colors.primaryText;
    amount = 0.25;
  } else {
    color = colors.primary;
    amount = 0.15;
  }

  return (
    <ButtonWithBgHoverEffect
      color={color}
      amount={amount}
      style={[
        styles.container,
        isSecondary ? styles.secondaryContainer : {},
        isDisabled ? styles.disabledContainer : {},
      ]}
      accessibilityLabel={text}
      disabled={isDisabled}
      onPress={handlePress}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </View>
    </ButtonWithBgHoverEffect>
  );
};

export default Button;
