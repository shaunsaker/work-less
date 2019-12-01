import PublicHoliday from '../../../../types/PublicHoliday';
import { getDateArray } from '../../../../utils';
import DateOfSignificance from '../../../../types/DateOfSignificance';

/*
 * Takes publicHolidays and leave days
 * to calculate the optimal consecutive days in the year
 * Returns daysOff and leaveDays
 * NOTE: This only works with current year
 */
const getDaysOffAndLeaveDays = (publicHolidays: PublicHoliday[], numberOfLeaveDays: number) => {
  /*
   * Construct the year's days
   */
  const date = new Date();
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const lastDayOfYear = new Date(date.getFullYear(), 11, 31);
  const year: DateOfSignificance[] = getDateArray(firstDayOfYear, lastDayOfYear).map((date) => {
    /*
     * Is the date a weekend day?
     */
    const day = date.getDay();
    const isWeekendDay = day === 6 || day === 0;

    if (isWeekendDay) {
      return {
        date,
        type: 'weekend',
      };
    }

    /*
     * Is the date a public holiday?
     */
    const isPublicHoliday = publicHolidays.filter((item) => {
      return item.date.getTime() === date.getTime();
    })[0];

    if (isPublicHoliday) {
      return {
        date,
        type: 'publicHoliday',
      };
    }

    return {
      date,
      type: 'default',
    };
  });

  console.log({ year });

  /*
   * Do the thang
   */

  return {
    daysOff: 32,
    leaveDays: [],
  };
};

export default getDaysOffAndLeaveDays;
