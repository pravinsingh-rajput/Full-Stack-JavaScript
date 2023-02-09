"use strict";

setTimeout(() => {
  console.log("This will print after 2 Seconds");
}, 2000);

setTimeout(
  (ing1, ing2) => {
    console.log(
      `your Pizza with ${ing1}, ${ing2} will be delivered in 5 seconds`
    );
  },
  5000,
  "cheese",
  "Panner"
);

const arr = ["Onion", "Panner", "Tomato", "Cheese"];
setTimeout(
  (ing1, ing2, ing3, ing4) => {
    console.log(
      `your Pizza with ${ing1}, ${ing2}, ${ing3}, ${ing4} will be delivered in 10 seconds`
    );
  },
  10000,
  ...arr
);
