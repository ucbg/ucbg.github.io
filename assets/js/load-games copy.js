document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Erişim kontrolü
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

    function getDomain() {
      return window.location.origin.replace(/https?:\/\//, "");
    }

    async function generateHash(text1, text2, domain) {
      const encoder = new TextEncoder();
      const data = encoder.encode(text1 + text2 + domain);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("")
        .substring(0, 16);
    }

    // Fetch valid hash values from a JSON file
    async function fetchValidHashes() {
      try {
        let response = await fetch("/data-json/validHashes.json");
        if (response.ok) {
          return await response.json();
        } else {
          throw new Error("Failed to fetch valid hashes");
        }
      } catch (error) {
        console.error(error);
        return [];
      }
    }

    async function checkAccess() {
      let json1 = await fetchJson("/data-json/auth1.json");
      let json2 = await fetchJson("/data-json/auth2.json");

      if (!json1 || !json2) {
        document.body.innerHTML = "<h1>Erişim Engellendi</h1>";
        return;
      }

      let domain = getDomain();

      let expectedHash = await generateHash(json1.text, json2.text, domain);

      let validHashes = await fetchValidHashes();

      if (!validHashes.includes(expectedHash)) {
        setTimeout(function () {
          window.location.href = "https://ucbg.github.io";
        }, 500);
      } else {
        console.log("Erişim Onaylandı");
      }
    }

    await checkAccess();

    // Games verisi yükleme
    const response = await fetch("/data-json/games.json");
    const games = await response.json();
    const cardContainer = document.querySelector(".card-masonry");

    games.forEach((game, index) => {
      // 20'de bir reklam kartı ekle
      if ((index + 1) % 20 === 0) {
        const adElement = document.createElement("a");
        adElement.className = "card large";
        adElement.innerHTML = `
          <ins class="adsbygoogle"
               style="display:inline-block; width:260px; height:260px"
               data-ad-client="ca-pub-7321073664976914"
               data-ad-slot="1811365994"></ins>
        `;
        cardContainer.appendChild(adElement);

        // Google Ads'ı yükle
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      }

      // Her 10-15 kart arasında bir large kart olacak şekilde rastgele sayı üret
      const randomInterval = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
      const isLarge = index % randomInterval === 0;

      const cardHTML = `
        <a href="${game.url}" class="card${isLarge ? " large" : ""}">
            <picture>
                <source data-srcset="${game.image}" type="image/png" class="img-fluid" srcset="${game.image}" />
                <img data-src="${game.image}" alt="${game.title}" class="lazyload img-fluid" width="500" height="500" />
            </picture>
            <div class="card-body">
                <h3>${game.title}</h3>
            </div>
        </a>
      `;
      cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Lazy loading başlat
    if (window.LazyLoad) {
      new LazyLoad({ elements_selector: ".lazyload" });
    }
  } catch (error) {
    console.error("Games yüklenirken hata oluştu:", error);
  }
});
