//Creates an array excluding all given values using SameValueZero for equality comparisons.




const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {

    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }

};



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


const without = function(source, itemsToRemove) {
newArray = []
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};
  

console.log(without([1, 2, 3], [1]));

console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 

assertArraysEqual(words, ["hello", "world", "lighthouse"]);