const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (array) {
  return array.reduce((suma, numero) => suma + numero, 0)
};

const multiply = function (array) {
  return array.reduce((multi, total) => multi * total, 1)
};

const power = function (base, exponente) {
  return base ** exponente
};

const factorial = function (numero) {
  let result = 1

  for (let i = 1; i <= numero; i++) {
    result *= i;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
