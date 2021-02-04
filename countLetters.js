const assertEqual = function(actual, expected) {


  if (actual === expected) {
    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (allLetters) {

const results = {}

for (const letters of allLetters) {

  if (allLetters[letters] !== " ") 
    if (results[letters]) {
      results[letters] += 1;
    } else {
      results[letters] = 1;
    }
    
  
}
  return results;
}

console.log(countLetters("Lighthouse"))

