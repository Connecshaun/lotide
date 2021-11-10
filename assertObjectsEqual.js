const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;