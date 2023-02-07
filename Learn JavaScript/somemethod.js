"use strict";

const transactions = [
  8745, -2245.17, -7845, 5700.54, 45102.9, -1457, 3257, -87469, 78458, 24578,
  7894.5, 4587.17, -6784,
];

console.log(transactions.includes(78458));

// condtions
console.log(transactions.some((movements) => movements > 20000));
