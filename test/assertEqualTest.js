const assertEqual = require('../assertEqual');
const head = require("../head") 
const tail = require("../tail")
const countOnly = require("../countOnly")




assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const words = ["Yo Yo", "Lighthouse", "Labs"]; 
tail(words) 
assertEqual(words.length, 3) 


const result = tail(["Hello", "Lighthouse", "Labs"]); 
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 

const play = tail(["Soccer", "Rugby", "Boxing", "BBall", "MMA"]);
assertEqual(play.length, 3);
assertEqual(play[0], "BBall");
assertEqual(play[1], "Boxing");
assertEqual(play[3], "MMA");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

