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




const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i])
    }
  }

  return newArray;
};



console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // => ["hello", "world"]
assertArraysEqual(words, ["hello", "world", "lighthouse"]);





