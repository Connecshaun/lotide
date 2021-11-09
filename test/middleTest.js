const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [7. 4]", () => {
    assert.deepEqual(middle([1, 7, 4, 2]), [7, 4]);
  });
  it("should return [4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("should return 'yellow'", () => {
    assert.deepEqual(middle(["hello", "yellow", "mellow"]), ["yellow"]);
  });
});
