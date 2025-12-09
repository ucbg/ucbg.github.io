// ============================================
// CENTRAL CONFIGURATION - Used by both dropdowns
// ============================================

// Active sites count - shared between server and online players dropdowns
// This value is FIXED and does NOT change
const ACTIVE_SITES_COUNT = 2847;

// Get active sites count (always returns the same value)
function getActiveSitesCount() {
  return ACTIVE_SITES_COUNT;
}

// Make it globally available
window.getActiveSitesCount = getActiveSitesCount;
window.ACTIVE_SITES_COUNT = ACTIVE_SITES_COUNT;

// Server list with status
const SERVERS = [
  {
    name: "ucbg.github.io",
    url: "https://ucbg.github.io",
    status: "boss",
    description: "Everything arrives here first. The others literally chase it.",
  },
  {
    name: "classroom6.pages.dev",
    url: "https://classroom6.pages.dev",
    status: "follower",
    description: "Reliable, but not the leader.",
  },
];

// Create server dropdown
function createServerDropdown() {
  let dropdown = document.getElementById("server-dropdown");

  if (dropdown) {
    return dropdown;
  }

  dropdown = document.createElement("div");
  dropdown.id = "server-dropdown";
  dropdown.className = "server-dropdown";
  dropdown.style.display = "none";

  const header = document.createElement("div");
  header.className = "server-dropdown-header";

  header.innerHTML = `
    <div class="server-dropdown-title">🖥️ UCBG Servers</div>
    <div class="server-dropdown-subtitle">UCBG has multiple servers. Only the Boss Server gets updates first — the others follow behind. Visit the Boss for the freshest games!</div>
  `;

  const list = document.createElement("div");
  list.id = "server-list";
  list.className = "server-list";

  // Generate server items
  list.innerHTML = SERVERS.map(
    (server) => `
    <a href="${server.url}" target="_blank" class="server-item ${server.status}">
      <div class="server-info">
        <div class="server-name">
          ${server.status === "boss" ? "👑 " : "🦆 "}${server.name}
          ${server.status === "boss" ? '<span class="boss-badge">BOSS</span>' : ""}
        </div>
        <div class="server-description">${server.description}</div>
      </div>
      <svg class="server-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  `
  ).join("");

  // Add footer with active sites and expand button
  const footer = document.createElement("div");
  footer.className = "server-dropdown-footer";
  footer.innerHTML = `
    <div class="server-footer-info">
      <span class="server-footer-label">Active Sites:</span>
      <span class="server-footer-value" id="server-active-sites">${getActiveSitesCount().toLocaleString()}</span>
    </div>
    <button class="server-expand-btn" onclick="showServerListMessage(event)">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="7 13 12 18 17 13"></polyline>
        <polyline points="7 6 12 11 17 6"></polyline>
      </svg>
    </button>
  `;

  dropdown.appendChild(header);
  dropdown.appendChild(list);
  dropdown.appendChild(footer);
  document.body.appendChild(dropdown);

  return dropdown;
}

// Show message when user clicks expand button
function showServerListMessage(event) {
  event.preventDefault();
  event.stopPropagation();

  // Check if message already exists
  let messageBox = document.getElementById("server-list-message");

  if (messageBox) {
    // If exists, remove it (toggle behavior)
    messageBox.remove();
    return;
  }

  // Create message box
  messageBox = document.createElement("div");
  messageBox.id = "server-list-message";
  messageBox.className = "server-list-message";
  messageBox.innerHTML = `
    <div class="server-message-icon">🔒</div>
    <div class="server-message-content">
      <div class="server-message-title">Full List Unavailable</div>
      <div class="server-message-text">For security and privacy reasons, we cannot share the complete list of active sites.</div>
    </div>
    <button class="server-message-close" onclick="closeServerMessage(event)">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  `;

  // Insert after footer
  const dropdown = document.getElementById("server-dropdown");
  if (dropdown) {
    dropdown.appendChild(messageBox);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      if (messageBox && messageBox.parentNode) {
        messageBox.classList.add("fade-out");
        setTimeout(() => messageBox.remove(), 300);
      }
    }, 5000);
  }
}

// Close message box
function closeServerMessage(event) {
  event.preventDefault();
  event.stopPropagation();

  const messageBox = document.getElementById("server-list-message");
  if (messageBox) {
    messageBox.classList.add("fade-out");
    setTimeout(() => messageBox.remove(), 300);
  }
}

// Make it globally available
window.showServerListMessage = showServerListMessage;
window.closeServerMessage = closeServerMessage;

// Update active sites count in server dropdown (no change, just refresh display)
function updateServerActiveSitesCount() {
  const countElement = document.getElementById("server-active-sites");
  if (!countElement) return;

  // Value never changes, just display it
  countElement.textContent = getActiveSitesCount().toLocaleString();

  // Also update in online players dropdown if it exists
  const onlineCountElement = document.getElementById("online-active-sites");
  if (onlineCountElement) {
    onlineCountElement.textContent = getActiveSitesCount().toLocaleString();
  }
}

// Toggle server dropdown
function toggleServerDropdown(event) {
  if (event) {
    event.stopPropagation();
  }

  const dropdown = createServerDropdown();
  const button = document.querySelector(".server-btn");

  if (!button || !dropdown) return;

  const isVisible = dropdown.style.display === "block";

  if (isVisible) {
    dropdown.style.display = "none";
  } else {
    // Close other drawers first
    if (typeof window.closeAllDrawers === "function") {
      window.closeAllDrawers();
    }

    // Close favorites drawer
    const favoritesDrawer = document.getElementById("favoritesDrawer");
    if (favoritesDrawer) {
      favoritesDrawer.classList.add("hidden");
    }

    // Close recent games drawer
    const recentDrawer = document.getElementById("recentGamesDrawer");
    if (recentDrawer) {
      recentDrawer.classList.add("hidden");
    }

    // Close online users dropdown
    const onlineDropdown = document.getElementById("online-users-dropdown");
    if (onlineDropdown) {
      onlineDropdown.style.display = "none";
    }

    // Position dropdown
    const rect = button.getBoundingClientRect();
    dropdown.style.top = rect.bottom + 10 + "px";
    dropdown.style.right = window.innerWidth - rect.right + "px";
    dropdown.style.display = "block";
  }
}

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("server-dropdown");
  const button = document.querySelector(".server-btn");

  if (dropdown && dropdown.style.display === "block" && !dropdown.contains(e.target) && !button.contains(e.target)) {
    dropdown.style.display = "none";
  }
});

// Make toggle function globally available
window.toggleServerDropdown = toggleServerDropdown;
