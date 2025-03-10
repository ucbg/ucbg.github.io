document.addEventListener("DOMContentLoaded", async () => {
  try {
    // JSON dosyasını fetch ile oku
    const response = await fetch("/data-json/games.json");
    const games = await response.json();

    // Kartların ekleneceği container elementi
    const cardContainer = document.querySelector(".card-masonry");

    // Her 10-15 kart arasında bir large kart olacak şekilde rastgele sayı üret
    const randomInterval = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

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
