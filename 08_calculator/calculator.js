const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
  array.forEach((item) => total += item);
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach((item) => total *= item);
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = 1;
  while (a != 0) {
    total *= a;
    a--;
  }
  return total;
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
