const bodyEl = document.querySelector("body")
const grassEl = document.querySelector(".alt-container .grass")
const treesEl = document.querySelector(".alt-container .trees")
const mountainsEl = document.querySelector(".alt-container .mountains")
const speed = {
  grass: 1,
  trees: .5,
  mountains: .2,
}

bodyEl.addEventListener("mousemove", (e) => {
  grassEl.style.backgroundPositionX = -e.offsetX * speed.grass + "px"
  treesEl.style.backgroundPositionX = -e.offsetX * speed.trees + "px"
  mountainsEl.style.backgroundPositionX = -e.offsetX * speed.mountains + "px"
  // el.style.backgroundPositionY = -e.offsetY + "px"
})