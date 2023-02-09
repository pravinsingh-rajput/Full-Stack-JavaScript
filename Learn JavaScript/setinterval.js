"use strict";

// setInterval(() => {
//   console.log("This will print everysecond");
// }, 1000);

// setInterval(() => {
//   console.log(new Date());
// }, 1000);

setInterval(() => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
