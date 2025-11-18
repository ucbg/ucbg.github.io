// Kategori Carousel JavaScript - Random Individual Rotation
(function() {
  'use strict';
  
  let categories = [];
  let visibleButtons = [];
  let buttonTimers = new Map();
  let isPaused = false;
  
  function initCategoryCarousel() {
    const container = document.querySelector('.custom-category-group');
    if (!container) return;
    
    // Tüm kategorileri al
    const allLinks = Array.from(container.querySelectorAll('.custom-category-link'));
    categories = allLinks.map(link => ({
      html: link.outerHTML,
      element: link
    }));
    
    if (categories.length === 0) return;
    
    // Başlangıçta gösterilecek kategori sayısını hesapla
    updateVisibleCategories();
    
    // Pencere boyutu değiştiğinde yeniden hesapla
    window.addEventListener('resize', debounce(updateVisibleCategories, 250));
    
    // Her buton için rastgele zamanlama başlat
    startRandomRotation();
  }
  
  function updateVisibleCategories() {
    const container = document.querySelector('.custom-category-group');
    if (!container) return;
    
    const containerWidth = container.offsetWidth;
    const maxItemsToShow = calculateMaxItems(containerWidth);
    
    // Mevcut kategorileri temizle
    container.innerHTML = '';
    visibleButtons = [];
    
    // Rastgele kategoriler seç
    const shuffled = [...categories].sort(() => Math.random() - 0.5);
    const itemsToShow = shuffled.slice(0, maxItemsToShow);
    
    itemsToShow.forEach((cat, index) => {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = cat.html;
      const link = tempDiv.firstElementChild;
      link.style.animationDelay = `${index * 0.1}s`;
      link.dataset.buttonIndex = index;
      container.appendChild(link);
      visibleButtons.push(link);
    });
  }
  
  function calculateMaxItems(containerWidth) {
    // Ortalama bir kategori genişliği (padding + margin dahil)
    const avgItemWidth = 140;
    const maxItems = Math.floor(containerWidth / avgItemWidth);
    return Math.max(4, Math.min(maxItems, 10)); // En az 4, en fazla 10 kategori
  }
  
  function rotateButton(buttonIndex) {
    if (isPaused) return;
    
    const button = visibleButtons[buttonIndex];
    if (!button) return;
    
    // Butonu fade out yap
    button.classList.add('fade-out');
    
    // Animasyon bitince yeni kategori göster
    setTimeout(() => {
      // Kullanılmayan bir kategori seç
      const usedCategories = visibleButtons.map(btn => btn.textContent.trim());
      const availableCategories = categories.filter(cat => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cat.html;
        const text = tempDiv.textContent.trim();
        return !usedCategories.includes(text);
      });
      
      // Yeni kategori seç (yoksa rastgele)
      const newCat = availableCategories.length > 0 
        ? availableCategories[Math.floor(Math.random() * availableCategories.length)]
        : categories[Math.floor(Math.random() * categories.length)];
      
      // Yeni butonu oluştur
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = newCat.html;
      const newButton = tempDiv.firstElementChild;
      newButton.dataset.buttonIndex = buttonIndex;
      
      // Eski butonu değiştir
      button.replaceWith(newButton);
      visibleButtons[buttonIndex] = newButton;
      
      // Bu buton için yeni rastgele zamanlama ayarla
      scheduleButtonRotation(buttonIndex);
    }, 700);
  }
  
  function scheduleButtonRotation(buttonIndex) {
    // Önceki timer'ı temizle
    if (buttonTimers.has(buttonIndex)) {
      clearTimeout(buttonTimers.get(buttonIndex));
    }
    
    // 5-10 saniye arası rastgele süre
    const randomDelay = Math.random() * 5000 + 5000; // 5000-10000ms
    
    const timerId = setTimeout(() => {
      rotateButton(buttonIndex);
    }, randomDelay);
    
    buttonTimers.set(buttonIndex, timerId);
  }
  
  function startRandomRotation() {
    // Her buton için rastgele zamanlama başlat
    visibleButtons.forEach((_, index) => {
      scheduleButtonRotation(index);
    });
  }
  
  function stopRandomRotation() {
    // Tüm timer'ları temizle
    buttonTimers.forEach(timerId => clearTimeout(timerId));
    buttonTimers.clear();
  }
  
  // Debounce fonksiyonu
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Mouse hover'da carousel'i durdur
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.custom-category-group');
    if (container) {
      container.addEventListener('mouseenter', () => {
        isPaused = true;
        stopRandomRotation();
      });
      container.addEventListener('mouseleave', () => {
        isPaused = false;
        startRandomRotation();
      });
    }
  });
  
  // Sayfa yüklendiğinde başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoryCarousel);
  } else {
    initCategoryCarousel();
  }
})();
