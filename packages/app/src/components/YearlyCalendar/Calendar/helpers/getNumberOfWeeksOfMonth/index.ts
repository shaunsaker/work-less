import getFirstMonthDay from '../getFirstMonthDay';
import { getLastMonthDay } from '../../../../../utils';
import getNumberOfDaysBetweenDates from '../getNumberOfDaysBetweenDates';

const getNumberOfWeeksOfMonth = (date: Date) => {
  const firstMonthDay = getFirstMonthDay(date);
  const lastMonthDay = getLastMonthDay(date);
  const numberOfDaysInMonth = getNumberOfDaysBetweenDates(lastMonthDay, firstMonthDay);
  const firstMonthDayIndex = firstMonthDay.getDay();
  const numberOfWeeksTheMonthFallsInto = Math.ceil((numberOfDaysInMonth + firstMonthDayIndex) / 7);

  return numberOfWeeksTheMonthFallsInto;
};

export default getNumberOfWeeksOfMonth;
