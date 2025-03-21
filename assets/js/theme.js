document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");

  // LocalStorage'dan tema tercihini al, varsayılan olarak 'dark' kullan
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);

  // Emoji'yi güncelle
  updateThemeEmoji(savedTheme);

  // Iframe için yeni kontrol mekanizması
  let iframeCheckAttempts = 0;
  const maxAttempts = 20; // Maksimum 20 deneme (20 saniye)

  const checkAndSendTheme = () => {
    const iframe = document.getElementById("cmtx_iframe");
    if (iframe && iframe.contentWindow) {
      const theme = localStorage.getItem("theme") || "dark";
      iframe.contentWindow.postMessage({ theme: theme }, "https://comment.silecekci.com");
      return true; // Başarılı
    }
    return false; // Başarısız
  };

  const initIframeTheme = () => {
    const intervalId = setInterval(() => {
      if (checkAndSendTheme() || iframeCheckAttempts >= maxAttempts) {
        clearInterval(intervalId);
      }
      iframeCheckAttempts++;
    }, 1000);
  };

  initIframeTheme();

  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateThemeEmoji(newTheme);
    checkAndSendTheme(); // Tema değiştiğinde direkt kontrol et
  });

  function updateThemeEmoji(theme) {
    themeToggle.innerHTML = theme === "light" ? '<span class="sun-icon">☀️</span>' : '<span class="moon-icon">🌙</span>';
  }
});
