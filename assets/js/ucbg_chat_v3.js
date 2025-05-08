document.addEventListener("DOMContentLoaded", function () {
  const chatButton = document.getElementById("chat-button");

  // Cookie işlemleri
  function setCookie(name, value, days = 365) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    return document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
  }

  // Varsayılan room name
  let roomName = getCookie("roomName") || "ChatRoom";

  // Konteyner div (hem input hem iframe burada)
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.zIndex = "1000";
  container.style.display = "none";

  // Room name input container (input ve reset butonunu burada yerleştireceğiz)
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.marginBottom = "5px";

  // Room name input
  const input = document.createElement("input");
  input.type = "text";
  input.value = roomName;
  input.placeholder = "Enter room name";
  input.style.width = "218px";
  input.style.padding = "6px";
  input.style.marginRight = "5px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "6px";
  input.style.boxSizing = "border-box";
  input.style.display = "block";
  input.style.textAlign = "center";

  // Reset button
  const resetButton = document.createElement("button");
  resetButton.textContent = "Default";
  resetButton.style.padding = "6px 12px";
  resetButton.style.border = "1px solid #ccc";
  resetButton.style.borderRadius = "6px";
  resetButton.style.backgroundColor = "#f8f8f8";
  resetButton.style.cursor = "pointer";

  // Reset button click event
  resetButton.addEventListener("click", () => {
    input.value = "ChatRoom"; // Reset the input value to DefaultChatRoom
    roomName = "ChatRoom"; // Set roomName to DefaultChatRoom
    iframe.src = `https://unblockedgame.unblockedgame.workers.dev/${roomName}`; // Update iframe src
    setCookie("roomName", roomName); // Update the cookie
  });

  // iframe
  const iframe = document.createElement("iframe");
  iframe.src = `https://unblockedgame.unblockedgame.workers.dev/${roomName}`;
  iframe.style.width = "300px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";
  iframe.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  iframe.style.backgroundColor = "white";
  iframe.style.display = "block";

  // Input değişince iframe ve cookie güncelle
  input.addEventListener("input", function () {
    const newRoom = input.value.trim();
    if (newRoom) {
      roomName = newRoom;
      iframe.src = `https://unblockedgame.unblockedgame.workers.dev/${roomName}`;
      setCookie("roomName", roomName);
    }
  });

  // Input ve reset button'ı konteynere ekleyelim
  inputContainer.appendChild(input);
  inputContainer.appendChild(resetButton);

  container.appendChild(inputContainer);
  container.appendChild(iframe);
  document.body.appendChild(container);

  // Butona tıklanınca iframe’i göster/gizle
  chatButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = container.style.display === "block";
    const rect = chatButton.getBoundingClientRect();
    container.style.right = `10px`;
    container.style.top = `${rect.bottom + window.scrollY}px`;
    container.style.display = isVisible ? "none" : "block";
  });

  // Dışarı tıklanınca kapat
  document.addEventListener("click", () => {
    container.style.display = "none";
  });

  // İçeride tıklanırsa kapanma
  container.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
