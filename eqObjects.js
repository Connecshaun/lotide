const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let prop1 of keys1) { // switching to dealing with arrays

    if (Array.isArray(object1[prop1])) { //step3 if key is array, match arrays

      if (!(eqArrays(object1[prop1], object2[prop1]))) { //step 4 eqArrays compare arrays
        return false;
      } else { //if not an array
        if (object1[prop1] !== object2[prop1]) { // works for PRIMITIVE data types
          return false;
        }
      }
    }
  }
  return true; //step 5
};

module.exports = eqObjects;