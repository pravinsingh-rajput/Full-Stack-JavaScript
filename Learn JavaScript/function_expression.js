"use strict";

const calage = function (DOB, Currentyear) {
  return Currentyear - DOB;
};

const age = calage(2000, 2022);
console.log(age);

// Can be used before defining it
