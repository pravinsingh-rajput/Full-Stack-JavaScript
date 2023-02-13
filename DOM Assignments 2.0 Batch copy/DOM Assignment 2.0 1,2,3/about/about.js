const addaccordian = document.querySelector(".accordian-wrapper");

const skills = `<div class="accordian">
        <h3>Skills</h3>
        <p>
          I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.
        </p>
      </div>`;

addaccordian.insertAdjacentHTML("beforeend", skills);

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
