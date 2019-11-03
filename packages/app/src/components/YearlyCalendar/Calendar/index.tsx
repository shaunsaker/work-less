import React from 'react';

import Calendar from './Calendar';
import getMonthYearString from './helpers/getMonthYearString';
import getWeeks from './helpers/getWeeks';

export interface DateObject {
  date: Date;
  isPrimary?: boolean;
  isSecondary?: boolean;
}

interface Props {
  date: Date;
  datesOfSignificance?: DateObject[];
}

const CalendarContainer: React.FC<Props> = ({ date, datesOfSignificance }) => {
  const title = getMonthYearString(date);
  const weeks = getWeeks(date, datesOfSignificance);

  return <Calendar title={title} weeks={weeks} />;
};

export default CalendarContainer;
