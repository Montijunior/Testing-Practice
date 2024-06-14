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

// capitalize
test("Capitalize first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Already Capitalize", () => {
  expect(capitalize("James")).toBe("James");
});

// reverseString test
test("Reverse a string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});
test("Reverse with punctuations", () => {
  expect(reverseString("?hello@")).toBe("@olleh?");
});

// analyze Array test
test("Analyze an array and return the average,min,max value and length of array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
