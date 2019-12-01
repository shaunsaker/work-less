import { getLastMonthDay } from '..';

describe('getLastMonthDay()', () => {
  it('should work correctly (1)', () => {
    const date = new Date('23 June 1988');
    const expected = new Date('30 June 1988');

    expect(getLastMonthDay(date)).toEqual(expected);
  });

  it('should work correctly (2)', () => {
    const date = new Date('26 August 2018');
    const expected = new Date('31 August 2018');

    expect(getLastMonthDay(date)).toEqual(expected);
  });
});
