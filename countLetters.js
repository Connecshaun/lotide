const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (const letters of string) {
    if (letters !== " " && letters !== ",") {
      if (result[letters]) {
        result[letters] += 1;
      } else {
        result[letters] = 1;
      }
    }
  }
  return result;
};

// console.log(countLetters("Hello, jello"))
// const result1 = countLetters("Hello, Jello")
// assertEqual(result1["H"], 1);
// assertEqual(result1["e"], 2);

module.exports = countLetters;