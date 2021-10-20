//ASSERT EQUAL FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TAIL FUNCTION TO DETERMINE "EVERY ELEMENT EXCEPT THE "HEAD" OF AN ARRAY"

const tail = function(array) {
  let newArray = array.filter(element => element !== array[0]);
  return newArray;
};

const result = tail(["Hello", "Lighthouse", "Labs", "Coffee", "Chocolate"]); //initial array going in
assertEqual(result.length, 4); // ensure we are seeing 4 elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[2], "Coffee"); // ensure third element is "Coffee"
assertEqual(result[3], "Chocolate"); // ensure fourth element is "Labs"