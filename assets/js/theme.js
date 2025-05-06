document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");

  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateThemeEmoji(savedTheme);

  // Her saniye iframe var mı diye kontrol et, varsa load event ekle
  let iframeSetupAttempts = 0;
  const maxIframeSetupAttempts = 20;
  const iframeSetupInterval = setInterval(() => {
    const iframe = document.getElementById("cmtx_iframe");
    if (iframe) {
      // Artık iframe DOM'da, load eventi ekleyebiliriz
      iframe.addEventListener("load", () => {
        sendThemeToIframe(); // iframe yüklendiğinde temayı gönder
      });

      // Eğer iframe zaten yüklenmişse (readyState kontrolü ile veya başka yöntemle) yine gönder
      if (iframe.contentWindow) {
        sendThemeToIframe();
      }

      clearInterval(iframeSetupInterval); // artık bulduk, durdurabiliriz
    }

    iframeSetupAttempts++;
    if (iframeSetupAttempts >= maxIframeSetupAttempts) {
      clearInterval(iframeSetupInterval); // çok denedik, durdur
    }
  }, 1000);

  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeEmoji(newTheme);
    sendThemeToIframe(); // değişiklikte hemen gönder
  });

  function updateThemeEmoji(theme) {
    themeToggle.innerHTML = theme === "light" ? '<span class="sun-icon">☀️</span>' : '<span class="moon-icon">🌙</span>';
  }

  function sendThemeToIframe() {
    const iframe = document.getElementById("cmtx_iframe");
    if (iframe && iframe.contentWindow) {
      const theme = localStorage.getItem("theme") || "dark";
      iframe.contentWindow.postMessage({ theme }, "https://comment.silecekci.com");
    }
  }
});
