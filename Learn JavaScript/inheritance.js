"use strict";

const user = {
  username: "test",
  userpass: 123,
};

const admin = {
  admin: true,
  __proto__: user,
};

// console.log(admin.username);

// Mordern Method

const student = {
  username: "User",
  pass: 1245,
  teaching: false,
};

const teacher = {
  teaching: true,
};

Object.setPrototypeOf(teacher, student);

console.log(teacher.username);
console.log(teacher.teaching);
