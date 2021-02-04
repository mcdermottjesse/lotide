
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {

    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }

};



const eqArrays = function (arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {

      return false
    }


  }
  return true

}

//loop thru string 
    //check to see if there are spaces
    //if spaces don't log
    //if there are spaces we want to return index
    //if the letter is already index add to that count
    //we want to return a list of all indices

const letterPositions = function(sentence) {
  const results = {};

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] !== " ") {
    const letter = sentence[i]
    
    if (results[letter]) {
    results[letter].push(i)

    } else {
      results[letter] = [i]
    }
  }
}

  return results;
};


console.log(letterPositions("lighthouse labs"));


