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

  order: function ({ time, address, starterindex, mainindex }) {
    console.log(
      `Your orders for ${this.Starter[starterindex]} & ${this.Chinese[mainindex]} will be to ${address} at ${time}`
    );
  },
};

// Destructuring
// const { resturantname, openinghour, Chinese } = resturants;
// console.log(resturantname, openinghour, Chinese);

// Custom Name
// const {
//   resturantname: rname,
//   openinghour: open_time,
//   Chinese: food,
// } = resturants;
// console.log(rname, open_time, food);

// Default value

// const {
//   resturantname: r_name = [],
//   menu: menu = [],
//   openinghour: opening = [],
// } = resturants;
// console.log(r_name, menu, opening);

// Mutating

// let open = 0;
// let close = 0;
// ({ open, close } = opening.Mon);
// console.log(open, close);

// nested

// const {
//   sun: { open, close },
// } = opening;
// console.log(open, close);

///////////////////////////////////////////////////

const pravin = {
  address: "Mumbai 401002",
  time: "10:00 AM",
  starterindex: 2,
  mainindex: 3,
};

resturants.order(pravin);
