function revealInitialCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 3);
  });
}

document.addEventListener("DOMContentLoaded", revealInitialCards);

document.addEventListener("DOMContentLoaded", async () => {
  const cardContainer = document.querySelector(".index-page-games-list");
  if (!cardContainer) return;

  const noAds = cardContainer.hasAttribute("data-no-ads");

  const filterAttr = cardContainer.getAttribute("data-filter");
  const filters = filterAttr
    ? filterAttr
        .toLowerCase()
        .split(",")
        .map((f) => f.trim())
    : null;

  try {
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

    async function loadGammeData() {
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
        }, 500);
      }
    }

    await loadGammeData();

    const response = await fetch("/data-json/games.json?v=2.0.7");
    const allGames = await response.json();

    const games = filters
      ? allGames.filter((game) => {
          if (!game.groups) return false;
          const gameGroups = game.groups
            .toLowerCase()
            .split(",")
            .map((g) => g.trim());
          return filters.some((filter) => gameGroups.includes(filter));
        })
      : allGames;

    let loadedIndex = 0;
    const batchSize = 40;

    const scrollArrow = document.createElement("div");
    scrollArrow.innerHTML = "&#x2193;";
    scrollArrow.classList.add("scroll-arrow");
    document.body.appendChild(scrollArrow);

    function loadMoreCards() {
      for (let i = 0; i < batchSize && loadedIndex < games.length; i++, loadedIndex++) {
        const game = games[loadedIndex];

        const isLarge = loadedIndex % 12 === 0 || Math.random() < 0.3;
        cardContainer.insertAdjacentHTML(
          "beforeend",
          `<a href="${game.url}" class="card${isLarge ? " large" : ""}">
            <picture>
              <source data-srcset="${game.image}" type="image/png" class="img-fluid" />
              <img data-src="${game.image}" alt="${game.title}" class="lazyload img-fluid" width="500" height="500" />
            </picture>
            <div class="card-body"><h3>${game.title}</h3></div>
          </a>`
        );
      }
      if (window.LazyLoad) new LazyLoad({ elements_selector: ".lazyload" });
      revealCards();

      if (loadedIndex >= games.length) {
        scrollArrow.remove();
      }
    }

    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMoreCards();
      }
      revealCards();
    }

    function revealCards() {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        if (card.getBoundingClientRect().top < window.innerHeight - 50) {
          card.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", revealCards);
    loadMoreCards();

    scrollArrow.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  } catch (error) {
    console.error("Games yüklenirken hata oluştu:", error);
  }
});

// sag menu
document.addEventListener("DOMContentLoaded", async () => {
  const cardContainer = document.querySelector(".w-lg-300.right-side-games");
  if (!cardContainer) return;

  try {
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

    const response = await fetch("/data-json/games.json?v=2.0.7");
    const games = await response.json();

    function getRandomGames(games, count) {
      let shuffled = games.sort(() => Math.random() - 0.5);
      return shuffled.slice(0, count);
    }

    const selectedGames = getRandomGames(games, 20);

    selectedGames.forEach((game) => {
      const card = document.createElement("a");
      card.href = game.url;
      card.classList.add("card");
      card.innerHTML = `
        <picture>
          <source data-srcset="${game.image}" type="image/png" class="img-fluid" />
          <img data-src="${game.image}" alt="${game.title}" class="lazyload img-fluid" width="500" height="500" />
        </picture>
        <div class="card-body"><h3>${game.title}</h3></div>
      `;
      cardContainer.appendChild(card);
    });

    if (window.LazyLoad) new LazyLoad({ elements_selector: ".lazyload" });

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.add("visible");
    });
  } catch (error) {
    console.error("Games yüklenirken hata oluştu:", error);
  }
});

// sol menu
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".w-lg-300.lef-side-games.card-masonry");

  if (container) {
    let items = Array.from(container.querySelectorAll("a.card-collection"));

    items.sort(() => Math.random() - 0.5);

    items.forEach((item) => container.appendChild(item));

    items.forEach((item, index) => {
      if (index < 12) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});

async function ppe() {
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

  let f = await b("/data-json/auth1.json");
  let g = await b("/data-json/auth2.json");
  if (!f || !g) {
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
    setTimeout(() => {
      const n = "aHR0cHM6Ly91Y2JnLmdpdGh1Yi5pby8=";
      window.location.href = atob(n);
    }, 500);
  }
}
