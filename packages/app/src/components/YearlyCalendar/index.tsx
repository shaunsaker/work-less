import React from 'react';

import YearlyCalendar from './YearlyCalendar';
import MONTHS from './months';

export interface SignificantDate {
  date: Date;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

interface Props {
  dates: SignificantDate[];
}

const YearlyCalendarContainer: React.FC<Props> = ({ dates }) => {
  /*
   * Get the months
   */

  return <YearlyCalendar />;
};

export default YearlyCalendarContainer;
