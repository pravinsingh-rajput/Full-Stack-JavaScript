"Use strict";

// const arr = [12, 13, 14, 15, 16];

// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3);
