document.addEventListener("DOMContentLoaded", function () {
  const chatButton = document.getElementById("chat-button");

  // Dinamik iframe oluştur
  const iframe = document.createElement("iframe");
  iframe.src = "https://unblockedgame.unblockedgame.workers.dev/eUTaRMpVfrqJQ0iJfc_oo";
  iframe.style.position = "absolute";
  iframe.style.width = "250px";
  iframe.style.height = "400px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";
  iframe.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  iframe.style.zIndex = "1000";
  iframe.style.display = "none";
  iframe.style.backgroundColor = "white"; // Arka planı beyaz yap

  document.body.appendChild(iframe);

  // Butona tıklanınca iframe’i göster/gizle
  chatButton.addEventListener("click", (e) => {
    e.stopPropagation();

    const isVisible = iframe.style.display === "block";
    const rect = chatButton.getBoundingClientRect();
    iframe.style.left = `${rect.left + window.scrollX}px`;
    iframe.style.top = `${rect.bottom + window.scrollY}px`;

    iframe.style.display = isVisible ? "none" : "block";
  });

  // Dışarı tıklanınca iframe’i gizle
  document.addEventListener("click", () => {
    iframe.style.display = "none";
  });

  // iframe'e tıklanırsa kapanmasın
  iframe.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
