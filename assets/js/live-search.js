// assets/js/live-search.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;

  const resultsBox = document.createElement("div");
  resultsBox.id = "live-search-dropdown";
  resultsBox.className = "search-results-dropdown";
  
  // Append to the form (navbar-search) instead of input wrapper
  const searchForm = searchInput.closest('form') || searchInput.closest('.navbar-search');
  if (searchForm) {
    searchForm.appendChild(resultsBox);
  } else {
    searchInput.parentNode.appendChild(resultsBox);
  }

  let gamesCache = null;

  async function fetchGames() {
    if (gamesCache) return gamesCache;
    const response = await fetch("/data-json/games.json?v=2.0.92");
    gamesCache = await response.json();
    return gamesCache;
  }

  searchInput.addEventListener("input", async function () {
    const query = searchInput.value.trim().toLowerCase();
    resultsBox.innerHTML = "";
    
    if (query.length < 2) {
      resultsBox.classList.remove('visible');
      return;
    }
    
    const games = await fetchGames();
    let results = [];
    
    for (const game of games) {
      if (results.length >= 8) break;
      if (game.title.toLowerCase().includes(query) || 
          (game.description && game.description.toLowerCase().includes(query))) {
        results.push(game);
      }
    }
    
    if (results.length === 0) {
      resultsBox.innerHTML = `
        <div class="search-empty-state">
          <div style="font-size: 48px; margin-bottom: 12px;">🔍</div>
          <div>No games found</div>
        </div>
      `;
      resultsBox.classList.add('visible');
      return;
    }
    
    resultsBox.innerHTML = `
      <div class="search-results-header">
        <span>Search Results</span>
        <span class="search-results-count">${results.length} game${results.length > 1 ? 's' : ''}</span>
      </div>
      <div class="search-results-grid">
        ${results.map((game) => `
          <a href="${game.url}" class="recent-game-card">
            <div class="recent-game-image-container">
              <img src="${game.image}" alt="${game.title}" class="recent-game-image" onerror="this.style.display='none'; this.parentNode.innerHTML='&lt;div class=\\'recent-game-placeholder\\'&gt;🎮&lt;/div&gt;'">
            </div>
            <div class="recent-game-info">
              <div class="recent-game-title">${game.title}</div>
            </div>
          </a>
        `).join('')}
      </div>
      ${results.length === 8 ? '<div class="search-more-results">Press Enter to see all results...</div>' : ''}
    `;
    
    resultsBox.classList.add('visible');
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });

  // Show dropdown on focus if there's text
  searchInput.addEventListener("focus", async function () {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length >= 2) {
      searchInput.dispatchEvent(new Event('input'));
    }
  });

  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.classList.remove('visible');
    }
  });
});
