# DOM Assignments

### Assignment 1

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task1Output.png)

```javaScript
const hireme = document.getElementsByTagName("ul")[0];
console.log(hireme);
const newitem = document.createElement("li");
newitem.textContent = "Hire me";
hireme.append(newitem);
```

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task2Output.png)

```javaScript
const searchbox = document.querySelector(".search-field input");
searchbox.placeholder = "Search My Project";
```

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task3Output.png)

```javaScript
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
```

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

```javaScript
const image = document.querySelector(".hero-right-section img");

image.src =
  "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task5Output.png)

```javaScript
const support = document.querySelector(".hero-right-section-btns");

const support_btn = `<button>Chat With Me</button>`;
support.insertAdjacentHTML("beforeend", support_btn);
```

### Assignment 2

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task1Output.png)

```javaScript

```

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)

```javaScript
const addaccordian = document.querySelector(".accordian-wrapper");

const skills = `<div class="accordian">
        <h3>Skills</h3>
        <p>
          I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.
        </p>
      </div>`;

addaccordian.insertAdjacentHTML("beforeend", skills);
```

### Assignment 3

![Alt](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

```javaScript
document.querySelector(".enterName").placeholder = "FSJS 2.0";
document.querySelector(".enterMail").placeholder = "FSJS@ineuron.ai";
document.querySelector(".enterMessage").placeholder = "Hello World";

document.querySelector(".userName").placeholder = "FSJS 2.0";
document.querySelector(".userEmail").placeholder = "FSJS@ineuron.ai";
document.querySelector(".userMessage").placeholder = "Hello World";

```
