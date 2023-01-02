"use strict";

// Check winner of match

const avgcal = (score1, score2, score3) => score1 + score2 + score3 / 3;

const team1 = avgcal(45, 87, 22);
const team2 = avgcal(12, 95, 52);

const checkwinner = function (team1, team2) {
  if (team1 > team2) {
    console.log(`Team1 won🏆 the match`);
  } else if (team1 < team2) {
    console.log(`Team2 won🏆 the match`);
  } else if (team1 == team2) {
    console.log(`It's Draw`);
  } else {
    console.log(`OPPS! Something went Wrong`);
  }
};

checkwinner(team1, team2);
