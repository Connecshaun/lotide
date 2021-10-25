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


const middle = function (array) {
  let elements = [];
  const arrayMiddle = array.length / 2;
  const rounded = Math.floor(arrayMiddle)
  const isOdd = array.length % 2 !== 0

  if (array.length <= 2) {
    return [];
  };
  if (isOdd) {
    elements.push(array[rounded]);
  } else {
    elements.push(array[(arrayMiddle) - 1], array[arrayMiddle])
  }
  return elements;
}



console.log(middle(([1])))
console.log(middle(([1, 2])))
console.log(middle(([1, 7, 4, 2])))
console.log(middle(([1, 2, 3, 4, 5, 6])))
console.log(middle(([1, 2, 3, 4, 5, 6, 7])))
console.log(middle(([1, 3, 7, 5, 8, 6, 7])))
console.log(middle(["hello", "jello", "even"]))
assertArraysEqual(middle(([1, 2, 3, 4, 5, 6, 7])), [1, 3, 7, 5, 8, 6, 7])