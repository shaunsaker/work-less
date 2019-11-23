import getWeeks from '..';
import DateOfSignificance from '../../../../../../types/DateOfSignificance';

describe('getWeeks()', () => {
  it('should work correctly without dates of significance', () => {
    const date = new Date('23 June 1988');

    expect(getWeeks(date)).toEqual(expect.any(Array));
  });

  it('should work correctly with dates of significance', () => {
    const date = new Date('23 June 1988');
    const datesOfSignificance: DateOfSignificance[] = [
      {
        date: new Date('22 June 1988'),
        type: 'default',
      },
      {
        date,
        type: 'publicHoliday',
        name: 'Heritage Day',
      },
      {
        date: new Date('24 June 1988'),
        type: 'leaveDay',
      },
      {
        date: new Date('25 June 1988'),
        type: 'weekend',
      },
    ];

    expect(getWeeks(date, datesOfSignificance)).toEqual(expect.any(Array));
  });
});
