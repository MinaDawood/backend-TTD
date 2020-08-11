import { getLetterCount } from './letterCount';
import { isEqual } from 'lodash';
export const isAnagram = (string1, string2) => {
  const string1Letters = getLetterCount(string1);
  const string2Letters = getLetterCount(string2);

  return isEqual(string1Letters, string2Letters);
};
