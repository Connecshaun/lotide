const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(array, array2) {
  if (!eqArrays(array, array2)) {
    return console.log(`😡 😡 😡 Assertion Failed:, ${array} !== ${array2}`);
  }
  console.log(`😁 😁 😁 Assertion Passed:, ${array} === ${array2}`);
};

module.exports = assertArraysEqual;