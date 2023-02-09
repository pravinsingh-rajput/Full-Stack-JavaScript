"use strict";

const todaydate = new Date();

const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};

// const local = navigator.language;

const formatedate = Intl.DateTimeFormat("en-IN", options).format(todaydate);
console.log(formatedate);

// -------------------------------------------------------- //

const price = 4587691.28;

// const formatenumber = Intl.NumberFormat().format(price);
// console.log(formatenumber);

const numberoptions = {
  //   style: "unit",
  //   style: "percent",
  style: "currency",
  //   unit: "celsius",
  currency: "EUR",
  //   usegrouping: false,
};

const formatenumber = Intl.NumberFormat("en-In", numberoptions).format(price);
console.log(formatenumber);
