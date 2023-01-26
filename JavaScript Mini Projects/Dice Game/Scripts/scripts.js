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
const winningplayer = document.querySelector(".winningplayer");
let score1 = Number(document.querySelector(".totalscore_0").innerText);
let score2 = Number(document.querySelector(".totalscore_1").innerText);

let live1 = document.querySelector(".live1");
let live2 = document.querySelector(".live2");

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
    currentScore.innerText = tempScore;
  }, 2000);
}

let activeplayer = 0;

function active(activeplayer) {
  if (activeplayer === 0) {
    live1.classList.add("bg-green-300");
    live2.classList.remove("bg-green-300");
  } else {
    live2.classList.add("bg-green-300");
    live1.classList.remove("bg-green-300");
  }
}

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
      document.querySelector(`.currscore_${activeplayer}`).innerText =
        tempScore;
    }, 2000);
    winning();
  } else {
    setTimeout(() => {
      tempScore = 0;
      document.querySelector(`.currscore_${activeplayer}`).innerText =
        tempScore;
      change_effect(activeplayer);
      activeplayer = activeplayer == 0 ? 1 : 0;
      active(activeplayer);
    }, 2000);
  }
});

hold.addEventListener("click", function () {
  totalscore =
    Number(document.querySelector(`.totalscore_${activeplayer}`).innerText) +
    Number(tempScore);

  document.querySelector(`.totalscore_${activeplayer}`).innerText = totalscore;
  totalscore = 0;
  tempScore = 0;
  document.querySelector(`.currscore_${activeplayer}`).innerText = tempScore;
  change_effect(activeplayer);
  activeplayer = activeplayer === 1 ? 0 : 1;
  active(activeplayer);
});

// Reset
reset.addEventListener("click", function () {
  console.log("clicked");
  dice.classList.add("hidden");
  rolldice.classList.add("hidden");
  animatedice.classList.add("hidden");
  roll.classList.remove("hidden");
  totalscore = 0;
  tempScore = 0;
  document.querySelector(`.currscore_${activeplayer}`).textContent = tempScore;
  document.querySelector(`.totalscore_${activeplayer}`).textContent =
    totalscore;

  if (!activeplayer == 0) {
    change_effect(activeplayer);
  }
  activeplayer = activeplayer === 0 ? 1 : 0;

  document.querySelector(`.totalscore_${activeplayer}`).textContent =
    totalscore;
  document.querySelector(`.currscore_${activeplayer}`).textContent = tempScore;

  activeplayer = 0;
  active(activeplayer);
});
