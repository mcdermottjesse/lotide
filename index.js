const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require("./countOnly");
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findkey');
const findKeyByValue = require("./findKeyByValue");
const map = require("./map")
const takeUntil = require("./takeUntil")
const without = require("./without")
const countLetters = require("./countLetters")
const letterPositions = require("./letterPositions")

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map, 
  takeUntil: takeUntil,
  without: without,
  countLetters: countLetters,
  letterPositions: letterPositions

};