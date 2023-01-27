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
const winningplayer = document.querySelector(".winning");
let score1 = Number(document.querySelector(".totalscore_0").innerText);
let score2 = Number(document.querySelector(".totalscore_1").innerText);
let data1 = document.querySelector(".data1");
let data2 = document.querySelector(".data2");

let live1 = document.querySelector(".live1");
let live2 = document.querySelector(".live2");

let tempScore = 0;
let totalscore = 0;
let playing = true;

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
    live1.classList.add("shadow-2xl");
    live2.classList.remove("shadow-2xl");
    live2.classList.remove("bg-green-300");
    data1.classList.add("shadow-2xl");
    data1.classList.add("rounded-lg");
    data2.classList.remove("shadow-2xl");
    data2.classList.remove("rounded-lg");
  } else {
    live2.classList.add("bg-green-300");
    live1.classList.remove("bg-green-300");
    live2.classList.add("shadow-2xl");
    live1.classList.remove("shadow-2xl");
    data2.classList.add("shadow-2xl");
    data2.classList.add("rounded-lg");
    data1.classList.remove("shadow-2xl");
    data1.classList.remove("rounded-lg");
  }
}

function change_effect(activeplayer) {
  if (activeplayer === 0) {
    player1.classList.remove("bg-pink-200");
    player1.classList.add("bg-pink-400");
    player2.classList.remove("bg-pink-400");
    player2.classList.add("bg-pink-200");
  } else {
    player1.classList.add("bg-pink-200");
    player1.classList.remove("bg-pink-400");
    player2.classList.add("bg-pink-400");
    player2.classList.remove("bg-pink-200");
  }
}

roll.addEventListener("click", function () {
  let numberdice = Math.trunc(Math.random() * 6 + 1);
  showanimation(numberdice);

  let winner =
    Number(document.querySelector(`.totalscore_${activeplayer}`).innerText) +
    Number(tempScore) +
    Number(numberdice);
  if (playing && winner < 50) {
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
  } else {
    setTimeout(() => {
      document.querySelector(`.totalscore_${activeplayer}`).innerText = winner;
      winningplayer.classList.add("flex");
      winningplayer.classList.remove("hidden");
      playing = false;
    }, 2000);
  }
});

hold.addEventListener("click", function () {
  if (playing) {
    totalscore =
      Number(document.querySelector(`.totalscore_${activeplayer}`).innerText) +
      Number(tempScore);

    document.querySelector(`.totalscore_${activeplayer}`).innerText =
      totalscore;
    totalscore = 0;
    tempScore = 0;
    document.querySelector(`.currscore_${activeplayer}`).innerText = tempScore;
    change_effect(activeplayer);
    activeplayer = activeplayer === 1 ? 0 : 1;
    active(activeplayer);
  }
});

// Reset
reset.addEventListener("click", function () {
  if (!playing) {
    console.log("clicked");
    dice.classList.add("hidden");
    rolldice.classList.add("hidden");
    animatedice.classList.add("hidden");
    roll.classList.remove("hidden");
    totalscore = 0;
    tempScore = 0;
    document.querySelector(`.currscore_${activeplayer}`).textContent =
      tempScore;
    document.querySelector(`.totalscore_${activeplayer}`).textContent =
      totalscore;

    if (!activeplayer == 0) {
      change_effect(activeplayer);
    }
    activeplayer = activeplayer === 0 ? 1 : 0;

    document.querySelector(`.totalscore_${activeplayer}`).textContent =
      totalscore;
    document.querySelector(`.currscore_${activeplayer}`).textContent =
      tempScore;

    activeplayer = 0;
    active(activeplayer);
    playing = true;

    winningplayer.classList.add("hidden");
    winningplayer.classList.remove("flex");
  } else {
    playing = true;
  }
});
