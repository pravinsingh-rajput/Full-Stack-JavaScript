"use strict";

const name = ["Pravin", "Shweta", "Anuj", "Sneha", "Akash"];

console.log(name);
console.log(name[0]);
console.log(name.length);

name[5] = "Rishab";

// console.log(name);
// console.log(name.indexOf("Shweta"));
console.log(name.includes("Pravin"));

// Adding Elements
name.push("end"); //At the end
name.unshift("start"); //At the start
// console.log(name);

// Removing Elements
console.log(name.pop()); //Last
console.log(name.shift()); //first
// console.log(name);
