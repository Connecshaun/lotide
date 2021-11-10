const takeUntil = function(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  }
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results3 = takeUntil(data3, x => x === ',');
// console.log(results3);


// assertArraysEqual(results1, data1)
// assertArraysEqual(results3, data3)
