const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let elements = [];
  const arrayMiddle = array.length / 2;
  const rounded = Math.floor(arrayMiddle);
  const isOdd = array.length % 2 !== 0;

  if (array.length <= 2) {
    return [];
  }
  if (isOdd) {
    elements.push(array[rounded]);
  } else {
    elements.push(array[(arrayMiddle) - 1], array[arrayMiddle]);
  }
  return elements;
};

module.exports = middle;