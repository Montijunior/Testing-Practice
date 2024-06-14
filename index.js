function capitalize(string) {
  let array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function analyzeArray(array) {
  let minValue = Math.min(...array);
  let maxValue = Math.max(...array);
  let arrayLength = array.length;
  let arrayAverage = array.reduce((prev, curr) => prev + curr, 0) / arrayLength;
  return {
    average: arrayAverage,
    min: minValue,
    max: maxValue,
    length: arrayLength,
  };
}

module.exports = { capitalize, reverseString, calculator, analyzeArray };
