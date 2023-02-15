import { reverse } from '../src/reverse';

test('returns reversed version of given string', () => {
  expect(reverse('word')).toBe('drow');
});