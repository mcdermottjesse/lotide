const assert = require('chai').assert;
const middle = require('../middle');



describe("#middle", () => {
  it("returns middle element of array 2", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });

  it("returns middle element of array 3", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5]), 3);
  });

  it("returns middle element of array 2 and 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns middle element of array 3 and 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});