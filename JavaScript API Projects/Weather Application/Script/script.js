"use strict";

// Input

const searchinput = document.getElementById("searchinput");
const search = document.querySelector("#search");
const searched_loction = document.querySelectorAll(".searched_loction");
const searched_temperature = document.querySelector(".searched_temperature");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const timezoneid = document.querySelector(".timezoneid");
const today_sunrise = document.querySelector(".today_sunrise");
const today_sunset = document.querySelector(".today_sunset");
const windspeed = document.querySelector(".windspeed");
const winddegree = document.querySelector(".winddegree");
const winddirection = document.querySelector(".winddirection");
const humidity = document.querySelector(".humidity");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const localtime = document.querySelector(".localtime");

const tweleveam = document.querySelector(".tweleveam");
const fouram = document.querySelector(".fouram");
const eightam = document.querySelector(".eightam");
const twelevepm = document.querySelector(".twelevepm");
const fourpm = document.querySelector(".fourpm");
const eightpm = document.querySelector(".eightpm");
const elevenpm = document.querySelector(".elevenpm");

let data;
let astro;
let timetemp;

const getdata = async (event) => {
  event.preventDefault();
  if (!searchinput.value) {
    alert("Enter your City");
  }

  const city = searchinput.value;

  const fetchdata = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=59772764d12645ff9ce61857231402&q=${city}&days=5`
  );

  const recdata = await fetchdata.json();

  data = recdata;
  astro = data.forecast.forecastday;
  timetemp = data.forecast.forecastday[0];

  // Displaying Data

  displaylocationdata();
  sunriseset();
  displaymoredetails();
  displaytimetemp();
};

// displaying Data

const displaylocationdata = function () {
  searched_loction[0].textContent = data.location.name;
  searched_loction[1].textContent = data.location.name;
  searched_loction[2].textContent = data.location.name;
  searched_temperature.innerHTML = `${data.current.temp_c}<sup>o</sup>`;
  region.textContent = data.location.region;
  country.textContent = data.location.country;
  timezoneid.textContent = data.location.tz_id;
};

const sunrise = (num) => {
  return astro[num].astro.sunrise;
};
const sunset = (num) => {
  return astro[num].astro.sunset;
};

const sunriseset = function () {
  today_sunrise.textContent = sunrise(0);
  today_sunset.textContent = sunset(0);
};

const displaymoredetails = function () {
  windspeed.textContent = `${data.current.wind_kph} Km/h`;
  winddegree.textContent = data.current.wind_degree;
  winddirection.textContent = data.current.wind_dir;
  humidity.textContent = data.current.humidity;
  latitude.textContent = data.location.lat;
  longitude.textContent = data.location.lon;
  localtime.textContent = data.location.localtime;
};

const timedetail = (num) => {
  return timetemp.hour[num].temp_c;
};

const displaytimetemp = () => {
  tweleveam.innerHTML = `${timedetail(0)}<sup>o</sup>`;
  fouram.innerHTML = `${timedetail(4)}<sup>o</sup>`;
  eightam.innerHTML = `${timedetail(8)}<sup>o</sup>`;
  twelevepm.innerHTML = `${timedetail(12)}<sup>o</sup>`;
  fourpm.innerHTML = `${timedetail(16)}<sup>o</sup>`;
  eightpm.innerHTML = `${timedetail(20)}<sup>o</sup>`;
  elevenpm.innerHTML = `${timedetail(23)}<sup>o</sup>`;
};
