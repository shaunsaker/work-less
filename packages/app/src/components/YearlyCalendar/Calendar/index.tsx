import React from 'react';

import Calendar from './Calendar';
import getTitle from './helpers/getTitle';
import getWeeks from './helpers/getWeeks';

interface Props {
  date: Date;
}

/*
 * TODO: Accept dates of significance
 */
const CalendarContainer: React.FC<Props> = ({ date }) => {
  const title = getTitle(date);
  const weeks = getWeeks(date);

  return <Calendar title={title} weeks={weeks} />;
};

export default CalendarContainer;
