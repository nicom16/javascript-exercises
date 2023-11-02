const fibonacci = function(position) {
  if (position <= 0) return "OOPS";
  position = parseInt(position);

  let fibonaccisSequence = [0, 1];

  for (let i = 2; i <= position; i++) {
    fibonaccisSequence.push((fibonaccisSequence[i - 1] + fibonaccisSequence[i - 2]));
  }

  return fibonaccisSequence[position];
};

// Do not edit below this line
module.exports = fibonacci;
