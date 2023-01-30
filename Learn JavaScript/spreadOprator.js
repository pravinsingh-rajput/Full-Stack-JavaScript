"Use strict";

let num1 = [5, 6, 7, 8, 9];

// Copying array

let num2 = [1, 2, 3, 4, ...num1];
console.log(num2);

// Copying string

let fname = "pravin";

const arrname = [...fname];
console.log(arrname);

const resturant = {
  name: "Food Hub",
  open: "10:00 Am",
  close: "11:30 Am",
};
console.log(resturant);

// Copying Objects

let resturantcopy = { ...resturant };
console.log(resturantcopy);

resturantcopy = { Founded: 1980, ...resturant };
console.log(resturantcopy);
