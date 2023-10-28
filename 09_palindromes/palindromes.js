const palindromes = function (word) {
  let backward = "";

  for (let i = word.length - 1; i >= 0; i--) {
    backward = backward + word[i];
  } 

  word = word.deleteSpacesAndPunctuation().toLowerCase();
  backward = backward.deleteSpacesAndPunctuation().toLowerCase();

  let isPalindrome = (word === backward) ? true : false;

  return isPalindrome;
}

// Outputs the string without spaces and punctuation
String.prototype.deleteSpacesAndPunctuation = function() {
  let reducedWord = "";

  for (let i = this.length - 1; i >= 0; i--) {
    let character = this[i];
    
    let isPunctuation = !!character.match(/[.,:!?]/);
    let isSpace = (character === ' ') ? true : false;

    if (!isPunctuation && !isSpace) {
      reducedWord = reducedWord + character;
    }
  }

  return reducedWord;
}

// Do not edit below this line
module.exports = palindromes;
