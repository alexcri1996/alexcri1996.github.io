const el = document.querySelector("#module");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  // el.style.backgroundPositionY = -e.offsetY + "px";
});