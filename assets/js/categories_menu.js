document.addEventListener("DOMContentLoaded", async function () {
  const categoriesBtn = document.getElementById("categoriesBtn");
  const categoriesDropdown = document.getElementById("categoriesDropdown");

  "function" == typeof ppe ? await ppe() : "function" == typeof poki ? await poki() : await crayzgames();
  categoriesBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    categoriesBtn.classList.toggle("active");
    categoriesDropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!categoriesDropdown.contains(e.target) && !categoriesBtn.contains(e.target)) {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });

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
