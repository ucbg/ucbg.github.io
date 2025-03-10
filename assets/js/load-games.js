document.addEventListener("DOMContentLoaded", async () => {
  try {
    // JSON dosyasını fetch ile oku
    const response = await fetch("/data-json/games.json");
    const games = await response.json();

    // Kartların ekleneceği container elementi
    const cardContainer = document.querySelector(".card-masonry");

    // Kartları oluştur
    games.forEach((game, index) => {
      // 20'de bir reklam kartı ekle
      if ((index + 1) % 20 === 0) {
        const adHTML = `
          <a class="card large">
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7321073664976914"
              crossorigin="anonymous"
            ></script>
            <!-- oyun aralari -->
            <ins
              class="adsbygoogle"
              style="display: inline-block; width: 260px; height: 260px"
              data-ad-client="ca-pub-7321073664976914"
              data-ad-slot="1811365994"
            ></ins>
            <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          </a>
        `;
        cardContainer.insertAdjacentHTML("beforeend", adHTML);
      }

      // Her 10-15 kart arasında bir large kart olacak şekilde rastgele sayı üret
      const randomInterval = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
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

      // innerHTML kullanarak HTML'i ekle
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
