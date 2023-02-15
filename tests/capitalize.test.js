import { capitalize } from '../src/capitalize';

test('returns capitalized version of all lowercase', () => {
  expect(capitalize('word')).toBe('WORD');
});