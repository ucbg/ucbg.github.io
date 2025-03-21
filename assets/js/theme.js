document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");

  // LocalStorage'dan tema tercihini al, varsayılan olarak 'dark' kullan
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);

  // Emoji'yi güncelle
  updateThemeEmoji(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Yeni temayı uygula ve localStorage'a kaydet
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateThemeEmoji(newTheme);
    sendThemeToIframe();
  });

  function updateThemeEmoji(theme) {
    themeToggle.innerHTML = theme === "light" ? '<span class="sun-icon">☀️</span>' : '<span class="moon-icon">🌙</span>';
  }

  function sendThemeToIframe() {
    let iframe = document.getElementById("cmtx_iframe");
    if (iframe && iframe.contentWindow) {
      let theme = localStorage.getItem("theme") || "light"; // Varsayılan olarak 'light' seç
      iframe.contentWindow.postMessage({ theme: theme }, "https://comment.silecekci.com");
    }
  }
});
