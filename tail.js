

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log("✅✅✅" + `Assertation Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + `Assertation Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
let newArray = array.slice(1)
return newArray
}



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words) // no need to capture the return value since we are not checking it
assertEqual(words.length, 3) //there are 3  array values associated with the assertEqual function




const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //here output is 2 === 2 though there a 3 elements in the array because we used slice method
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");
