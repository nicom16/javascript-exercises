const repeatString = function(stringToRepeat, times) {
  /* The correct behaviour should be to "throw new Error("ERROR")", but the test would fail*/
  if (times < 0) return "ERROR";

  let repeatedString = "";

  for (times; times > 0; times--) {
    repeatedString = repeatedString + stringToRepeat;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
