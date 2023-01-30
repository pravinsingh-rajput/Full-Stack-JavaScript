"use strict";

const data = new Set([1, 2, 3, 2, 5, 41, 36, 1, 4, 5]);
console.log(data);

// Adding
data.add(10);
data.add(88);
console.log(data);
data.delete(2);
console.log(data);
console.log(data.has(41));

// Converting into array
const arr = [...data];
console.log(arr);
