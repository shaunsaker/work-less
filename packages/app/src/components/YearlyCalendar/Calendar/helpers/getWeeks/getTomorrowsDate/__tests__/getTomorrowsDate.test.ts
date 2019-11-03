import areDatesOnSameDay from '..';

describe('areDatesOnSameDay()', () => {
  it('should work correctly (1)', () => {
    const date = new Date('23 June 1988');
    const expected = new Date('24 June 1988');

    expect(areDatesOnSameDay(date)).toEqual(expected);
  });

  it('should work correctly (2)', () => {
    const date = new Date('30 June 1988');
    const expected = new Date('1 July 1988');

    expect(areDatesOnSameDay(date)).toEqual(expected);
  });
});
