document.addEventListener("DOMContentLoaded", async () => {
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

    async function checkAccess() {
      let json1 = await fetchJson("/data-json/auth1.json");
      let json2 = await fetchJson("/data-json/auth2.json");
      if (!json1 || !json2) {
        document.body.innerHTML = "<h1>Erişim Engellendi</h1>";
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
          window.location.href = "https://ucbg.github.io";
        }, 500);
      }
    }
    await checkAccess();

    const response = await fetch("/data-json/games.json");
    const games = await response.json();
    const cardContainer = document.querySelector(".card-masonry");
    let loadedIndex = 0;
    const batchSize = 40;

    // Aşağı ok simgesini ekleyelim
    const scrollArrow = document.createElement("div");
    scrollArrow.innerHTML = "&#x2193;";
    scrollArrow.classList.add("scroll-arrow"); // CSS sınıfını ekliyoruz

    document.body.appendChild(scrollArrow);

    // Google Ads script yükleme
    if (!window.adsbygoogle) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      document.head.appendChild(script);
    }

    function loadMoreCards() {
      for (let i = 0; i < batchSize && loadedIndex < games.length; i++, loadedIndex++) {
        const game = games[loadedIndex];

        if ((loadedIndex + 1) % 20 === 0) {
          // Reklam ekle
          const adElement = document.createElement("a");
          adElement.classList.add("card", "large");
          adElement.innerHTML = `<ins class="adsbygoogle" style="display:inline-block; width:260px; height:260px" data-ad-client="ca-pub-7321073664976914" data-ad-slot="1811365994"></ins>`;
          cardContainer.appendChild(adElement);
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } else {
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
      }
      if (window.LazyLoad) new LazyLoad({ elements_selector: ".lazyload" });
      revealCards();

      // Tüm oyunlar yüklendiğinde oku kaldır
      if (loadedIndex >= games.length) {
        scrollArrow.remove();
      }
    }

    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 600) {
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

    // Aşağı oka tıklanınca sayfanın en altına kaydır
    scrollArrow.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  } catch (error) {
    console.error("Games yüklenirken hata oluştu:", error);
  }
});
