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
  updateFavoritesBadge();
}

function updateFavoritesBadge() {
  const badge = document.getElementById('favorites-badge');
  if (!badge) return;
  
  const favorites = getFavorites();
  const count = favorites.length;
  
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function getCurrentGamePath() {
  const url = window.location.pathname;
  const parts = url.split("/").filter(Boolean);
  return "/" + parts.slice(-2).join("/");
}

// Drawer ve listeyi dinamik oluştur
function createFavoritesDrawer() {
  let drawer = document.getElementById("favoritesDrawer");
  
  if (drawer) {
    return drawer;
  }

  drawer = document.createElement("div");
  drawer.id = "favoritesDrawer";
  drawer.className = "favorites-drawer hidden";

  const title = document.createElement("h3");
  title.className = "favorites-drawer-title";
  title.innerHTML = "💖 Favorites";

  const listContainer = document.createElement("div");
  listContainer.className = "favorites-list-container";

  const list = document.createElement("div");
  list.id = "favoritesList";
  list.className = "recent-games-grid";

  listContainer.appendChild(list);
  drawer.appendChild(title);
  drawer.appendChild(listContainer);
  document.body.appendChild(drawer);

  renderFavoritesList();
  
  return drawer;
}

// Drawer toggle
function toggleFavoritesDrawer(event) {
  if (event) {
    event.stopPropagation();
  }
  
  const drawer = createFavoritesDrawer();
  const isOpen = !drawer.classList.contains('hidden');
  
  if (isOpen) {
    drawer.classList.add('hidden');
  } else {
    // Close other drawers first
    if (typeof window.closeAllDrawers === 'function') {
      window.closeAllDrawers();
    }
    drawer.classList.remove('hidden');
    renderFavoritesList();
    updateFavoritesBadge();
  }
}

// Close drawer when clicking outside
document.addEventListener('click', (e) => {
  const drawer = document.getElementById('favoritesDrawer');
  const button = document.getElementById('favoriteDrawerBtn');
  
  if (drawer && !drawer.classList.contains('hidden') && 
      !drawer.contains(e.target) && !button.contains(e.target)) {
    drawer.classList.add('hidden');
  }
});

// Fetch kontrolü için değişken
let currentFetchController = null;

// Favori oyunları render et
function renderFavoritesList() {
  const list = document.getElementById("favoritesList");
  if (!list) return;

  // Önceki fetch işlemini iptal et
  if (currentFetchController) {
    currentFetchController.abort();
  }

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

  // Yeni fetch controller oluştur
  currentFetchController = new AbortController();

  // Oyun verilerini yükle ve kartları oluştur
  fetch("/data-json/games.json", { signal: currentFetchController.signal })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((games) => {
      // Liste tekrar temizlenmişse işlemi durdur
      if (!list.parentNode) return;
      
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
      currentFetchController = null;
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        // Fetch iptal edildi, sessizce devam et
        return;
      }
      console.error("Oyun verileri yüklenirken hata oluştu:", error);
      // JSON yüklenemezse fallback olarak basit listeyi göster
      favorites.forEach((path) => {
        createFallbackCard(path, list);
      });
      currentFetchController = null;
    });
}

// Oyun kartı oluştur
function createGameCard(game, container) {
  const card = document.createElement("div");
  card.className = "recent-game-card";

  card.innerHTML = `
    <a href="${game.url}" class="recent-game-link">
      <div class="recent-game-image-container">
        <img src="${game.image}" alt="${game.title}" class="recent-game-image" 
             onerror="this.style.display='none'; this.parentNode.innerHTML='<div class=\\'recent-game-placeholder\\'>🎮</div>'">
      </div>
      <div class="recent-game-info">
        <div class="recent-game-title">${game.title}</div>
      </div>
    </a>
  `;

  container.appendChild(card);
}

// Fallback kart oluştur (oyun verisi bulunamazsa)
function createFallbackCard(path, container) {
  const card = document.createElement("div");
  card.className = "recent-game-card";

  const gameName = path.split("/").pop().replace(".html", "").replace(/-/g, " ");

  card.innerHTML = `
    <a href="${path}" class="recent-game-link">
      <div class="recent-game-image-container">
        <div class="recent-game-placeholder">🎮</div>
      </div>
      <div class="recent-game-info">
        <div class="recent-game-title">${gameName}</div>
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
  updateFavoritesBadge(); // Badge'i güncelle
  
  // Güvenlik kontrolü
  if (typeof crayzgames === "function") {
    setTimeout(() => crayzgames(), Math.random() * 2000);
  }
});
