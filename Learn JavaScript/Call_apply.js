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

// airindia.book("Pravin", 346);
// airindia.book("Shweta", 452);

const spicejet = {
  airlinename: "Spice Jet",
  airlinecode: "SP",
  booking: [],
};

const book = airindia.book;

// Error
// spicejet.book("David", 241);

// Call Method

book.call(spicejet, "David", 241);
book.call(spicejet, "Jonas", 711);
book.call(airindia, "Rohan", 241);
book.call(airindia, "Kunal", 711);

// console.log(airindia);
// console.log(spicejet);

// Appply Method

const data = ["Shweta", 111];
book.apply(airindia, data);
console.log(airindia);

// Can also be achived using call

book.call(spicejet, ...data);
console.log(spicejet);
