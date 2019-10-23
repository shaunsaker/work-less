import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';

import Tooltip from './Tooltip';

export interface Props {
  day: number | null;
  tooltip?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDisabled?: boolean;
}

const CalendarItem: React.FC<Props> = ({
  day,
  tooltip,
  isPrimary,
  isSecondary,
  isDisabled,
  ...props
}: Props) => {
  const calendarItemComponent = (
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

  if (tooltip) {
    return <Tooltip text={tooltip}>{calendarItemComponent}</Tooltip>;
  }

  return calendarItemComponent;
};

export default CalendarItem;
