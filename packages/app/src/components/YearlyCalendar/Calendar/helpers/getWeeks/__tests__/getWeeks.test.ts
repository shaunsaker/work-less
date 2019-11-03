import getWeeks from '..';

describe('getWeeks()', () => {
  it('should work correctly without dates of significance', () => {
    const date = new Date('23 June 1988');

    expect(getWeeks(date)).toEqual(expect.any(Array));
  });

  it('should work correctly with dates of significance', () => {
    const date = new Date('23 June 1988');
    const datesOfSignificance = [
      {
        date,
        isPrimary: true,
      },
      {
        date: new Date('24 June 1988'),
        isSecondary: true,
      },
    ];

    expect(getWeeks(date, datesOfSignificance)).toEqual(expect.any(Array));
  });
});
