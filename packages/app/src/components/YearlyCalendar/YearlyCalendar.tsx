import React from 'react';
import { View } from 'reactxp';

import styles from './styles';

import Calendar from './Calendar';
import DateOfSignificance from '../../types/DateOfSignificance';

interface Props {
  months: Date[];
  datesOfSignificance?: DateOfSignificance[];
}

const YearlyCalendar: React.FC<Props> = ({ months, datesOfSignificance }) => {
  return (
    <View style={styles.container}>
      {months.map((date) => {
        const key = date.getTime();

        return (
          <View key={key} style={styles.calendarContainer}>
            <Calendar date={date} datesOfSignificance={datesOfSignificance} />
          </View>
        );
      })}
    </View>
  );
};

export default YearlyCalendar;
