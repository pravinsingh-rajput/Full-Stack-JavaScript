const body = document.querySelector("body");

body.addEventListener("click", function (event) {
  let container = document.createElement("div");
  container.classList.add("circle");
  container.style.left = event.screenX + "px";
  container.style.top = event.screenY + "px";
  body.appendChild(container);
});
