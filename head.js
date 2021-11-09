// const assertEqual = require('../assertEqual'); // now that we have chai's assertion library!! WOOOHOOOOOOOO!!!! 

const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;

