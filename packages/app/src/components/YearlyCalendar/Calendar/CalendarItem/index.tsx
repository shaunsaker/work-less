import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';

export interface Props {
  day: number | null;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDisabled?: boolean;
}

const CalendarItem: React.FC<Props> = ({
  day,
  isPrimary,
  isSecondary,
  isDisabled,
  ...props
}: Props) => {
  return (
    <View
      {...props}
      style={[
        styles.container,
        isPrimary ? styles.primaryContainer : {},
        isSecondary ? styles.secondaryContainer : {},
        isDisabled ? styles.disabledContainer : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          isPrimary ? styles.primaryText : {},
          isSecondary ? styles.secondaryText : {},
          isDisabled ? styles.disabledText : {},
        ]}
      >
        {day}
      </Text>
    </View>
  );
};

export default CalendarItem;
