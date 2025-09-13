const overlay = document.getElementById("overlay");
// loaderToggler

export function loader(toggle) {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}
