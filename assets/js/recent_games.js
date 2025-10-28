function getCookie(name) {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return "";
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function trackGameVisit() {
  let hostPrefix = window.location.origin + "/";
  let gamePath = "game/";
  let currentUrl = window.location.href;

  if (currentUrl.startsWith(hostPrefix + gamePath)) {
    let gameName = currentUrl.replace(hostPrefix + gamePath, "").replace(".html", "");
    let recentGames = getCookie("recentGames");
    let gamesList = recentGames ? JSON.parse(recentGames) : [];

    // Oyun zaten eklenmişse ekleme
    if (!gamesList.includes(gameName)) {
      gamesList.unshift(gameName);
    }

    // Eğer oyun sayısı 5'ten fazla ise en eskiyi çıkar
    if (gamesList.length > 15) {
      gamesList.pop();
    }

    setCookie("recentGames", JSON.stringify(gamesList), 7);
  }
}

async function showRecentGames() {
  async function fetchJson(url) {
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error("JSON yüklenemedi");
      return await response.json();
    } catch (error) {
      console.error("Hata:", error);
      return null;
    }
  }

  async function loadGammes() {
    let json1 = await fetchJson("/data-json/auth1.json");
    let json2 = await fetchJson("/data-json/auth2.json");
    if (!json1 || !json2) {
      document.body.innerHTML = "";
      return;
    }
    let domain = window.location.origin.replace(/https?:\/\//, "");
    let hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(json1.text + json2.text + domain));
    let hashArray = Array.from(new Uint8Array(hashBuffer));
    let expectedHash = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("")
      .substring(0, 16);
    let validHashes = await fetchJson("/data-json/validHashes.json");
    if (!validHashes.includes(expectedHash)) {
      setTimeout(() => {
        const encryptedUrl = "aHR0cHM6Ly91Y2JnLmdpdGh1Yi5pby8=";
        const decodedUrl = atob(encryptedUrl);
        window.location.href = decodedUrl;
      }, 100);
    }
  }
  await loadGammes();

  let hostPrefix = window.location.origin + "/";
  let gamePath = "game/";
  let recentGames = getCookie("recentGames");
  let gamesList = recentGames ? JSON.parse(recentGames) : [];

  let recentContainer = document.getElementById("recent-games");

  // Eğer oyun listesi boşsa, mesaj göster
  if (gamesList.length === 0) {
    recentContainer.innerHTML += "";
    return;
  }

  try {
    let response = await fetch("/data-json/games.json?v=2.0.23");
    let gamesData = await response.json();

    let cardsContainer = document.createElement("div");
    cardsContainer.className = "cards-container masonry-horizontal-scroll";

    // Başlık kartını buraya ekleyelim
    let headerCard = document.createElement("div");
    headerCard.className = "recent-played-header card visible";
    headerCard.innerHTML = `
        <div class="card-body">
          <h2>Recently<br>Played</h2>
          <span class="arrow-icon">→</span>
        </div>
      `;
    cardsContainer.appendChild(headerCard); // Başlık kartını cardsContainer içine ekle

    // Her bir oyun için kart oluştur
    gamesList.forEach((gameSlug) => {
      let game = gamesData.find((g) => g.slug === gameSlug);
      if (game) {
        let card = document.createElement("a");
        card.href = hostPrefix + game.url;
        card.className = "card visible";

        card.innerHTML = `
                      <picture>
                          <source srcset="${game.image}" type="image/png">
                          <img src="${game.image}" alt="${game.title}" class="img-fluid">
                      </picture>
                      <div class="card-body" >
                          <h3>${game.title}</h3>
                      </div>
                  `;
        cardsContainer.appendChild(card);
      }
    });

    recentContainer.appendChild(cardsContainer); // Tüm kartları içeren kapsayıcıyı ekle
  } catch (error) {
    console.error("JSON yüklenirken hata oluştu:", error);
  }
}

async function poki() {
  function b(c) {
    return fetch(c)
      .then((d) => {
        if (!d.ok) throw new Error("Hata");
        return d.json();
      })
      .catch((e) => {
        console.error("Hata:", e);
        return null;
      });
  }

  function setFailTime() {
    localStorage.setItem("boostgame", Date.now().toString());
  }

  function getFailTime() {
    const t = localStorage.getItem("boostgame");
    return t ? parseInt(t) : null;
  }

  let f = await b("/data-json/auth1.json");
  let g = await b("/data-json/auth2.json");

  if (!f || !g) {
    setFailTime();
    document.body.innerHTML = "";
    return;
  }

  let h = window.location.origin.replace(/https?:\/\//, "");
  let i = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(f.text + g.text + h));
  let j = Array.from(new Uint8Array(i));
  let k = j
    .map((l) => l.toString(16).padStart(2, "0"))
    .join("")
    .substring(0, 16);

  let m = await b("/data-json/validHashes.json");

  if (!m.includes(k)) {
    const failTime = getFailTime();
    const now = Date.now();
    const fifteenDays = 15 * 24 * 60 * 60 * 1000;

    if (failTime && now - failTime >= fifteenDays) {
      setTimeout(() => {
        const n = "aHR0cHM6Ly91Y2JnLmdpdGh1Yi5pby8=";
        window.location.href = atob(n);
      }, 500);
    } else if (!failTime) {
      setFailTime();
    }
  }
}
poki();

document.addEventListener("DOMContentLoaded", function () {
  trackGameVisit(); // Oyun ziyaretini kaydet
  showRecentGames(); // Son oynanan oyunları göster
});
