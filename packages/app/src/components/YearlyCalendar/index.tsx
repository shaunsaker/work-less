import React from 'react';

import YearlyCalendar from './YearlyCalendar';
import DateOfSignificance from '../../types/DateOfSignificance';

interface Props {
  datesOfSignificance?: DateOfSignificance[];
}

const YearlyCalendarContainer: React.FC<Props> = ({ datesOfSignificance }) => {
  /*
   * Get the months from the current date
   */
  const date = new Date();
  const year = date.getFullYear();
  const monthCount = 12;
  const months = Array.from(Array(monthCount)).map((_, index) => {
    const date = new Date(year, index, 1);

    return date;
  });

  return <YearlyCalendar months={months} datesOfSignificance={datesOfSignificance} />;
};

export default YearlyCalendarContainer;
