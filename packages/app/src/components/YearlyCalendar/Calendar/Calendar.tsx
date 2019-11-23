import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import DAYS from './days';

import CalendarItem from './CalendarItem';
import CalendarDay from '../../../types/CalendarDay';

const CALENDAR_ITEM_SIZE = 32;

export interface Props {
  title: string;
  weeks: CalendarDay[][];
}

const Calendar: React.FC<Props> = ({ title, weeks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <View style={styles.row}>
        {DAYS.map((item, index) => {
          const key = `${item}${index}`;

          return (
            <View key={key} style={styles.contentItemContainer}>
              <View style={[styles.dayTextContainer, { width: CALENDAR_ITEM_SIZE }]}>
                <Text style={styles.dayText}>{item}</Text>
              </View>
            </View>
          );
        })}
      </View>

      {weeks.map((week, weekIndex) => {
        return (
          <View key={weekIndex} style={styles.row}>
            {week.map((item, dayIndex) => {
              const { day } = item;

              if (day) {
                return (
                  <View key={day} style={styles.contentItemContainer}>
                    <CalendarItem {...item} />
                  </View>
                );
              }
              const key = `${weekIndex}${dayIndex}`;

              return (
                <View key={key} style={styles.contentItemContainer}>
                  <View style={{ width: CALENDAR_ITEM_SIZE }} />
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default Calendar;
