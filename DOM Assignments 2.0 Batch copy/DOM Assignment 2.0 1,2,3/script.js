"use strict";

// Output 1
const hireme = document.getElementsByTagName("ul")[0];
console.log(hireme);
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

social.appendChild(socialicon);
