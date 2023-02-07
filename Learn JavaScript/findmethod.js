"use strict";

const accoun1 = {
  owner: "Doctor Strange",
  pin: 1111,
  transactions: [
    100, -250, 96, 4514, -2541.87, 6987, 7845, -4697.37, -1458.2, 2587.71, 6547,
    -200, -2456, 1000,
  ],
  interest: 1.2,
};

const accoun2 = {
  owner: "I Am Groot",
  pin: 2222,
  transactions: [
    520, 7850, -1058.54, 2414, -30000, 8975, 9923, -7584, -241, 25578, 6584,
    -1575,
  ],
  interest: 1.5,
};

const account3 = {
  owner: "Iron Man",
  pin: 3333,
  transactions: [
    8745, -2245.17, -7845, 5700.54, 45102.9, -1457, 3257, -87469, 78458, 24578,
    7894.5, 4587.17, -6784,
  ],
  interest: 2.3,
};

const account = [accoun1, accoun2, account3];

console.log(account.find((user) => user.owner === "Iron Man"));
