document.addEventListener("DOMContentLoaded", async () => {
  try {
    // JSON dosyasını fetch ile oku
    const response = await fetch("/data-json/games.json");
    const games = await response.json();

    // Kartların ekleneceği container elementi
    const cardContainer = document.querySelector(".card-masonry");

    // Her 10-15 kart arasında bir large kart olacak şekilde rastgele sayı üret
    const randomInterval = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

    // Reklam kodu (large card içinde)
    const adHTML = `
        
          <div class="card-body">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7321073664976914"
                crossorigin="anonymous"></script>
            <!-- oyun aralari -->
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7321073664976914"
                data-ad-slot="1811365994"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </div>
        
      `;

    // Kartları oluştur
    games.forEach((game, index) => {
      // Her randomInterval karttan birini large yap
      const isLarge = index % randomInterval === 0;

      const cardHTML = `
                  <a href="${game.url}" class="card${isLarge ? " large" : ""}">
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
                  </a>
              `;

      // Eğer her 20 oyunda bir reklam eklemek isteniyorsa
      if ((index + 1) % 20 === 0) {
        // Reklamı large card içinde ekle
        cardContainer.insertAdjacentHTML("beforeend", adHTML);
      }

      // Kartı ekle
      cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Lazy loading'i başlat
    if (window.LazyLoad) {
      new LazyLoad({
        elements_selector: ".lazyload",
      });
    }
  } catch (error) {
    console.error("Games yüklenirken hata oluştu:", error);
  }
});
