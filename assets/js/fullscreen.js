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

const frame = document.getElementsByClassName("game-iframe")[0];
const server1Url = frame.getAttribute("data-src");
console.log("Iframe data-src:", server1Url);

const urlParts = server1Url.split("/");
const server1BaseUrl = urlParts.slice(0, 3).join("/");

// Slug çıkarma fonksiyonu
function getSlugFromUrl(url) {
  let parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1].replace(".html", "");
}

const gameSlug = getSlugFromUrl(server1Url);
console.log("Slug bulundu:", gameSlug);

// Varsayılan serverlar
let servers = [
  { name: "1", baseUrl: server1BaseUrl, direct: false },
  { name: "2", baseUrl: "https://unblockedgames67.gitlab.io", direct: false },
  { name: "3", baseUrl: "https://unblockedgames66.gitlab.io", direct: false },
  { name: "4", baseUrl: "https://ubgwtf.gitlab.io", direct: false },
];

// Server değiştirme fonksiyonu
function switchServer(index) {
  let server = servers[index];
  let newUrl = server.direct ? server.baseUrl : server.baseUrl + "/" + urlParts.slice(3).join("/");
  console.log("Switching to:", newUrl);
  frame.src = newUrl;

  document.querySelectorAll(".server-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

// Sunucu butonlarını oluştur
function createServerButtons() {
  let container = document.getElementById("server-buttons");
  container.innerHTML = "";

  servers.forEach((server, index) => {
    let button = document.createElement("button");
    button.innerText = server.name;
    button.classList.add("btn", "server-btn");

    if (server.direct) {
      button.classList.add("json-server"); // JSON serverlarını turuncu yap
    }

    button.onclick = () => switchServer(index);

    container.appendChild(button);
  });
}

// JSON'dan oyun bilgilerini yükle
async function loadGameData() {
  try {
    console.log("JSON yükleniyor...");
    const response = await fetch("/data-json/games.json?v=2.0.20");
    const games = await response.json();
    console.log("JSON yüklendi:", games.length, "oyun bulundu.");

    const game = games.find((g) => g.slug === gameSlug);
    console.log("Bulunan oyun:", game);

    let firstJsonIndex = null;

    if (game && game.servers) {
      let extraIndex = servers.length + 1;
      for (let key in game.servers) {
        let srvUrl = game.servers[key].replace(/\/$/, "");
        servers.push({ name: String(extraIndex), baseUrl: srvUrl, direct: true });
        console.log("Yeni server eklendi:", srvUrl);

        if (firstJsonIndex === null) firstJsonIndex = servers.length - 1; // ilk JSON server index'i
        extraIndex++;
      }
    }

    createServerButtons();

    // Eğer JSON server varsa onu seç
    if (firstJsonIndex !== null) {
      switchServer(firstJsonIndex);
    } else {
      // Aksi halde varsayılan 1 numara server aktif olsun
      switchServer(0);
    }
  } catch (err) {
    console.error("JSON yüklenemedi:", err);
    createServerButtons();
    switchServer(0);
  }
}

document.addEventListener("DOMContentLoaded", loadGameData);
