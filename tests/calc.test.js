import { add, sub, div, mult } from "../src/calc";

test('add returns sum of two numbers', () => {
  expect(add(3, 4)).toBe(7);
});

test('sub returns difference of two numbers', () => {
    expect(sub(6, 2)).toBe(4);
  });

test('div returns quotient of two numbers', () => {
    expect(div(10, 5)).toBe(2);
  });

test('mult returns product of two numbers', () => {
    expect(mult(7, 3)).toBe(21);
  });