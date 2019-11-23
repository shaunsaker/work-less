import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';

import Tooltip from './Tooltip';
import CalendarDayInterface from '../../../../types/CalendarDay';

const CalendarDay: React.FC<CalendarDayInterface> = ({ day, name, type }: CalendarDayInterface) => {
  const calendarItemComponent = (
    <View
      style={[
        styles.container,
        type === 'publicHoliday' ? styles.publicHolidayContainer : {},
        type === 'leaveDay' ? styles.leaveDayContainer : {},
        type === 'weekend' ? styles.weekendContainer : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          type === 'publicHoliday' ? styles.publicHolidayText : {},
          type === 'leaveDay' ? styles.leaveDayText : {},
          type === 'weekend' ? styles.weekendText : {},
        ]}
      >
        {day}
      </Text>
    </View>
  );

  if (name) {
    return <Tooltip text={name}>{calendarItemComponent}</Tooltip>;
  }

  return calendarItemComponent;
};

export default CalendarDay;
