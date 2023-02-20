window.addEventListener("load", start);

function start() {
  document
    .querySelector("#orange_container")
    .removeEventListener("click", jumpOrange);
  document
    .querySelector("#orange_container")
    .addEventListener("click", jumpOrange);
}

function jumpOrange() {
  console.log("orange square should be jumping infinitely...");
  document.querySelector("#orange_container").classList.add("jump");
}
