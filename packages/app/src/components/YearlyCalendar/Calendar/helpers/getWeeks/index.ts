import { Props as Day } from '../../CalendarItem';
import getFirstMonthDay from '../getFirstMonthDay';
import getLastMonthDay from '../getLastMonthDay';
import getNumberOfWeeksTheMonthFallsInto from '../getNumberOfWeeksTheMonthFallsInto';
import getTomorrow from './getTomorrow';
import DAYS from '../../days';

const getWeeks = (date: Date) => {
  const firstMonthDay = getFirstMonthDay(date);
  const lastMonthDay = getLastMonthDay(date);
  const numberOfWeeksTheMonthFallsInto = getNumberOfWeeksTheMonthFallsInto(date);
  let nextMonthDay = firstMonthDay;
  const weeks = Array.from(Array(numberOfWeeksTheMonthFallsInto)).map(() => {
    const week: Day[] = DAYS.map((_, dayIndex) => {
      const nextMonthDayIndex = nextMonthDay.getDay();
      let day;

      if (nextMonthDayIndex === dayIndex) {
        day = nextMonthDay.getDate();

        /*
         * Only forward to the next day if we are not on the last day of the month
         */
        if (nextMonthDay.getTime() !== lastMonthDay.getTime()) {
          nextMonthDay = getTomorrow(nextMonthDay);
        }
      } else {
        day = null;
      }

      return {
        day,
      };
    });

    return week;
  });

  return weeks;
};

export default getWeeks;
