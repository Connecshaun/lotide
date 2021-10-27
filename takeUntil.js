// const eqArrays = function (array, array2) {
//   if (array.length !== array2.length) {
//     return false;
//   }

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };


// const assertArraysEqual = function (array, array2) {
//   if (!eqArrays(array, array2)) {
//     return console.log(`😡 😡 😡 Assertion Failed:, ${array} !== ${array2}`);
//   }

//   console.log(`😁 😁 😁 Assertion Passed:, ${array} === ${array2}`);

// };


// const takeUntil = function (array, callback) {
//   // let result = []
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       return array.slice(0, i)
//     }
//   }
//   // return result;
// }

const takeUntil = function (array, callback) {
  let newArray = [];
  for (let name of array) {
    if (callback(name)) {
      return newArray;
    } else {
      newArray.push(name)
    }
  }
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---')

// const callBack1 = function (value) {
//   return value + "-2"
// }
// const actual = takeUntil(data1, callBack1)

// console.log(actual)

// const expected = [3, 5, 7, 9, 3];


// assertArraysEqual(actual, expected)
