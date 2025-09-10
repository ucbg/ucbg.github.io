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

  let roomName = getCookie("roomName") || "ChatRoom";

  // Drawer container
  const drawer = document.createElement("div");
  drawer.style.position = "fixed";
  drawer.style.top = "80px";
  drawer.style.bottom = "0px";
  drawer.style.right = "0";
  drawer.style.width = "320px";
  drawer.style.backgroundColor = "#fff"; // beyaz tema
  drawer.style.boxShadow = "-4px 0 12px rgba(0,0,0,0.2)";
  drawer.style.borderRadius = "10px 0 0 10px";
  drawer.style.transform = "translateX(100%)";
  drawer.style.transition = "transform 0.3s ease-in-out";
  drawer.style.zIndex = "1000";
  drawer.style.padding = "10px";
  drawer.style.boxSizing = "border-box";
  drawer.style.color = "#000"; // yazılar siyah
  drawer.style.display = "flex";
  drawer.style.flexDirection = "column";

  // Room input ve reset
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.alignItems = "center";
  inputContainer.style.marginBottom = "10px";

  const input = document.createElement("input");
  input.type = "text";
  input.value = roomName;
  input.placeholder = "Enter room name";
  input.style.flex = "1";
  input.style.padding = "6px";
  input.style.marginRight = "5px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "6px";
  input.style.backgroundColor = "#fff";
  input.style.color = "#000";

  const resetButton = document.createElement("button");
  resetButton.textContent = "Default";
  resetButton.style.padding = "6px 12px";
  resetButton.style.border = "1px solid #ccc";
  resetButton.style.borderRadius = "6px";
  resetButton.style.cursor = "pointer";
  resetButton.style.backgroundColor = "#f8f8f8";
  resetButton.style.color = "#000";

  resetButton.addEventListener("mouseover", () => {
    resetButton.style.backgroundColor = "#e0e0e0";
  });
  resetButton.addEventListener("mouseout", () => {
    resetButton.style.backgroundColor = "#f8f8f8";
  });

  resetButton.addEventListener("click", () => {
    input.value = "ChatRoom";
    roomName = "ChatRoom";
    iframe.src = `https://unblockedgame.unblockedgame.workers.dev/${roomName}`;
    setCookie("roomName", roomName);
  });

  input.addEventListener("input", () => {
    const newRoom = input.value.trim();
    if (newRoom) {
      roomName = newRoom;
      iframe.src = `https://unblockedgame.unblockedgame.workers.dev/${roomName}`;
      setCookie("roomName", roomName);
    }
  });

  inputContainer.appendChild(input);
  inputContainer.appendChild(resetButton);
  drawer.appendChild(inputContainer);

  // iframe
  const iframe = document.createElement("iframe");
  iframe.src = `https://unblockedgame.unblockedgame.workers.dev/${roomName}`;
  iframe.style.width = "100%";
  iframe.style.flex = "1";
  iframe.style.border = "none";
  iframe.style.backgroundColor = "#fff";
  drawer.appendChild(iframe);

  document.body.appendChild(drawer);

  // Buton tıklayınca drawer aç/kapa
  let isOpen = false;
  chatButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    drawer.style.transform = isOpen ? "translateX(0)" : "translateX(100%)";
  });

  // Dış tıklama ile drawer kapanır
  document.addEventListener("click", () => {
    if (isOpen) {
      isOpen = false;
      drawer.style.transform = "translateX(100%)";
    }
  });

  drawer.addEventListener("click", (e) => e.stopPropagation());
});
