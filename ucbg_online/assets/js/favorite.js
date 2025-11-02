// Cookie yönetimi
function getFavorites() {
  const cookie = document.cookie.split("; ").find((row) => row.startsWith("favorites="));
  if (!cookie) return [];
  try {
    return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  } catch {
    return [];
  }
}

function saveFavorites(favorites) {
  document.cookie = `favorites=${encodeURIComponent(JSON.stringify(favorites))}; path=/; max-age=31536000`;
}

function getCurrentGamePath() {
  const url = window.location.pathname;
  const parts = url.split("/").filter(Boolean);
  return "/" + parts.slice(-2).join("/");
}

// Drawer ve listeyi dinamik oluştur
function createFavoritesDrawer() {
  if (document.getElementById("favoritesDrawer")) return;

  const drawer = document.createElement("div");
  drawer.id = "favoritesDrawer";
  drawer.className = "favorites-drawer";
  drawer.style.cssText = `
        position: fixed;
        top: 80px;
        bottom: 0px;
        right: 0px;
        width: 350px;
        background-color: #20232c;
        box-shadow: rgba(0, 0, 0, 0.4) -4px 0px 16px;
        border-radius: 15px 0px 0px 15px;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0;
      `;

  const title = document.createElement("h3");
  title.className = "favorites-drawer-title";
  title.textContent = "Favorites";

  const listContainer = document.createElement("div");
  listContainer.className = "favorites-list-container";
  listContainer.style.cssText = "flex: 1; overflow-y: auto; padding: 0 15px 15px 15px;";

  const list = document.createElement("div");
  list.id = "favoritesList";
  list.className = "favorites-masonry-grid";

  listContainer.appendChild(list);
  drawer.appendChild(title);
  drawer.appendChild(listContainer);
  document.body.appendChild(drawer);

  renderFavoritesList();
}

// Drawer toggle
function toggleFavoritesDrawer() {
  createFavoritesDrawer();
  const drawer = document.getElementById("favoritesDrawer");
  const isOpen = drawer.style.transform === "translateX(0px)";
  drawer.style.transform = isOpen ? "translateX(100%)" : "translateX(0px)";
}

// Favori oyunları render et
function renderFavoritesList() {
  const list = document.getElementById("favoritesList");
  if (!list) return;

  list.innerHTML = "";
  const favorites = getFavorites();

  if (favorites.length === 0) {
    list.innerHTML = `
          <div class="favorites-empty-state">
            
            <div style="color: #a0aec0; font-size: 14px;">-</div>
          </div>
        `;
    return;
  }

  // Oyun verilerini yükle ve kartları oluştur
  fetch("/data-json/games.json")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((games) => {
      favorites.forEach((favoritePath) => {
        // URL'den slug'ı çıkar
        const slug = favoritePath.split("/").pop().replace(".html", "");
        const game = games.find((g) => g.slug === slug);

        if (game) {
          createGameCard(game, list);
        } else {
          // Eğer oyun verisi bulunamazsa, sadece link ile basit bir kart oluştur
          createFallbackCard(favoritePath, list);
        }
      });
    })
    .catch((error) => {
      console.error("Oyun verileri yüklenirken hata oluştu:", error);
      // JSON yüklenemezse fallback olarak basit listeyi göster
      favorites.forEach((path) => {
        createFallbackCard(path, list);
      });
    });
}

// Oyun kartı oluştur
function createGameCard(game, container) {
  const card = document.createElement("div");
  card.className = "favourite-game-card";

  card.innerHTML = `
        <a href="${game.url}" class="favourite-game-link">
          <div class="favourite-game-image-container">
            <img src="${game.image}" alt="${game.title}" class="favourite-game-image" 
                 onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=\"favourite-game-placeholder\">🎮</div>
          </div>
          <div class="favourite-game-info">
            <div class="favourite-game-title">${game.title}</div>
          </div>
        </a>
      `;

  container.appendChild(card);
}

// Fallback kart oluştur (oyun verisi bulunamazsa)
function createFallbackCard(path, container) {
  const card = document.createElement("div");
  card.className = "favourite-game-card";

  const gameName = path.split("/").pop().replace(".html", "").replace(/-/g, " ");

  card.innerHTML = `
        <a href="${path}" class="favourite-game-link">
          <div class="favourite-game-image-container">
            <div class="favourite-game-placeholder">🎮</div>
          </div>
          <div class="favourite-game-info">
            <div class="favourite-game-title">${gameName}</div>
          </div>
        </a>
      `;

  container.appendChild(card);
}

// Favori ikonlarını güncelle
function updateFavoriteIcons(isFavorite) {
  const navIcon = document.getElementById("favoriteNavIcon");
  const pageIcon = document.getElementById("favoriteIcon");

  if (navIcon) navIcon.setAttribute("fill", isFavorite ? "hotpink" : "gray");
  if (pageIcon) pageIcon.setAttribute("fill", isFavorite ? "hotpink" : "gray");
}

// Favori toggle işlemi
function toggleFavorite() {
  const gamePath = getCurrentGamePath();
  let favorites = getFavorites();
  const index = favorites.indexOf(gamePath);

  if (index === -1) {
    favorites.push(gamePath);
    updateFavoriteIcons(true);
  } else {
    favorites.splice(index, 1);
    updateFavoriteIcons(false);
  }

  saveFavorites(favorites);
  renderFavoritesList(); // Drawer listesini güncelle
}

// Sayfa yüklendiğinde
document.addEventListener("DOMContentLoaded", () => {
  const gamePath = getCurrentGamePath();
  const favorites = getFavorites();
  updateFavoriteIcons(favorites.includes(gamePath));
  // createFavoritesDrawer(); // Bu satır kaldırıldı - drawer sadece toggle ile açılacak
});
