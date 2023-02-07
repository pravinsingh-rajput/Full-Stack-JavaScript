"use strict";

const heros = ["Iron Man", "Thor", "Black Panther", "Hulk"];

//Mutate the original array
// console.log(heros.sort());

const price = [840, 200, 457, 487, 647, 854, 1257, 35, 794, 1587];

price.sort((a, b) => a - b);
console.log(price);

price.sort((a, b) => b - a);
console.log(price);
