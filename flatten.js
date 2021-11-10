const flatten = function(array) {
  if (Array.isArray(array)) {
    return array.flat();
  }
  return undefined;
};

module.exports = flatten;