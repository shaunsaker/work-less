import getNumberOfDaysBetweenDates from '..';

describe('getNumberOfDaysBetweenDates()', () => {
  it('should work correctly (1)', () => {
    const date1 = new Date('23 June 1988');
    const date2 = new Date('31 July 1988');
    const expected = 39;

    expect(getNumberOfDaysBetweenDates(date1, date2)).toEqual(expected);
  });

  it('should work correctly (2)', () => {
    const date1 = new Date('26 August 2018');
    const date2 = new Date('25 August 2019');
    const expected = 365;

    expect(getNumberOfDaysBetweenDates(date1, date2)).toEqual(expected);
  });
});
