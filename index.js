function capitalize(string) {
  let array = string.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

function reverseString(string) {}

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
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = { capitalize, reverseString, calculator, analyzeArray };
