const eqArrays = function (array, array2) {
  if (array.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual = function (array, array2) {
  if (!eqArrays(array, array2)) {
    return console.log(`😡 😡 😡 Assertion Failed:, ${array} !== ${array2}`);
  }

  console.log(`😁 😁 😁 Assertion Passed:, ${array} === ${array2}`);

};


const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];

    if (word !== " ") {

      if (results[word]) {

        results[word].push(i);

      } else {
        results[word] = [i];
      }
    }
  }

  return results;
};

console.log(letterPositions("Lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1]);