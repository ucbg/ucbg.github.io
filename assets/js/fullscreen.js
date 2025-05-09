// Oyun iframe'ini seç
var elem = document.getElementsByClassName("game-iframe")[0];

// Fullscreen açma fonksiyonu
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen(); // Safari
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen(); // IE11
  }
}

// Sunucu 1'den URL al
const frame = document.getElementsByClassName("game-iframe")[0];
const server1Url = frame.getAttribute("data-src");
const urlParts = server1Url.split("/");
const server1BaseUrl = urlParts.slice(0, 3).join("/");

// Dinamik olarak eklenecek serverlar
const extraServers = [
  { name: "2", baseUrl: "https://unblockedgames67.gitlab.io" },
  { name: "3", baseUrl: "https://unblockedgames66.gitlab.io" },
  { name: "4", baseUrl: "https://ubgwtf.gitlab.io" },
];

// Sunucu listesini oluştur
const servers = [{ name: "1", baseUrl: server1BaseUrl }, ...extraServers];

// Server değiştirme fonksiyonu
function switchServer(index) {
  let newUrl = servers[index].baseUrl + "/" + urlParts.slice(3).join("/");

  frame.src = newUrl;

  // Butonları güncelle
  document.querySelectorAll(".server-btn").forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function createServerButtons() {
  let container = document.getElementById("server-buttons");
  container.innerHTML = ""; // İçeriği temizle

  servers.forEach((server, index) => {
    let button = document.createElement("button");
    button.innerText = server.name; // "Server" yerine rakam kullanılıyor
    button.classList.add("btn", "server-btn");
    button.onclick = () => switchServer(index);

    if (index === 0) {
      button.classList.add("active");
    }

    container.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", createServerButtons);
