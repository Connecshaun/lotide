const findKeyByValue = function(object, value) {
  for (const props in object) {
    if (object[props] === value) {
      return props;
    }
  }
};

module.exports = findKeyByValue;

