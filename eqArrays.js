const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqArrays = function (array, array2) {
  if (array.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array.length; i++) {
    // console.log("i:", i)
    // console.log("array[i]:", array[i])
    // console.log("array2[i]:", array2[i])
    if (array[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [1, 3, 3]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false

