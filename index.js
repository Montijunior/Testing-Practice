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

function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        let code = char.charCodeAt(0);
        let base = code >= 65 && code <= 90 ? 65 : 97;

        let shiftedCode = ((code - base + key + 26) % 26) + base;

        return String.fromCharCode(shiftedCode);
      } else {
        return char;
      }
    })
    .join("");
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
};
