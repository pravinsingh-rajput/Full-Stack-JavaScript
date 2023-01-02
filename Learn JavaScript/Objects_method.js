"use strict";
const data = {
  firstname: "Pravin",
  lastname: "Singh",
  DOB: 2000,
  job: "frontend Developer",
  //   calage: function (DOB) {
  //     return 2023 - DOB;
  //   },
  calage: function () {
    return 2023 - this.DOB;
  },
};

// console.log(data.calage(2000));
console.log(data.calage());
