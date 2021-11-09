const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



console.log(middle(([1])))
console.log(middle(([1, 2])))
console.log(middle(([1, 7, 4, 2])))
console.log(middle(([1, 2, 3, 4, 5, 6])))
console.log(middle(([1, 2, 3, 4, 5, 6, 7])))
console.log(middle(([1, 3, 7, 5, 8, 6, 7])))
console.log(middle(["hello", "jello", "even"]))
assertArraysEqual(middle(([1, 2, 3, 4, 5, 6, 7])), [1, 3, 7, 5, 8, 6, 7])