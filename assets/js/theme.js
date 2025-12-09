document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;

  // Always set theme to dark
  htmlElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
});
