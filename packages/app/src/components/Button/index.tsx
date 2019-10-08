import React from 'react';
import { Text } from 'reactxp';

import styles from './styles';
import { colors } from '../../styleConstants';

import ButtonWithBgHoverEffect from '../ButtonWithBgHoverEffect';

interface Props {
  text: string;
  isSecondary?: boolean;
  handlePress: () => void;
}

const Button: React.FC<Props> = ({ text, isSecondary, handlePress }) => {
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
      contentContainerStyle={styles.contentContainer} // FIXME:
      style={[styles.container, isSecondary ? styles.secondaryContainer : {}]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{text.toUpperCase()}</Text>
    </ButtonWithBgHoverEffect>
  );
};

export default Button;
