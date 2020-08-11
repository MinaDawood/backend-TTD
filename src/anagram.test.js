import { isAnagram } from './anagram';
import { expect } from 'chai';

describe('isAnagram - basic func', () => {
  it('returns true if is anagram', () => {
    const expected = true;
    const actual = isAnagram('elbow', 'below');

    expect(actual).to.equal(expected);
  });
});
