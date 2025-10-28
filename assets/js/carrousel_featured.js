document.addEventListener("DOMContentLoaded", async () => {
  // İki carousel container'ı seç
  const newGamesContainer = document.querySelector(".index-page-games-list-new");
  const featuredGamesContainer = document.querySelector(".index-page-games-list-featured");

  if (!newGamesContainer || !featuredGamesContainer) return;

  const newGamesCardContainer = newGamesContainer.querySelector(".card-carousel");
  const featuredGamesCardContainer = featuredGamesContainer.querySelector(".card-carousel");

  if (!newGamesCardContainer || !featuredGamesCardContainer) return;

  // Reklam kapatma kontrolü
  const noAds = newGamesCardContainer.hasAttribute("data-no-ads");

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
        }, 0);
      }
    }

    await loadGammeData();

    const response = await fetch("/data-json/games.json?v=2.0.25");
    const allGames = await response.json();

    // NEW GAMES: Son 20 oyunu al ve tersine çevir
    const newGames = allGames.slice(-20).reverse();

    // FEATURED GAMES: featured = true olan oyunları filtrele
    let featuredGames = allGames.filter((game) => game.featured === true);

    // Filtreleri kontrol et (eğer varsa)
    const filterAttr = featuredGamesCardContainer.getAttribute("data-filter");
    const filters = filterAttr
      ? filterAttr
          .toLowerCase()
          .split(",")
          .map((f) => f.trim())
      : null;

    // Filtreler varsa featured games'e uygula
    if (filters) {
      featuredGames = featuredGames.filter((game) => {
        if (!game.groups) return false;
        const gameGroups = game.groups
          .toLowerCase()
          .split(",")
          .map((g) => g.trim());
        return filters.some((filter) => gameGroups.includes(filter));
      });
    }

    // En son eklenen 15 featured oyunu al
    const latestFeaturedGames = featuredGames.slice(-15).reverse();

    if (!window.adsbygoogle) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      document.head.appendChild(script);
    }

    // NEW GAMES kartlarını ekle
    newGames.forEach((game, index) => {
      newGamesCardContainer.insertAdjacentHTML(
        "beforeend",
        `<a href="${game.url}" class="card card_featured">
            <picture>
              <source data-srcset="${game.image}" type="image/png" class="img-fluid" />
              <img data-src="${game.image}" alt="${game.title}" class="lazyload img-fluid" width="500" height="500" style="height: 200px; object-fit: cover;"/>
            </picture>
            <div class="card-body"><h3 style=" height: 28px; top: 155px; -webkit-line-clamp: 2;">${game.title}</h3></div>
          </a>`
      );
    });

    // FEATURED GAMES kartlarını ekle
    latestFeaturedGames.forEach((game, index) => {
      featuredGamesCardContainer.insertAdjacentHTML(
        "beforeend",
        `<a href="${game.url}" class="card card_featured">
            <picture>
              <source data-srcset="${game.image}" type="image/png" class="img-fluid" />
              <img data-src="${game.image}" alt="${game.title}" class="lazyload img-fluid" width="500" height="500" style="height: 200px; object-fit: cover;"/>
            </picture>
            <div class="card-body"><h3 style=" height: 28px; top: 155px; -webkit-line-clamp: 2;">${game.title}</h3></div>
          </a>`
      );
    });

    // Lazy loading başlat
    if (window.LazyLoad) {
      new LazyLoad({ elements_selector: ".lazyload" });
    }

    // Kartları görünür yap
    function revealCards() {
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, index * 10);
      });
    }

    window.addEventListener("load", revealCards);
    setTimeout(revealCards, 500);

    // Her iki carousel'ı da başlat
    initCarousel(newGamesContainer);
    initCarousel(featuredGamesContainer);
  } catch (error) {
    console.error("Games yüklenirken hata oluştu:", error);
  }

  function initCarousel(carouselContainer) {
    const carousel = carouselContainer.querySelector(".card-carousel");
    const rightArrow = carouselContainer.querySelector(".arrow.right");
    const leftArrow = carouselContainer.querySelector(".arrow.left");

    if (!carousel || !rightArrow || !leftArrow) return;

    setTimeout(() => {
      const card = carousel.querySelector(".card_featured");
      if (!card) {
        console.error("Kart bulunamadı!");
        return;
      }

      const cardStyle = window.getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseInt(cardStyle.marginRight) + parseInt(cardStyle.marginLeft);

      let scrollAmount = 0;
      let isDragging = false;
      let startX = 0;
      let startScroll = 0;
      let hasMoved = false;
      let velocity = 0;
      let momentumID = null;
      let prevScrollAmount = 0;

      const totalCards = carousel.children.length;
      const containerWidth = carouselContainer.offsetWidth;
      const maxScroll = cardWidth * totalCards - containerWidth;

      carousel.style.cursor = "grab";
      updateArrowVisibility();

      // BROWSER'IN DEFAULT DRAG DAVRANIŞINI ENGELLE (ÖNEMLİ!)
      carousel.addEventListener("dragstart", (e) => {
        e.preventDefault();
        return false;
      });

      // TÜM LİNK VE RESİMLERİN DRAG'İNİ ENGELLE
      carousel.querySelectorAll("a, img").forEach((element) => {
        element.ondragstart = () => false;
      });

      // SAĞ OK
      rightArrow.addEventListener("click", () => {
        cancelMomentum();
        scrollAmount += cardWidth;
        if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
        updateArrowVisibility();
      });

      // SOL OK
      leftArrow.addEventListener("click", () => {
        cancelMomentum();
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) scrollAmount = 0;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
        updateArrowVisibility();
      });

      // MOMENTUM FONKSİYONLARI
      function beginMomentum() {
        cancelMomentum();
        momentumID = requestAnimationFrame(momentumLoop);
      }

      function cancelMomentum() {
        if (momentumID) {
          cancelAnimationFrame(momentumID);
          momentumID = null;
        }
      }

      function momentumLoop() {
        scrollAmount += velocity;

        if (scrollAmount < 0) {
          scrollAmount = 0;
          velocity = 0;
        }
        if (scrollAmount > maxScroll) {
          scrollAmount = maxScroll;
          velocity = 0;
        }

        carousel.style.transform = `translateX(-${scrollAmount}px)`;
        updateArrowVisibility();

        velocity *= 0.95;

        if (Math.abs(velocity) > 0.5) {
          momentumID = requestAnimationFrame(momentumLoop);
        }
      }

      // DRAG BAŞLATMA
      function dragStart(e) {
        isDragging = true;
        hasMoved = false;
        startX = e.pageX || e.touches[0].pageX;
        startScroll = scrollAmount;
        prevScrollAmount = scrollAmount;
        velocity = 0;
        carousel.style.cursor = "grabbing";
        carousel.style.transition = "none";
        cancelMomentum();
      }

      // DRAG HAREKETI
      function dragMove(e) {
        if (!isDragging) return;

        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 1.5;

        if (Math.abs(walk) > 5) {
          hasMoved = true;
          e.preventDefault();
        }

        let newScroll = startScroll - walk;
        if (newScroll < 0) newScroll = 0;
        if (newScroll > maxScroll) newScroll = maxScroll;

        velocity = prevScrollAmount - newScroll;
        prevScrollAmount = newScroll;

        scrollAmount = newScroll;
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
      }

      // DRAG BİTİŞİ
      function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = "grab";
        carousel.style.transition = "transform 0.3s ease-in-out";
        updateArrowVisibility();

        if (Math.abs(velocity) > 2) {
          beginMomentum();
        }
      }

      // DRAG EVENT'LERİ
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("touchstart", dragStart, { passive: true });

      document.addEventListener("mousemove", dragMove);
      document.addEventListener("touchmove", dragMove, { passive: false });

      document.addEventListener("mouseup", dragEnd);
      document.addEventListener("touchend", dragEnd);
      carousel.addEventListener("mouseleave", dragEnd);

      // LİNKLERİN AÇILMASINI ENGELLE (DRAG SIRASINDA)
      carousel.querySelectorAll(".card").forEach((card) => {
        card.addEventListener("click", (e) => {
          if (hasMoved) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
      });

      // WHEEL EVENT
      carousel.addEventListener(
        "wheel",
        (e) => {
          const deltaX = Math.abs(e.deltaX);
          const deltaY = Math.abs(e.deltaY);

          cancelMomentum();

          if (deltaX > deltaY && deltaX > 0) {
            e.preventDefault();
            scrollAmount += e.deltaX * 0.5;
          } else if (deltaY > deltaX * 2) {
            return;
          }

          if (scrollAmount < 0) scrollAmount = 0;
          if (scrollAmount > maxScroll) scrollAmount = maxScroll;

          carousel.style.transform = `translateX(-${scrollAmount}px)`;
          updateArrowVisibility();
        },
        { passive: false }
      );

      // OK GÖRÜNÜRLÜKLERİ
      function updateArrowVisibility() {
        leftArrow.style.opacity = scrollAmount > 0 ? "1" : "0.3";
        leftArrow.style.pointerEvents = scrollAmount > 0 ? "auto" : "none";

        rightArrow.style.opacity = scrollAmount < maxScroll ? "1" : "0.3";
        rightArrow.style.pointerEvents = scrollAmount < maxScroll ? "auto" : "none";
      }

      carousel.style.transition = "transform 0.3s ease-in-out";

      // RESIZE
      window.addEventListener("resize", () => {
        cancelMomentum();
        const newContainerWidth = carouselContainer.offsetWidth;
        const newMaxScroll = cardWidth * totalCards - newContainerWidth;

        if (scrollAmount > newMaxScroll) {
          scrollAmount = newMaxScroll;
          carousel.style.transform = `translateX(-${scrollAmount}px)`;
        }
        updateArrowVisibility();
      });
    }, 100);
  }
});
