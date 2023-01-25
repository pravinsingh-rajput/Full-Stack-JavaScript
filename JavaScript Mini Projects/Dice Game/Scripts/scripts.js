"use strict";

// importing

const reset = document.querySelector(".reset");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

const dice = document.querySelector(".dice");
const animatedice = document.querySelector(".animatedice");
const rolldice = document.querySelector(".rolldice");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");

let tempScore = 0;
let totalscore = 0;

function showanimation(numberdice) {
  dice.classList.add("hidden");
  rolldice.classList.remove("hidden");
  animatedice.classList.remove("hidden");
  roll.classList.add("hidden");

  setTimeout(() => {
    animatedice.classList.add("hidden");
    roll.classList.remove("hidden");
    rolldice.classList.add("hidden");
    dice.src = `./images/Dice-${numberdice}.png`;
    dice.classList.remove("hidden");
  }, 2000);
}
function upadte_current_score(numberdice, currentScore) {
  setTimeout(() => {
    tempScore =
      numberdice > 1 ? `${Number(tempScore) + Number(numberdice)}` : 0;
    console.log(tempScore);
    currentScore.textContent = tempScore;
  }, 2000);
}

let activeplayer = 0;

function change_effect(activeplayer) {
  if (activeplayer === 0) {
    player1.classList.remove("bg-pink-300");
    player1.classList.add("bg-pink-400");
    player2.classList.remove("bg-pink-400");
    player2.classList.add("bg-pink-300");
  } else {
    player1.classList.add("bg-pink-300");
    player1.classList.remove("bg-pink-400");
    player2.classList.add("bg-pink-400");
    player2.classList.remove("bg-pink-300");
  }
}

roll.addEventListener("click", function () {
  let numberdice = Math.trunc(Math.random() * 6 + 1);
  showanimation(numberdice);

  if (numberdice !== 1) {
    setTimeout(() => {
      tempScore = `${Number(tempScore) + Number(numberdice)}`;
      document.querySelector(`.currscore_${activeplayer}`).textContent =
        tempScore;
    }, 2000);
  } else {
    setTimeout(() => {
      tempScore = 0;
      document.querySelector(`.currscore_${activeplayer}`).textContent =
        tempScore;
      change_effect(activeplayer);
      activeplayer = activeplayer == 0 ? 1 : 0;
    }, 2000);
  }
});

hold.addEventListener("click", function () {
  totalscore =
    Number(document.querySelector(`.totalscore_${activeplayer}`).textContent) +
    Number(tempScore);

  document.querySelector(`.totalscore_${activeplayer}`).textContent =
    totalscore;
  totalscore = 0;
  tempScore = 0;
  document.querySelector(`.currscore_${activeplayer}`).textContent = tempScore;
  change_effect(activeplayer);
  activeplayer = activeplayer === 1 ? 0 : 1;
});

console.log(Number(tempScore));
console.log(Number(document.querySelector(`.totalscore_${activeplayer}`)));
console.log(
  Number(document.querySelector(`.totalscore_${activeplayer}`)) +
    Number(tempScore)
);
