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


/*const middle = function(array) {

let midArr = 0;

for(let i = 0; i < array.length; i++); {

 
 midArr = array[Math.floor(array.length / 2)];

}

 return midArr

} */



const middle = function(array) {
  
  let num = [];

  if (array.length < 3) {
    return num
  }

  else if(array.length % 2 === 1){

    num = array[Math.floor((array.length-1)/2)];
    return num

} else if (array.length % 2 === 0){
  num[0] = array[(array.length/2) - 1];
  num[1] = array[array.length/2];

  return num
  

}

};






console.log(middle([1, 2, 3])); 
console.log(middle([1, 2, 3, 4, 5]));


console.log(middle([1, 2, 3, 4])) 
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(middle([1])) 
console.log(middle([1, 2])) 