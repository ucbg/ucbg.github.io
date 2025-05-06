document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");

  // 1. Ana sayfaya temayı uygula
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);
  updateThemeEmoji(savedTheme);

  // 2. iframe teması için her saniye kontrol sistemi
  let iframeSetupAttempts = 0;
  const maxAttempts = 20;
  const iframeCheckInterval = setInterval(() => {
    const iframe = document.getElementById("cmtx_iframe");
    if (iframe) {
      // iframe bulundu, yüklenince tema gönder
      iframe.addEventListener("load", () => {
        sendThemeToIframe();
      });

      // Eğer iframe zaten yüklenmişse doğrudan tema gönder
      if (iframe.contentWindow) {
        sendThemeToIframe();
      }

      clearInterval(iframeCheckInterval);
    }

    iframeSetupAttempts++;
    if (iframeSetupAttempts >= maxAttempts) {
      clearInterval(iframeCheckInterval);
    }
  }, 1000);

  // 3. Tema değiştiğinde hem ana sayfaya hem iframe'e uygula
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeEmoji(newTheme);

    sendThemeToIframe();
  });

  // Tema emoji güncelleme
  function updateThemeEmoji(theme) {
    themeToggle.innerHTML = theme === "light" ? '<span class="sun-icon">☀️</span>' : '<span class="moon-icon">🌙</span>';
  }

  // iframe'e tema gönderme fonksiyonu
  function sendThemeToIframe() {
    const iframe = document.getElementById("cmtx_iframe");
    if (iframe && iframe.contentWindow) {
      const theme = localStorage.getItem("theme") || "dark";
      iframe.contentWindow.postMessage({ theme }, "https://comment.silecekci.com");
    }
  }
});

(function () {
  // Eğer classroom6.pages.dev üzerindeysek
  if (window.location.hostname === "classroom6.pages.dev") {
    // Bilgilendirici mesaj kutusunu oluştur
    const messageBox = document.createElement("div");
    messageBox.innerText = "⚠️ Copycat site detected. You will be redirected to the official page: ucbg.github.io";

    // Stilleri ayarla
    Object.assign(messageBox.style, {
      position: "fixed",
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#fff8e1",
      color: "#444",
      padding: "15px 25px",
      border: "1px solid #f0c36d",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      zIndex: "9999",
    });

    document.body.appendChild(messageBox);

    // 30 saniye sonra yönlendir
    setTimeout(function () {
      const path = window.location.pathname + window.location.search + window.location.hash;
      const newUrl = "https://ucbg.github.io" + path;
      window.location.href = newUrl;
    }, 30000); // 30 seconds
  }
})();
