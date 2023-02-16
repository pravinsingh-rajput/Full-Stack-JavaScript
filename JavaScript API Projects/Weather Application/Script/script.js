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

const alltimetemp = document.querySelectorAll(".timetemp");

const futuretempdate = document.querySelectorAll(".futuretempdate");
const futuremaxtemp = document.querySelectorAll(".futuremaxtemp");
const futuremintemp = document.querySelectorAll(".futuremintemp");
const futuresunrise = document.querySelectorAll(".futuresunrise");
const futuresunset = document.querySelectorAll(".futuresunset");

let data;
let astro;
let timetemp;
let futuredata;

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
  futuredata = data.forecast.forecastday;

  // Displaying Data

  displaylocationdata();
  sunriseset();
  displaymoredetails();
  displaytimetemp();
  displayfuturedata();
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
  alltimetemp[0];
};

const displaytimetemp = () => {
  alltimetemp[0].innerHTML = `${timedetail(0)}<sup>o</sup>`;
  alltimetemp[1].innerHTML = `${timedetail(4)}<sup>o</sup>`;
  alltimetemp[2].innerHTML = `${timedetail(8)}<sup>o</sup>`;
  alltimetemp[3].innerHTML = `${timedetail(12)}<sup>o</sup>`;
  alltimetemp[4].innerHTML = `${timedetail(16)}<sup>o</sup>`;
  alltimetemp[5].innerHTML = `${timedetail(20)}<sup>o</sup>`;
  alltimetemp[6].innerHTML = `${timedetail(23)}<sup>o</sup>`;
};

// Future Prediction

const displayfuturedata = () => {
  for (let i = 0; i <= 4; i++) {
    futuretempdate[i].textContent = futuredata[i + 1].date;
    futuremaxtemp[i].innerHTML = `${
      futuredata[i + 1].day.maxtemp_c
    }<sup>o</sup>`;
    futuremintemp[i].innerHTML = `${
      futuredata[i + 1].day.mintemp_c
    }<sup>o</sup>`;
    futuresunrise[i].textContent = futuredata[i + 1].astro.sunrise;
    futuresunset[i].textContent = futuredata[i + 1].astro.sunset;
  }
};
