const letterPositions = function(sentence) {
  
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];

    if (word !== " ") {

      if (results[word]) {
        results[word].push(i);

      } else {
        results[word] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;