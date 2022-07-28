const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...args]) {
	let sumOfAll = 0;
  for (let arg of args) {
    sumOfAll += arg;
  }
  return sumOfAll;
};

const multiply = function([...args]) {
  let product = 1;
  for (let arg of args) {
    product *= arg;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let ans = 1;
  for (let i = 1; i <= a; i++) {
    ans *= i;
  }
  return ans;
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
