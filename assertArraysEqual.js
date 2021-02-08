const eqArrays = require("./eqArrays")

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {

    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }

};


/*
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {

      return false
    }


  }
  return true

}
*/




assertArraysEqual([1, 2, 3], [1, 2, 3]); //passed


assertArraysEqual([1, 2, 3, 4], [1, 2, 3]); //fail
 
assertArraysEqual([1, 2, 3], [3, 2, 1]); //fail

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //fail
