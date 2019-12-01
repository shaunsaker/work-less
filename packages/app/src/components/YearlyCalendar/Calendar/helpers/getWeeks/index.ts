import getFirstMonthDay from '../getFirstMonthDay';
import { getLastMonthDay } from '../../../../../utils';
import getNumberOfWeeksOfMonth from '../getNumberOfWeeksOfMonth';
import getTomorrowsDate from './getTomorrowsDate';
import areDatesOnSameDay from './areDatesOnSameDay';
import DAYS from '../../days';
import DateOfSignificance from '../../../../../types/DateOfSignificance';
import CalendarDay from '../../../../../types/CalendarDay';

const WEEKEND_DAYS = [0, 6];

const getWeeks = (date: Date, datesOfSignificance?: DateOfSignificance[]) => {
  const firstMonthDay = getFirstMonthDay(date);
  const lastMonthDay = getLastMonthDay(date);
  const numberOfWeeksTheMonthFallsInto = getNumberOfWeeksOfMonth(date);
  let nextMonthDay = firstMonthDay;
  const weeks = Array.from(Array(numberOfWeeksTheMonthFallsInto)).map(() => {
    const week: CalendarDay[] = DAYS.map((_, dayIndex) => {
      const nextMonthDayIndex = nextMonthDay.getDay();
      let day = null;
      const calendarDay: CalendarDay = {
        type: 'default',
        day,
      };

      if (nextMonthDayIndex === dayIndex) {
        day = nextMonthDay.getDate();

        /*
         * If they day is a weekend day, set it's type
         */
        if (WEEKEND_DAYS.includes(nextMonthDayIndex)) {
          calendarDay.type = 'weekend';
        }

        /*
         * If the day is significant, add the extra props
         */
        if (datesOfSignificance) {
          const significantDate = datesOfSignificance.filter((item) =>
            areDatesOnSameDay(item.date, nextMonthDay),
          )[0];

          if (significantDate) {
            const { type, name } = significantDate;

            calendarDay.type = type;

            if (name) {
              calendarDay.name = name;
            }
          }
        }

        /*
         * Only forward to the next day if we are not on the last day of the month
         */
        if (nextMonthDay.getTime() !== lastMonthDay.getTime()) {
          nextMonthDay = getTomorrowsDate(nextMonthDay);
        }
      } else {
        day = null;
      }

      return {
        ...calendarDay,
        day,
      };
    });

    return week;
  });

  return weeks;
};

export default getWeeks;
