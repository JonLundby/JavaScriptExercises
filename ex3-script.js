window.addEventListener("load", start);

function moveOrange() {
  document.querySelector("#orange_container").classList.add("move");
}

function freezeHopOrange() {
  console.log("stopping and jumping...");
  document
    .querySelector("#orange_container")
    .removeEventListener("click", freezeHopOrange);
  document.querySelector("#orange_container").classList.add("paused");
  document.querySelector("#orange_sprite").classList.add("jump");
}

function start() {
  moveOrange();
  document
    .querySelector("#orange_container")
    .addEventListener("click", freezeHopOrange);
}
