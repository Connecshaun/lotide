const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`😁 😁 😁 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡 😡 😡 Assertion Faied: ${actual} !== ${expected}`);
  }
};


assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Coffee", "Coffee");
assertEqual(1, 1);
assertEqual(4, 6);



