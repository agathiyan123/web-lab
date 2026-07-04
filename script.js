const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
  if (document.body.dataset.theme === "dark") {
    document.body.removeAttribute("data-theme");
    button.textContent = "Dark Mode";
  } else {
    document.body.setAttribute("data-theme", "dark");
    button.textContent = "Light Mode";
  }
});
