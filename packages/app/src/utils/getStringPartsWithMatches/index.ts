interface IArguments {
  string: string;
  match: string;
}

const getStringPartsWithMatches = ({ string, match }: IArguments) => {
  /*
   * Test the string for the match
   */
  const pattern = new RegExp(match, 'i'); // case insensitive
  const test = string.match(pattern);
  const parts = [];

  if (match && test) {
    /*
     * If there is a match
     * Find the start and end index
     */
    const { index: startIndex = 0 } = test;
    const endIndex = startIndex + match.length;

    /*
     * Get the part of the text before the matched text
     * Push it to parts if it exists
     */
    const before = string.slice(0, startIndex);

    if (before) {
      parts.push({
        string: before,
      });
    }

    /*
     * Push the matched text as a string with isMatch
     */
    parts.push({
      string: test[0],
      isMatch: true,
    });

    /*
     * Get the part of the text after the matched text
     * Push it to parts if it exists
     */
    const after = string.slice(endIndex, string.length);

    if (after) {
      parts.push({
        string: after,
      });
    }
  } else {
    /*
     * No match
     * Just push the whole string
     */
    parts.push({
      string,
    });
  }

  return parts;
};

export { getStringPartsWithMatches };
