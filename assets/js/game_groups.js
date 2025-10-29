document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("games-container");
  const searchError = document.getElementById("searchError");

  // URL'den key parametresini al
  const urlParams = new URLSearchParams(window.location.search);
  const groupKey = urlParams.get("key");

  if (!groupKey) {
    searchError.style.display = "block";
    searchError.textContent = "No group specified!";
    return;
  }

  try {
    // Oyunları JSON'dan çek
    const response = await fetch("/data-json/games.json?v=2.0.32");
    const games = await response.json();

    let found = false;
    let cnt = 0;

    games.forEach((game) => {
      const groups = game.groups ? game.groups.split(",").map((g) => g.trim()) : [];
      const categories = game.main_categories ? game.main_categories.split(",").map((c) => c.trim()) : [];

      if ((groups.includes(groupKey) || categories.includes(groupKey)) && cnt < 50) {
        cnt++;
        found = true;

        const card = document.createElement("a");
        card.href = game.url;
        card.className = "card game-item visible";
        card.style.display = "block";
        card.innerHTML = `
            <picture>
              <source
                data-srcset="${game.image}"
                type="image/png"
                class="img-fluid"
                srcset="${game.image}"
              />
              <img
                data-src="${game.image}"
                alt="${game.title}"
                class="lazyload img-fluid"
                width="500"
                height="500"
              />
            </picture>
            <div class="card-body">
              <h3>${game.title}</h3>
            </div>
          `;
        container.appendChild(card);
      }
    });

    if (!found) {
      searchError.style.display = "block";
    }
  } catch (error) {
    searchError.style.display = "block";
    searchError.textContent = "Error loading games!";
  }
});
