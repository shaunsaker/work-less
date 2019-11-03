import areDatesOnSameDay from '..';

describe('areDatesOnSameDay()', () => {
  it('should work correctly (1)', () => {
    const date1 = new Date('23 June 1988');
    const date2 = new Date('23 June 1988');

    expect(areDatesOnSameDay(date1, date2)).toEqual(true);
  });

  it('should work correctly (2)', () => {
    const date1 = new Date('23 June 1988');
    const date2 = new Date('24 June 1988');

    expect(areDatesOnSameDay(date1, date2)).toEqual(false);
  });
});
