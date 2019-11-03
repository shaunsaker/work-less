import getMonthFromDate from '..';

describe('getMonthFromDate()', () => {
  it('should work correctly (1)', () => {
    const date = new Date('23 June 1988');
    const expected = 'June';

    expect(getMonthFromDate(date)).toEqual(expected);
  });

  it('should work correctly (2)', () => {
    const date = new Date('24 December 1991');
    const expected = 'December';

    expect(getMonthFromDate(date)).toEqual(expected);
  });
});
