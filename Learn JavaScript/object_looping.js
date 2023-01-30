"use strict";

const resturants = {
  resturantname: "Food Hub",
  categories: ["Starter", "Main Course", "Desert", "Chinese", "Italian"],
  openinghour: {
    Mon: {
      open: 10,
      close: 9,
    },
    Wed: {
      open: 9,
      close: 11,
    },
    Fri: {
      open: 11,
      close: 10,
    },
    sat: {
      open: 9,
      close: 12,
    },
    sun: {
      open: 12,
      close: 12,
    },
  },
  Starter: [
    "Chiken Crispy",
    "Chiken 65",
    "Chiken 95",
    "lollypop Dry",
    "lollypop Dry",
  ],
  Desert: ["Cake", "Shake", "Icream", "faluda"],
  Chinese: [
    "Hakka Noodles",
    "Singapuri Rice",
    "Triple Rice",
    "Schewajan Noodles",
  ],
};

// const keys = Object.keys(resturants.openinghour);
// const val = Object.values(resturants.openinghour);
// console.log(keys, val);

const data = Object.entries(resturants.openinghour);

for (const [day, { open, close }] of data) {
  console.log(
    `On ${day} we open at ${open}:00 Am and closes at ${close}:00 Pm `
  );
}
