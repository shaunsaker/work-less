import getDaysOffAndLeaveDays from '..';

import publicHolidays from '../../../../../__mocks__/publicHolidays';

describe('getDaysOffAndLeaveDays()', () => {
  const numberOfLeaveDays = 23;

  it('should work correctly', () => {
    expect(getDaysOffAndLeaveDays(publicHolidays, numberOfLeaveDays)).toBeDefined();
  });
});
