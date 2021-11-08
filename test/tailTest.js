const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs", "Coffee", "Chocolate"]); //initial array test
const result2 = tail([1, 2, 3, 4]); //another array test

assertEqual(result.length, 4); // ensure we are seeing 4 elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[2], "Coffee"); // ensure third element is "Coffee"
assertEqual(result[3], "Chocolate"); // ensure fourth element is "Labs"
assertEqual(result2[0], 2); // ensure first element is 2