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

test('returns sum for multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles newlines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws on negative number', () => {
  expect(() => add("1,-2")).toThrow("negative numbers not allowed: -2");
});

test('throws with all negative numbers listed', () => {
  expect(() => add("-1,-4,5")).toThrow("negative numbers not allowed: -1,-4");
});