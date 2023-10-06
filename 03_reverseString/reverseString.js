const reverseString = function(stringToReverse) {
  let maxArrayIndex = stringToReverse.length - 1;
  let reversedString = [];

  // i abbreviation for index
  for (let i = maxArrayIndex; i >= 0; i--) {
    reversedString.push(stringToReverse.charAt(i));
  }

  return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
