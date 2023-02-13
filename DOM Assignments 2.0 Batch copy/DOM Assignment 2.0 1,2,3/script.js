"use strict";

// Output 1
const hireme = document.getElementsByTagName("ul")[0];
const newitem = document.createElement("li");
newitem.textContent = "Hire me";
hireme.append(newitem);

// output 2
const searchbox = document.querySelector(".search-field input");
searchbox.placeholder = "Search My Project";

// Output 3

const social = document.getElementsByTagName("footer")[0];

const socialicon = `<ul>
        <li>
          <a href="/" target="_blank"><i class="fa-brands fa-github"></i></a>
        </li>
        <li>
          <a href="/" target="_blank"
            ><i class="fa-brands fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
        </li>
      </ul>`;

social.insertAdjacentHTML("beforeend", socialicon);

// Output 4

const image = document.querySelector(".hero-right-section img");

image.src =
  "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

// Output 4

const support = document.querySelector(".hero-right-section-btns");

const support_btn = `<button>Chat With Me</button>`;

support.insertAdjacentHTML("beforeend", support_btn);
