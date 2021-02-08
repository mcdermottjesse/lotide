const tail = require("../tail") 

const assertEqual = require("../assertEqual") 

const words = ["Yo Yo", "Lighthouse", "Labs"]; //as we have not input tail here slice is not applied to our assertEqual function below
tail(words) // no need to capture the return value since we are not checking it//can't check this anyway
assertEqual(words.length, 3) //there are 3  array values associated with the assertEqual function, slice method not applied here




const result = tail(["Hello", "Lighthouse", "Labs"]); //note how having tail as the function runs the splice method as per below
assertEqual(result.length, 2); //here output is 2 === 2 though there a 3 elements in the array because we used slice method
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse". here array is 0 due to slice method
assertEqual(result[1], "Labs"); //here array is 1 due to slice

const play = tail(["Soccer", "Rugby", "Boxing", "BBall", "MMA"]);
assertEqual(play.length, 3);
assertEqual(play[0], "BBall");
assertEqual(play[1], "Boxing");
assertEqual(play[3], "MMA");