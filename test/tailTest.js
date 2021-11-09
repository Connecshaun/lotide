const expect = require('chai').expect;
const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs", "Coffee", "Chocolate"]);
  const result2 = tail([0, 2, 3, 4]);
  it("Should only return last 4 of 5 elements", () => {
    expect(result).to.eql(["Lighthouse", "Labs", "Coffee", "Chocolate"]);
  });
  it("The first element in the result array should be 'Lighthouse'", () => {
    assert.equal(result[0], "Lighthouse");
  });
  it("The second element in the results array should be 'Labs'", () => {
    assert.equal(result[1], "Labs");
  });
  it("The first element in the array shold be the number 2", () => {
    assert.equal(result2[0], 2);
  });
});