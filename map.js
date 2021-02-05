
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {

    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }
}

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
  



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    
    results.push(callback(item));

  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const correctOutput = ["g", "c", "t", "m", "t"]
const incorrectOutput = ["t", "v", "s", "g", "f"]
const incorrectLength = ["g"]
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, correctOutput);
assertArraysEqual(results1, incorrectOutput);
assertArraysEqual(results1, incorrectLength);

const dogs = ["Boxer", "Husky", "PitBull", "German Shepard"];
const correctOutput1 = ["o", "u", "i", "e"]
const incorrectOutput1 = ["t", "v", "s", "p"]
const results2 = map(dogs, word => word[1]);
assertArraysEqual(results2, correctOutput1);
assertArraysEqual(results2, incorrectOutput1);



