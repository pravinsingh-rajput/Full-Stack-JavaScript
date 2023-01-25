"use strict";

// importing

const reset = document.querySelector(".reset");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

const dice = document.querySelector(".dice");
const animatedice = document.querySelector(".animatedice");
const rolldice = document.querySelector(".rolldice");

roll.addEventListener("click", function () {
  console.log("Clicked");
  dice.classList.add("hidden");
  rolldice.classList.remove("hidden");
  animatedice.classList.remove("hidden");
  roll.classList.add("hidden");

  setTimeout(() => {
    animatedice.classList.add("hidden");
    roll.classList.remove("hidden");
    rolldice.classList.add("hidden");
    dice.classList.remove("hidden");
  }, 2000);
});
