"Use strict";

// For loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// Array
const marks = [82, 54, 87, 41, 32, 47, 48];

// for (let i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

let newmarks = [];

for (let i = 0; i < marks.length; i++) {
  newmarks.push(1 + marks[i]);
}

console.log(newmarks);
