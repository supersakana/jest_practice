import { analyze } from "../src/analyze";

test('returns average, min, max, and length of array', () => {
  const result = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
      }
  expect(analyze([1,8,3,4,2,6])).toEqual(result);
});