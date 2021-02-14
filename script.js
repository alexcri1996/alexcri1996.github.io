const bodyEl = document.querySelector("body")
const grassEl = document.querySelector(".alt-container .grass")
const treesEl = document.querySelector(".alt-container .trees")
const mountainsEl = document.querySelector(".alt-container .mountains")
const speed = {
  grass: .5,
  trees: .3,
  mountains: .2,
}

bodyEl.addEventListener("mousemove", (e) => {
  grassEl.style.backgroundPositionX = +e.offsetX * speed.grass + "px"
  treesEl.style.backgroundPositionX = +e.offsetX * speed.trees + "px"
  mountainsEl.style.backgroundPositionX = +e.offsetX * speed.mountains + "px"
})

bodyEl.addEventListener("mousemove", (e) => {
  // grassEl.style.backgroundPositionY = -e.offsetY * speed.grass/75 + "px"
  treesEl.style.backgroundPositionY = +e.offsetY * speed.trees/50 + "px"
  mountainsEl.style.backgroundPositionY = +e.offsetY * speed.mountains/50 + "px"
})