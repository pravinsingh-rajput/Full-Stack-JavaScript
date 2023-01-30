"use strict";

const arr = [11, 12, 13, 14];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// console.log(a, b, c, d);

const [p, q, r, s] = arr;
console.log(p, q, r, s);

const [l, m, n] = arr;
console.log(l, m, n);

const [x, , y, z] = arr;
console.log(x, y, z);

// Switching Variables

const temp = ["Pravin", "Singh"];

let [fname, lname] = temp;
console.log(fname, lname);

[lname, fname] = [fname, lname];
console.log(fname, lname);

// nested

const num = [1, 2, [4, 5]];

const [num1, num2, num3] = num;
console.log(num1, num2, num3);

const [num_1, num_2, [num_3, num_4]] = num;
console.log(num_1, num_2, num_3, num_4);

// Default value

const food = ["Burger", "Pizza"];
const [food1, food2, food3] = food;
console.log(food1, food2, food3);

const [food_1 = 1, food_2 = 1, food_3 = 1] = food;
console.log(food_1, food_2, food_3);
