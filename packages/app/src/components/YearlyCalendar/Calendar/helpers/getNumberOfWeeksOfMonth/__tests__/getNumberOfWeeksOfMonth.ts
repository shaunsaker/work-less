import getNumberOfWeeksOfMonth from '..';

describe('getNumberOfWeeksOfMonth()', () => {
  it('should work correctly (1)', () => {
    const date = new Date('23 June 1988');
    const expected = 5;

    expect(getNumberOfWeeksOfMonth(date)).toEqual(expected);
  });

  it('should work correctly (2)', () => {
    const date = new Date('24 December 1991');
    const expected = 5;

    expect(getNumberOfWeeksOfMonth(date)).toEqual(expected);
  });
});
