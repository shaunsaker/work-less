import getFinalColor from '..';

describe('getFinalColor()', () => {
  it('should work with a light color', () => {
    expect(getFinalColor('white', 0.25)).toEqual(expect.any(String));
  });

  it('should work with a dark color', () => {
    expect(getFinalColor('black', 0.25)).toEqual(expect.any(String));
  });
});
