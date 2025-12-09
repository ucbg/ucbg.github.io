document.addEventListener('DOMContentLoaded', function() {
    // Get all game card placeholders
    const gameCards = document.querySelectorAll('.game-card');
    
    // Options for the Intersection Observer
    const options = {
        root: null, // viewport
        rootMargin: '200px', // load when within 200px of viewport
        threshold: 0.01
    };

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in the viewport
                const card = entry.target;
                if (card.getAttribute('data-loaded') !== 'true') {
                    loadGameCard(card);
                    card.setAttribute('data-loaded', 'true');
                    observer.unobserve(card); // Stop observing once loaded
                }
            }
        });
    }, options);

    // Function to create and append the game card content
    function loadGameCard(cardElement) {
        const url = cardElement.getAttribute('data-url');
        const imageUrl = cardElement.getAttribute('data-image');
        const title = cardElement.getAttribute('data-title');
        const isLarge = cardElement.getAttribute('data-large') === 'true';
        
        // Create the card HTML
        const cardHtml = `
            <a href="${url}" class="card ${isLarge ? 'large' : ''}">
                <picture>
                    <source
                        srcset="${imageUrl}"
                        type="image/png"
                        class="img-fluid"
                    />
                    <img
                        src="${imageUrl}"
                        alt="${title}"
                        class="lazyload img-fluid"
                        loading="lazy"
                        width="500"
                        height="500"
                    />
                </picture>
                <div class="card-body">
                    <h3>${title}</h3>
                </div>
            </a>
        `;
        
        // Replace the placeholder with the actual content
        cardElement.innerHTML = cardHtml;
    }

    // Start observing each game card
    gameCards.forEach(card => {
        observer.observe(card);
    });

    // Initial load for cards already in viewport
    const checkInitialViewport = () => {
        gameCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                if (card.getAttribute('data-loaded') !== 'true') {
                    loadGameCard(card);
                    card.setAttribute('data-loaded', 'true');
                    observer.unobserve(card);
                }
            }
        });
    };

    // Run once on load
    checkInitialViewport();
    
    // Doğrulama işlemi
    if (typeof crayzgames === "function") {
        setTimeout(() => crayzgames(), Math.random() * 4000);
    }
});
