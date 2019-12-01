import DateOfSignificance from '../../../types/DateOfSignificance';
import publicHolidays from '../../../__mocks__/PublicHolidays';

const publicHolidaysArray: DateOfSignificance[] = [];

publicHolidays.forEach((item) => {
  const { date, name } = item;

  publicHolidaysArray.push({
    date,
    name,
    type: 'publicHoliday',
  });
});

const datesOfSignificance: DateOfSignificance[] = [
  {
    date: new Date(2019, 9, 1),
    type: 'leaveDay',
  },
  ...publicHolidaysArray,
];

export default datesOfSignificance;
