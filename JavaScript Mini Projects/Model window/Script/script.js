"use strict";

console.log("Connected");

const btn = document.querySelectorAll(".button");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");

btn[0].addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
btn[1].addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
btn[2].addEventListener("click", function () {
  popup.classList.toggle("hidden");
});

close.addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
