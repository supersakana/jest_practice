import { caesar } from "../src/caesar"; 

test('returns word shifted # of times passed', () => {
  expect(caesar('word', 3)).toBe('zrug');
});

test('returns words that wrap from z to a', () => {
    expect(caesar('xyz', 3)).toBe('abc');
  });

test('ignores special chars', () => {
    expect(caesar('a.b!c-d', 3)).toBe('d.e!f-g');
  });

test('works with punctuation', () => {
    expect(caesar('aBcDe', 3)).toBe('dEfGh');
  });