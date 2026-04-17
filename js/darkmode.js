const html = document.querySelector("html");
const btn = document.querySelector("#toggle-btn");

function toggleTheme() {
  console.log("toggleTheme");
  html.classList.toggle("dark");

  // if (btn. == "Dark") {
  //   btn.textContent = "Light";
  // } else {
  //   btn.textContent = "Dark";
  // }
}
btn.addEventListener("click", toggleTheme);
