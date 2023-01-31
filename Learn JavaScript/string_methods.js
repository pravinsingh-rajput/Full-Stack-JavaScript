"use strict";

const mynamne = "Pravin Singh";

// console.log(mynamne.toUpperCase());
// console.log(mynamne.toLocaleLowerCase());

// const tempname = "   PRaVin  ";

// console.log(tempname.toLocaleLowerCase().trim());

const random = "  PraVIn ";

let correct1 = random.toLocaleLowerCase().trim();
console.log(correct1);

let correct2 = correct1[0].toUpperCase() + correct1.slice(1);
console.log(correct2);

// replace

const dollar = "147,90$";

const rupee = dollar.replace("$", " Rupees").replace(",", ".");
console.log(rupee);

let goodgreet = "Good Morning, Good Afternoon, Good Night";

let badgreet = goodgreet.replaceAll("Good", "Bad");
console.log(badgreet);

// Split

const newname = mynamne.split(" ");
console.log(newname);

// join

let joinname = "Mr. " + newname.join(" ");
console.log(joinname);

// padding

console.log(joinname.padStart(30, "*"));
console.log(joinname.padEnd(30, "*"));
console.log(joinname.padStart(30, "*").padEnd(50, "*"));

// repeat

console.log(joinname.repeat(10));
