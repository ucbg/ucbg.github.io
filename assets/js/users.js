// Country data with flags - Global scope
const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸', weight: 0.28 },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', weight: 0.12 },
  { code: 'IN', name: 'India', flag: '🇮🇳', weight: 0.10 },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', weight: 0.08 },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', weight: 0.06 },
  { code: 'FR', name: 'France', flag: '🇫🇷', weight: 0.05 },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', weight: 0.05 },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', weight: 0.04 },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', weight: 0.04 },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', weight: 0.03 },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', weight: 0.03 },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', weight: 0.03 },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', weight: 0.02 },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', weight: 0.02 },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', weight: 0.02 },
  { code: 'OTHER', name: 'Other Countries', flag: '🌍', weight: 0.03 }
];

let countryUsers = {};

document.addEventListener("DOMContentLoaded", async () => {
  const onlineUsersElement = document.getElementById("online-users");

  // Mevcut oyun başlatıcı zinciri
  if (typeof ppe === "function") await ppe();
  else if (typeof poki === "function") await poki();
  else await crayzgames();

  // ABD saat dilimleri (ET, CT, MT, PT)
  const TZ_LIST = ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"];

  // Performans için saat formatlayıcılarını bir kez oluştur
  const hourFormatters = TZ_LIST.map((tz) => new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hour12: false }));

  function getUSHours(now) {
    return hourFormatters.map((fmt) => parseInt(fmt.format(now), 10)); // 0..23
  }

  // Gündüz ağırlığı (0..1): 6–22 yüksek; geçişler kademeli
  function dayWeight(hour) {
    if (hour < 6) return 0.25;
    if (hour < 9) return 0.55;
    if (hour < 12) return 0.8;
    if (hour < 18) return 1.0;
    if (hour < 22) return 0.7;
    return 0.35;
  }

  function getUSDayFactor(now) {
    const hours = getUSHours(now);
    const weights = hours.map(dayWeight);
    return weights.reduce((a, b) => a + b, 0) / weights.length; // 0..1
  }

  // Hedef aralıkları: "hafta içi ~100k", "hafta sonu ~20k"
  const WEEKDAY_RANGE = { low: 85000, high: 115000 };
  const WEEKEND_RANGE = { low: 15000, high: 25000 };

  const TICK_MS = 1500;
  let current = null;
  let intervalId = null;

  function isWeekendLocal(now) {
    const d = now.getDay(); // 0: Pazar, 6: Cumartesi
    return d === 0 || d === 6;
  }

  function step() {
    const now = new Date();

    // Hafta içi/sonu aralığını seç
    const weekend = isWeekendLocal(now);
    const range = weekend ? WEEKEND_RANGE : WEEKDAY_RANGE;

    // ABD gündüz/gece faktörüyle hedefi aralık içinde konumlandır
    const usFactor = getUSDayFactor(now); // 0..1
    const target = Math.round(range.low + usFactor * (range.high - range.low));

    if (current === null) current = target;

    const delta = target - current;

    // Hedefe yumuşak yaklaşım (easing)
    const ease = delta * 0.12;

    // Pıtır pıtır jitter: delta'ya bağlı, sınırla
    const jitterAmp = Math.max(15, Math.min(300, Math.abs(delta) * 0.02));
    const jitter = (Math.random() * 2 - 1) * jitterAmp;

    current = Math.max(0, current + ease + jitter);

    // Calculate country distribution with smooth changes
    const totalUsers = Math.round(current);
    COUNTRIES.forEach(country => {
      const baseCount = Math.round(totalUsers * country.weight);
      
      // Initialize if not exists
      if (!countryUsers[country.code]) {
        countryUsers[country.code] = baseCount;
      }
      
      // Smooth transition: only change by 1-5 users per tick
      const currentCount = countryUsers[country.code];
      const diff = baseCount - currentCount;
      
      if (Math.abs(diff) > 0) {
        // Random small change (1-5 users)
        const maxChange = Math.min(5, Math.abs(diff));
        const change = Math.floor(Math.random() * maxChange) + 1;
        
        if (diff > 0) {
          countryUsers[country.code] = Math.min(baseCount, currentCount + change);
        } else {
          countryUsers[country.code] = Math.max(baseCount, currentCount - change);
        }
      }
      
      // Ensure non-negative
      countryUsers[country.code] = Math.max(0, countryUsers[country.code]);
    });

    // Yerelleştirilmiş çıktı
    onlineUsersElement.textContent = totalUsers.toLocaleString();
    
    // Update dropdown if open
    updateOnlineUsersDropdown();
  }

  function start() {
    stop();
    step();
    intervalId = setInterval(step, TICK_MS);
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") start();
    else stop();
  });

  start();
});


// Online Users Dropdown
function createOnlineUsersDropdown() {
  let dropdown = document.getElementById('online-users-dropdown');
  
  if (dropdown) {
    return dropdown;
  }

  dropdown = document.createElement('div');
  dropdown.id = 'online-users-dropdown';
  dropdown.className = 'online-users-dropdown';
  dropdown.style.display = 'none';

  const header = document.createElement('div');
  header.className = 'online-users-dropdown-header';
  
  // Get active sites count from servers.js
  const activeSites = (typeof window.getActiveSitesCount === 'function' 
    ? window.getActiveSitesCount() 
    : 2847).toLocaleString();
  
  header.innerHTML = `
    <div class="online-users-dropdown-title">🎮 Online Players</div>
    <div class="online-users-dropdown-subtitle">Pretending to learn, but actually leveling up.</div>
    <div class="online-users-stats">
      <div class="stat-item">
        <span class="stat-value" id="online-active-sites">${activeSites}</span>
        <span class="stat-label">Active Sites</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">1.2M+</span>
        <span class="stat-label">Daily Players</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">156</span>
        <span class="stat-label">Countries</span>
      </div>
    </div>
  `;

  const list = document.createElement('div');
  list.id = 'online-users-list';
  list.className = 'online-users-list';

  dropdown.appendChild(header);
  dropdown.appendChild(list);
  document.body.appendChild(dropdown);

  return dropdown;
}

function updateOnlineUsersDropdown() {
  const list = document.getElementById('online-users-list');
  const dropdown = document.getElementById('online-users-dropdown');
  
  if (!list || !dropdown || dropdown.style.display === 'none') return;

  list.innerHTML = COUNTRIES.map(country => `
    <div class="online-users-country-item">
      <span class="country-flag">${country.flag}</span>
      <span class="country-name">${country.name}</span>
      <span class="country-count">${(countryUsers[country.code] || 0).toLocaleString()}</span>
    </div>
  `).join('');
}

function toggleOnlineUsersDropdown(event) {
  if (event) {
    event.stopPropagation();
  }
  
  const dropdown = createOnlineUsersDropdown();
  const button = document.querySelector('.online-users');
  
  if (!button || !dropdown) return;

  const isVisible = dropdown.style.display === 'block';
  
  if (isVisible) {
    dropdown.style.display = 'none';
  } else {
    // Close other drawers first
    if (typeof window.closeAllDrawers === 'function') {
      window.closeAllDrawers();
    }
    
    // Close favorites drawer
    const favoritesDrawer = document.getElementById('favoritesDrawer');
    if (favoritesDrawer) {
      favoritesDrawer.classList.add('hidden');
    }
    
    // Close recent games drawer
    const recentDrawer = document.getElementById('recentGamesDrawer');
    if (recentDrawer) {
      recentDrawer.classList.add('hidden');
    }
    
    // Close server dropdown
    const serverDropdown = document.getElementById('server-dropdown');
    if (serverDropdown) {
      serverDropdown.style.display = 'none';
    }
    
    // Position dropdown
    const rect = button.getBoundingClientRect();
    dropdown.style.top = (rect.bottom + 10) + 'px';
    dropdown.style.right = (window.innerWidth - rect.right) + 'px';
    dropdown.style.display = 'block';
    
    updateOnlineUsersDropdown();
  }
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('online-users-dropdown');
  const button = document.querySelector('.online-users');
  
  if (dropdown && dropdown.style.display === 'block' && 
      !dropdown.contains(e.target) && !button.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

// Make toggle function globally available
window.toggleOnlineUsersDropdown = toggleOnlineUsersDropdown;
