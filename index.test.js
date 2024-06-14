const {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
} = require("./index.js");

// calculator test
test("Calculator adds", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Calculator subtracts", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("Calculator divides", () => {
  expect(calculator.divide(30, 3)).toBe(10);
});

test("Calculator multiplies", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
