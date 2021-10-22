const assertArraysEqual = function (array, array2) {
  if (!eqArrays(array, array2)) {
    return console.log(`😡 😡 😡 Assertion Failed:, ${array} !== ${array2}`);
  }

  console.log(`😁 😁 😁 Assertion Passed:, ${array} === ${array2}`);

};

assertArraysEqual([1, 4, 5], [1, 4, 5])
assertArraysEqual([1, 3, 5], [1, 2, 7])


