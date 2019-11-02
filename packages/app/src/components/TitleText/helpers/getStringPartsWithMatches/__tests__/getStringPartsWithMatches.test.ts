import getStringPartsWithMatches from '..';

describe('getStringPartsWithMatches()', () => {
  const string = 'This is a string that I am going to test for matches';
  const match = 'g that I am g';

  it('should work correctly', () => {
    const stringPartsWithMatches = getStringPartsWithMatches({ string, match });

    expect(stringPartsWithMatches.length).toEqual(3);
    expect(stringPartsWithMatches[0].isMatch).toBeUndefined();
    expect(stringPartsWithMatches[1].isMatch).toEqual(true);
    expect(stringPartsWithMatches[2].isMatch).toBeUndefined();
  });
});
