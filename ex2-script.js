window.addEventListener("load", start);

function start() {
  document.querySelector("#blue_container").addEventListener("click", fallOver);
}

function fallOver() {
  console.log("blue falls over...");
  document
    .querySelector("#blue_container")
    .removeEventListener("click", fallOver);
  document.querySelector("#blue_container").classList.add("fallover");
}
