import React from 'react';
import { View, Text } from 'reactxp';

import styles from './styles';
import DAY_ITEMS from './dayItems';

import CalendarItem, { Props as Day } from './CalendarItem';

const CALENDAR_ITEM_SIZE = 32;

interface Props {
  month: string; // FIXME: One of type
  weeks: Day[][];
}

const Calendar: React.FC<Props> = ({ month, weeks }) => {
  return (
    <View style={styles.container}>
      <View style={styles.monthTextContainer}>
        <Text style={styles.monthText}>{month}</Text>
      </View>

      <View style={styles.row}>
        {DAY_ITEMS.map((item) => {
          return (
            <View key={item} style={styles.contentItemContainer}>
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
