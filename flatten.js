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

console.log(eqArrays([1, 2, 3, 4], [1, 2, 3])) // false
console.log(eqArrays([1, 2, 3, 4], [1, 3, 3, 4])) // false
console.log(eqArrays([1, 3, 3], [1, 3, 3])) // true


const assertArraysEqual = function (array, array2) {
  if (!eqArrays(array, array2)) {
    return console.log(`😡 😡 😡 Assertion Failed:, ${array} !== ${array2}`);
  }

  console.log(`😁 😁 😁 Assertion Passed:, ${array} === ${array2}`);

};

assertArraysEqual([1, 2, 3, 4], [1, 2, 3]) // false
assertArraysEqual([5, 7, 9], [5, 9, 7]) // false
assertArraysEqual([3, 2, 3], [3, 2, 3]) // true

const flatten = function (array) {
  if (Array.isArray(array)) {
    return array.flat();
  }
  return undefined
}

console.log(flatten("hello")) // undefined
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

const sublimeArray = [1, 3, [5], 6, [7, 8]];
console.log(flatten([1, 3, [5], 6, [7, 8]])); // => [ 1, 3, 5, 6, 7, 8 ]
assertArraysEqual(flatten(sublimeArray), flatten(sublimeArray)); // Passed

