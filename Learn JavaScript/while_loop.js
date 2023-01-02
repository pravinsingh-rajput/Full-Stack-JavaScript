"use strict";

// let number = 5;

// while (number <= 10) {
//   console.log(number);
//   number++;
// }

const marks = [45, 54, 87, 74, 56, 49];
let newmarks = [];
for (let i = 0; i < marks.length; i++) {
  newmarks.push(1 + marks[i]);
}

console.log(newmarks);
