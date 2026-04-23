const html = document.querySelector("html");
const btn = document.querySelector("#toggle-btn");

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    btn.innerHTML = '<img src="imgs/light_mode_sun.png" alt="Light">';
  } else {
    btn.innerHTML = '<img src="imgs/dark_mode_moon.png" alt="Dark">';
  }
}
btn.addEventListener("click", toggleTheme);
