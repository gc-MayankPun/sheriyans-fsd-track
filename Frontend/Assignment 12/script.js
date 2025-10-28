const body = document.body;
const themeKey = "theme";
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  body.classList.remove("dark", "light");
  body.classList.add(theme);
}

function getPreferredTheme() {
  return darkQuery.matches ? "dark" : "light";
}

function setTheme(theme) {
  applyTheme(theme);
  localStorage.setItem(themeKey, theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(themeKey);
  applyTheme(savedTheme || getPreferredTheme());
}

initTheme();

// Change theme automatically when system appearance changes
darkQuery.addEventListener("change", () => {
  if (!localStorage.getItem(themeKey)) {
    applyTheme(getPreferredTheme());
  }
});

// Toggle theme manually
document.querySelector("button").addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
}); 
