"use strict";

const airindia = {
  airlinename: "Air India",
  airlinecode: "AIR",
  booking: [],
  book(name, airlinenumber) {
    console.log(
      `${name} booked a seat in ${this.airlinename} flight ${this.airlinecode}${airlinenumber}.`
    );
    this.booking.push({ flight: `${this.airlinecode}${airlinenumber}`, name });
  },
};

const spicejet = {
  airlinename: "Spice Jet",
  airlinecode: "SP",
  booking: [],
};

const book = airindia.book;

// Bind Method

const bookair = book.bind(spicejet);
const booksp = book.bind(airindia);

bookair("Pravin", 128);
booksp("Singh", 428);

console.log(airindia);
console.log(spicejet);

//
