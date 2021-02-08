const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns length of the array as 3, slice not applied", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words)
    assert.strictEqual(words.length, 3)
   
  });

  it("returns length as 2 because slice method is applies in this instance", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2)
   
  });

  it("returns length as 4 because slice method is applies in this instance", () => {
    const play = tail(["Soccer", "Rugby", "Boxing", "BBall", "MMA"]);
    assert.strictEqual(play.length, 4)
});

});