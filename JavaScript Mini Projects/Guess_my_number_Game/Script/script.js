"use strict";

console.log("Successfully Linked");

// Animations
const winning = document.querySelector(".winning");
const correct = document.querySelector(".correct");
const message = document.querySelector(".message");
const guessing = document.querySelector(".guessing");

// user
const userinput = document.querySelector(".userinput");
const tryagain = document.querySelector(".tryagin");
const check = document.querySelector(".check");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

// number
let generated_number = Math.trunc(Math.random() * 21);
let number = (document.querySelector(".secretnumber").textContent =
  generated_number);

let totalscore = 20;
let tempscore;

//   Checking
check.addEventListener("click", function () {
  const input_number = Number(userinput.value);

  if (totalscore > 0) {
    if (!input_number) {
      message.textContent = "⛔ No Number";
    } else if (number === input_number) {
      message.textContent = "🎉 Correct";
      tempscore = tempscore > totalscore ? tempscore : totalscore;
      highscore.textContent = tempscore;
      document.querySelector(".home").style.backgroundColor = "green";
      message.classList.add("hidden");
      correct.classList.remove("hidden");
      winning.classList.remove("hidden");
      guessing.classList.add("hidden");
      document.querySelector(".secretnumber").classList.remove("hidden");
    } else if (number !== input_number) {
      message.textContent =
        number > input_number ? "⬇️ Two Low" : "⬆️ Two High";
      userinput.value = "";
      totalscore--;
      score.textContent = totalscore;
    }
  } else {
    message.textContent = "You Lost The Game";
    document.querySelector(".home").style.backgroundColor = "red";
    document.querySelector(".loosing").classList.remove("hidden");
  }
});

tryagain.addEventListener("click", function () {
  message.classList.remove("hidden");
  message.textContent = "Start Guessing";
  document.querySelector(".home").style.backgroundColor = "cyan";
  correct.classList.add("hidden");
  document.querySelector(".loosing").classList.add("hidden");
  winning.classList.add("hidden");
  guessing.classList.remove("hidden");
  document.querySelector(".secretnumber").classList.add("hidden");
  totalscore = 20;
  score.textContent = totalscore;
  userinput.value = "";
  generated_number = Math.trunc(Math.random() * 21);
  number = document.querySelector(".secretnumber").textContent =
    generated_number;
});
