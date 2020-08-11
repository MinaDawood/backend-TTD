import { getLetterCount } from './letterCount';
import { expect } from 'chai';

describe('getLetterCount basic func', () => {
  it('returns empty object', () => {
    const expected = {};
    const actual = getLetterCount('');

    expect(actual).to.deep.equal(expected);
  });

  it('returns the correct letter count', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');

    expect(actual).to.deep.equal(expected);
  });

  it('returns the correct length', () => {
    const expected = { m: 1, i: 4, s: 4, p: 2 };
    const actual = getLetterCount('mississippi');

    expect(actual).to.deep.equal(expected);
  });
});
