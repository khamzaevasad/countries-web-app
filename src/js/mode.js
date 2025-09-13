const html = document.querySelector("html");
const themeToggler = document.getElementById("theme-toggler");

let themeFromLocal = localStorage.getItem("theme");

if (themeFromLocal) {
  html.dataset.theme = html.dataset.theme = themeFromLocal;
  themeToggler.checked = themeFromLocal == "dark";
} else {
  html.dataset.them = "light";
  themeToggler.checked = false;
}

themeToggler.addEventListener("change", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dark" : "light";
  localStorage.setItem("theme", html.dataset.theme);
});
