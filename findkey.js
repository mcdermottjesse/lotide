const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }
};





const findKey = function (obj, callback) {

  for (const key in obj) {

    if (callback(obj[key])) {

      return key;

    };
  };
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"


assertEqual(result1, "noma")