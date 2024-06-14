const {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
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

test("analyze the min value", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("analyze the max value", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("analyze the length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("analyze the average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

// caesarCipher(string, number) test suits
test("String xyz should return abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher case preservation", () => {
  expect(caesarCipher("heLLo", 3)).toBe("khOOr");
});

test("caesarCipher punctuation preservation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
