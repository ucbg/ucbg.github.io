// Modern Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.navbar-mobile-toggle');
  const searchForm = document.querySelector('.navbar-search');
  const chatButton = document.getElementById('chat-button');
  const chatBadge = document.getElementById('chat-badge');
  const navbar = document.querySelector('.navbar-modern');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeSunIcon = document.getElementById('theme-icon-sun');
  const themeMoonIcon = document.getElementById('theme-icon-moon');

  // Add ripple effect to buttons
  document.querySelectorAll('.nav-action-btn').forEach(button => {
    button.addEventListener('click', function(e) {
      // Add ripple effect to all buttons
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }, false);
  });

  // Mobile menu toggle with animation
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
      if (searchForm) {
        searchForm.style.display = searchForm.style.display === 'none' ? 'block' : 'none';
        searchForm.style.animation = 'slideDown 0.3s ease-out';
      }
    });
  }

  // Close mobile search when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNavbar = event.target.closest('.navbar-modern');
    if (!isClickInsideNavbar && searchForm && window.innerWidth <= 768) {
      searchForm.style.display = 'none';
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && searchForm) {
      searchForm.style.display = 'block';
    }
  });

  // Search input focus with enhanced effects
  const searchInput = document.querySelector('.search-input-wrapper input');
  if (searchInput) {
    searchInput.addEventListener('focus', function() {
      this.parentElement.style.boxShadow = '0 0 30px rgba(98, 77, 227, 0.3)';
    });

    searchInput.addEventListener('blur', function() {
      this.parentElement.style.boxShadow = '';
    });

    // Auto-focus on page load
    setTimeout(() => searchInput.focus(), 300);
  }

  // Chat button - hide badge when clicked with animation
  if (chatButton) {
    chatButton.addEventListener('click', function() {
      if (chatBadge && chatBadge.style.display !== 'none') {
        chatBadge.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => {
          chatBadge.style.display = 'none';
          chatBadge.style.animation = '';
        }, 300);
      }
    });
  }

  // Theme Toggle
  function updateThemeIcons(theme) {
    if (theme === 'dark') {
      themeSunIcon.style.display = 'none';
      themeMoonIcon.style.display = 'block';
    } else {
      themeSunIcon.style.display = 'block';
      themeMoonIcon.style.display = 'none';
    }
  }

  function toggleTheme() {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
  }

  // Initialize theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  // Theme toggle button click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      navbar.style.boxShadow = '0 8px 32px rgba(98, 77, 227, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
    } else {
      navbar.style.boxShadow = '0 8px 32px rgba(98, 77, 227, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
    }
  });
});

// Toggle Favorites Drawer function is defined in favorite.js
// No need to redefine it here

// Update online users count
function updateOnlineUsers() {
  const onlineUsersElement = document.getElementById('online-users');
  if (onlineUsersElement) {
    // This will be populated by your existing users.js script
    // Just ensure it updates the element correctly
  }
}

// Call on page load and periodically
updateOnlineUsers();
setInterval(updateOnlineUsers, 30000); // Update every 30 seconds

// Show chat notification badge (can be called from your chat system)
function showChatNotification() {
  const chatBadge = document.getElementById('chat-badge');
  if (chatBadge) {
    chatBadge.style.display = 'flex';
  }
}


// Close all drawers/dropdowns
function closeAllDrawers() {
  // Close favorites drawer
  const favoritesDrawer = document.getElementById('favoritesDrawer');
  if (favoritesDrawer && !favoritesDrawer.classList.contains('hidden')) {
    favoritesDrawer.classList.add('hidden');
  }
  
  // Close recent games drawer
  const recentDrawer = document.getElementById('recentGamesDrawer');
  if (recentDrawer && !recentDrawer.classList.contains('hidden')) {
    recentDrawer.classList.add('hidden');
  }
  
  // Close online users dropdown
  const onlineUsersDropdown = document.getElementById('online-users-dropdown');
  if (onlineUsersDropdown && onlineUsersDropdown.style.display === 'block') {
    onlineUsersDropdown.style.display = 'none';
  }
}

// Make it globally available
window.closeAllDrawers = closeAllDrawers;


// Sidebar toggle is handled in categories_menu.js


// Set active sidebar item based on current page
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  
  sidebarItems.forEach(item => {
    const itemPath = item.getAttribute('href');
    
    // Check if current page matches the sidebar item
    if (itemPath && currentPath.includes(itemPath)) {
      item.classList.add('active');
    }
  });
});

// Mobile search toggle functionality
      document.addEventListener('DOMContentLoaded', function() {
        const searchToggle = document.getElementById('mobileSearchToggle');
        const searchForm = document.getElementById('navbarSearch');
        const searchCloseBtn = document.getElementById('searchCloseBtn');
        const searchInput = document.getElementById('search');

        if (searchToggle && searchForm && searchCloseBtn) {
          // Open search
          searchToggle.addEventListener('click', function() {
            searchForm.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
          });

          // Close search
          searchCloseBtn.addEventListener('click', function() {
            searchForm.classList.remove('active');
            searchInput.value = '';
          });

          // Close on escape key
          document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && searchForm.classList.contains('active')) {
              searchForm.classList.remove('active');
              searchInput.value = '';
            }
          });

          // Close when clicking outside
          document.addEventListener('click', function(e) {
            if (searchForm.classList.contains('active') && 
                !searchForm.contains(e.target) && 
                !searchToggle.contains(e.target)) {
              searchForm.classList.remove('active');
            }
          });
        }
      });