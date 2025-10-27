// assets/js/live-search.js

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;

  const resultsBox = document.createElement("div");
  resultsBox.id = "live-search-dropdown";
  resultsBox.style.position = "absolute";
  resultsBox.style.background = "#222";
  resultsBox.style.width = "100%";
  resultsBox.style.border = "1px solid #444";
  resultsBox.style.display = "none";
  resultsBox.style.maxHeight = "300px";
  resultsBox.style.overflowY = "auto";
  resultsBox.style.color = "#fff";
  resultsBox.style.borderRadius = "8px";
  resultsBox.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  resultsBox.style.top = "50px";
  resultsBox.style.zIndex = "9999";
  searchInput.parentNode.appendChild(resultsBox);

  let gamesCache = null;

  async function fetchGames() {
    if (gamesCache) return gamesCache;
    const response = await fetch("/data-json/games.json?v=2.0.10");
    gamesCache = await response.json();
    return gamesCache;
  }

  searchInput.addEventListener("input", async function () {
    const query = searchInput.value.trim().toLowerCase();
    resultsBox.innerHTML = "";
    if (query.length < 3) {
      resultsBox.style.display = "none";
      return;
    }
    const games = await fetchGames();
    let results = [];
    for (const game of games) {
      if (results.length >= 5) break;
      if (game.title.toLowerCase().includes(query)) {
        results.push(game);
      }
    }
    if (results.length === 0) {
      resultsBox.style.display = "none";
      return;
    }
    resultsBox.innerHTML = results
      .map((game) => `<a href="${game.url}" style="display:block;padding:8px 12px;color:#fff;text-decoration:none;">${game.title}</a>`)
      .join("");
    if (results.length === 5) {
      resultsBox.innerHTML += `<div style="padding:8px 12px;text-align:center;color:#aaa;">...</div>`;
    }
    resultsBox.style.display = "block";
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query.length >= 3) {
        window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });

  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.style.display = "none";
    }
  });
});
