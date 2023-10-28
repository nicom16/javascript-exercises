const add = function(a, b) {
  let result = a + b; 

	return result;
};

const subtract = function(a, b) {
  let result = a - b;

  return result;
};

const sum = function(addends) {
  let result = addends.reduce((sum, addend) => sum + parseInt(addend), 0);

  return result;
};

const multiply = function(params) {
  let result = 1;

  params.forEach((param) => {
    result = result * parseInt(param);
  });

  return result;
};

const power = function(a, power) {
  let result = a ** power;

	return result;
};

const factorial = function(x) {
  let result = 1;

  if (x != 0 && x != 1) {
    for (x; x > 0; x--) {
      result = result * x; 
    }
  }

	return result;
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
