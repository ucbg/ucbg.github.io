document.addEventListener("DOMContentLoaded", function () {
  const categoriesBtn = document.getElementById("categoriesBtn");
  const categoriesDropdown = document.getElementById("categoriesDropdown");

  // Toggle dropdown
  categoriesBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    categoriesBtn.classList.toggle("active");
    categoriesDropdown.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!categoriesDropdown.contains(e.target) && !categoriesBtn.contains(e.target)) {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });

  // Close dropdown when pressing Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });

  // Close dropdown when window is resized
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });
});
