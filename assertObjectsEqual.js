
const assertObjectsEqual = function(actual, expected) {
  
  const inspect = require('util').inspect; 
  
  console.log(`Example label: ${inspect(actual)}`);

  if (eqObjects(actual, expected)) {

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




const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {

      if (!eqArrays(object1[key], object2[key]))
        return false;
    }
    else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc); 

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, cd2); 

