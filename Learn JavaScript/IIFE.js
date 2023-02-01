"use strict";

// immediately Invoked Function Expression

(function () {
  console.log("This function will never run again");
})();

(() => console.log("This function also will never run again"))();
