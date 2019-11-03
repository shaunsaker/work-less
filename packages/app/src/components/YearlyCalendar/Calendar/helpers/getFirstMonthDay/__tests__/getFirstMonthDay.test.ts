import getFirstMonthDay from '..';

describe('getFirstMonthDay()', () => {
  it('should work correctly (1)', () => {
    const date = new Date('23 June 1988');
    const expected = new Date('1 June 1988');

    expect(getFirstMonthDay(date)).toEqual(expected);
  });

  it('should work correctly (2)', () => {
    const date = new Date('26 August 2018');
    const expected = new Date('1 August 2018');

    expect(getFirstMonthDay(date)).toEqual(expected);
  });
});
