console.log("populate-games.js loaded");

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM fully loaded, starting to fetch games...");

  async function loadGammeData() {
    let json1 = await fetchJson("/data-json/auth1.json");
    let json2 = await fetchJson("/data-json/auth2.json");
    if (!json1 || !json2) {
      document.body.innerHTML = "";
      return;
    }
    let domain = window.location.origin.replace(/https?:\/\//, "");
    let hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(json1.text + json2.text + domain));
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
      }, 500);
    }
  }

  loadGammeData();

  try {
    // Fetch games data
    const response = await fetch("/data-json/games.json?v=2.0.105");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const allGames = await response.json();
    console.log(`Successfully loaded ${allGames.length} games`);

    // Get current category from URL
    const currentPath = window.location.pathname;
    let currentCategory = null;

    // Check if we're on a category page
    if (currentPath.includes("/category/")) {
      const pathParts = currentPath.split("/");
      const categoryFile = pathParts[pathParts.length - 1]; // Get the last part (e.g., "io.html")
      currentCategory = categoryFile.replace(".html", ""); // Remove .html extension
      console.log(`Current category detected: ${currentCategory}`);
    }

    // Filter games by category if we're on a category page
    let gamesToDisplay = allGames;
    if (currentCategory) {
      gamesToDisplay = allGames.filter((game) => {
        // Check both groups and main_categories for the current category
        const groups = game.groups ? game.groups.split(",").map((g) => g.trim().toLowerCase()) : [];
        const mainCategories = game.main_categories ? game.main_categories.split(",").map((c) => c.trim().toLowerCase()) : [];

        return groups.includes(currentCategory.toLowerCase()) || mainCategories.includes(currentCategory.toLowerCase());
      });
      console.log(`Filtered to ${gamesToDisplay.length} games in category: ${currentCategory}`);
    }

    // Get all game card placeholders
    const gameCards = document.querySelectorAll(".game-card");
    console.log(`Found ${gameCards.length} game cards to populate`);

    // Populate each card with game data in order
    gameCards.forEach((card, index) => {
      if (gamesToDisplay[index]) {
        const game = gamesToDisplay[index];
        const link = card.querySelector(".card-link");
        const img = card.querySelector("img");
        const source = card.querySelector("source");
        const title = card.querySelector("h3");

        // Update card with game data
        if (link) link.href = game.url || "#";
        if (img) {
          img.alt = game.title || "";
          img.dataset.src = game.image || "";
          img.src = game.image || "";
        }
        if (source) {
          source.srcset = game.image || "";
          source.dataset.srcset = game.image || "";
        }
        if (title) title.textContent = game.title || "";

        // Make card visible with animation
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 50); // Staggered animation
      } else {
        // Hide cards that don't have corresponding games
        card.style.display = "none";
      }
    });

    // Show message if no games found in category
    if (currentCategory && gamesToDisplay.length === 0) {
      const container = document.querySelector(".game-cards-container") || document.querySelector(".games-grid") || document.body;
      const message = document.createElement("div");
      message.className = "no-games-message";
      message.innerHTML = `<p>No games found in category: ${currentCategory}</p>`;
      container.appendChild(message);
    }

    // Initialize lazy loading for images
    if (window.lazyLoadInstance) {
      window.lazyLoadInstance.update();
    }
  } catch (error) {
    console.error("Error loading games:", error);
  }
});
