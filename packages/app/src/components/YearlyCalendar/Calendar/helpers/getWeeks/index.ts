import getFirstMonthDay from '../getFirstMonthDay';
import getLastMonthDay from '../getLastMonthDay';
import getNumberOfWeeksOfMonthDate from '../getNumberOfWeeksOfMonthDate';
import getTomorrowsDate from './getTomorrowsDate';
import areDatesOnSameDay from './areDatesOnSameDay';
import DAYS from '../../days';
import { Props as Day } from '../../CalendarItem';
import { DateObject } from '../..';

const WEEKEND_DAYS = [0, 6];

const getWeeks = (date: Date, datesOfSignificance: DateObject[] | undefined) => {
  const firstMonthDay = getFirstMonthDay(date);
  const lastMonthDay = getLastMonthDay(date);
  const numberOfWeeksTheMonthFallsInto = getNumberOfWeeksOfMonthDate(date);
  let nextMonthDay = firstMonthDay;
  const weeks = Array.from(Array(numberOfWeeksTheMonthFallsInto)).map(() => {
    const week: Day[] = DAYS.map((_, dayIndex) => {
      const nextMonthDayIndex = nextMonthDay.getDay();
      let day;
      let isDisabled;
      let extraProps = {};

      if (nextMonthDayIndex === dayIndex) {
        day = nextMonthDay.getDate();

        /*
         * If they day is a weekend day, it should be disabled
         */
        if (WEEKEND_DAYS.includes(nextMonthDayIndex)) {
          isDisabled = true;
        }

        /*
         * If the day is significant, add the extra props
         */
        if (datesOfSignificance) {
          const significantDate = datesOfSignificance.filter((item) =>
            areDatesOnSameDay(item.date, nextMonthDay),
          )[0];
          // console.log({ datesOfSignificance, significantDate });

          if (significantDate) {
            extraProps = {
              ...significantDate,
            };
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
        day,
        isDisabled,
        ...extraProps,
      };
    });

    return week;
  });

  return weeks;
};

export default getWeeks;
