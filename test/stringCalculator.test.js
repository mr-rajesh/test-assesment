const { add } = require('../src/stringCalculator');

test('returns 0 for empty string', () => {
  expect(add("")).toBe(0);
});

test('returns number for single number', () => {
  expect(add("1")).toBe(1);
});

test('returns sum for two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});