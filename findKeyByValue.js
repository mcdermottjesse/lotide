const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, val) {
  

  for(const key of Object.keys(obj)) {

   
    if(obj[key] === val) {
      return key
    }
    
}

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");