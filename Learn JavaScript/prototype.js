"use strict";

let username = "Pravin      ";

// console.log(username.length);

String.prototype.truelength = function () {
  console.log(this.trim().length);
};

let password = "Prav 123   ";

// console.log(password.length);
// console.log(password.truelength());

let arr = ["burger", "Pizza", "", ""];

// console.log(arr.length);
// console.log(arr.truelength());  Error
