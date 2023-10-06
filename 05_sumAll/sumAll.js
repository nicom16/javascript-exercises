const sumAll = function(firstNumber, secondNumber) {
  if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number') return "ERROR";
  if (firstNumber < 0 || secondNumber < 0) return "ERROR";
  
  let sum = 0;
  let smallerNumber;
  let biggerNumber;

  if (firstNumber > secondNumber) {
    smallerNumber = secondNumber;
    biggerNumber = firstNumber;
  } else {
    smallerNumber = firstNumber;
    biggerNumber = secondNumber;
  }

  let difference = biggerNumber - smallerNumber;

  for (let i = 0; i <= difference; i++) {
    sum = sum + (smallerNumber + i);
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
