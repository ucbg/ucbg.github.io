/*
  Minimal Game Embed (kardeş kontroller)
  - HTML: <div data-game="SLUG"></div>
  - JS: Bu script oyunu 16:9 oranlı wrapper ile ekler
  - Kontroller ayrı bir kardeş DIV olarak data-game elementinin HEMEN ARDINA eklenir
  - Favori (kalp), Servers etiketi, sunucu geçişi, paylaş ve fullscreen içerir
  - JSON varsa ilk JSON sunucusu başlangıçta aktif seçilir
*/

const CONFIG = {
  defaultServers: [
    "https://gameinclassroom.github.io",
    "https://unblockedgames67.gitlab.io",
    "https://unblockedgames66.gitlab.io",
    "https://ubgwtf.gitlab.io",
  ],
  jsonUrl: "/data-json/games.json?v=2.0.15",
  theme: {
    bg: "#0b1220",
    panel: "#0f172a",
    text: "#e5e7eb",
    accent: "#06b6d4",
    accentActive: "#22d3ee",
    btn: "#111827",
    btnActive: "#1f2937",
    border: "rgba(148,163,184,0.2)",
  },
  fullscreenMode: "together",
};

// Util
function el(tag, attrs = {}, children = []) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "style" && v && typeof v === "object") Object.assign(n.style, v);
    else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v);
  }
  for (const c of children) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  return n;
}

function insertAfter(refNode, newNode) {
  refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
}

function requestFullscreen(el) {
  if (el.requestFullscreen) return el.requestFullscreen();
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
  if (el.msRequestFullscreen) return el.msRequestFullscreen();
}

function exitFullscreen() {
  if (document.exitFullscreen) return document.exitFullscreen();
  if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
  if (document.msExitFullscreen) return document.msExitFullscreen();
}

function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
}

function allowFullscreen(iframe) {
  iframe.setAttribute("allowfullscreen", "");
  iframe.allowFullscreen = true;
}

// 16:9 ratio wrapper
function ratioWrap() {
  const wrapper = el("div", { class: "game-embed-wrapper" });
  Object.assign(wrapper.style, {
    position: "relative",
    width: "100%",
    background: CONFIG.theme.bg,
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: `0 1px 0 0 ${CONFIG.theme.border} inset`,
  });
  const pad = el("div");
  Object.assign(pad.style, { width: "100%", paddingTop: "56.25%" });
  const inner = el("div");
  Object.assign(inner.style, {
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
    background: CONFIG.theme.bg,
    zIndex: "1",
  });
  wrapper.appendChild(pad);
  wrapper.appendChild(inner);
  return { wrapper, inner };
}

// URL yardımcıları
function joinUrl(base, path) {
  return `${String(base).replace(/\/$/, "")}/${String(path).replace(/^\//, "")}`;
}

function buildMirrorCandidates(base, slug) {
  return [joinUrl(base, `${slug}/`), joinUrl(base, `${slug}/index.html`)];
}

// Favori kalp
function heartButton(isActive) {
  const SVG_NS = "http://www.w3.org/2000/svg";

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("id", "favoriteIcon");
  svg.setAttribute("width", "20");
  svg.setAttribute("height", "20");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("overflow", "visible");

  const path = document.createElementNS(SVG_NS, "path");
  path.setAttribute(
    "d",
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 \
C2 6 4 4 6.5 4 \
c1.74 0 3.41 1.01 4.13 2.44h.75 \
C14.09 5.01 15.76 4 17.5 4 \
C20 4 22 6 22 8.5 \
c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  );
  path.setAttribute("fill", isActive ? "#ef4444" : "gray");
  svg.appendChild(path);

  const btn = el("button", { type: "button", title: "Favorite", "aria-pressed": isActive ? "true" : "false" }, [svg]);

  Object.assign(btn.style, {
    width: "34px",
    height: "34px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: CONFIG.theme.btn,
    color: isActive ? "#ef4444" : CONFIG.theme.text,
    border: `1px solid ${CONFIG.theme.border}`,
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background .2s, color .2s",
    lineHeight: "1",
  });

  btn.addEventListener("mouseenter", () => (btn.style.background = CONFIG.theme.btnActive));
  btn.addEventListener("mouseleave", () => (btn.style.background = CONFIG.theme.btn));

  function render(active) {
    path.setAttribute("fill", active ? "#ef4444" : "gray");
    btn.style.color = active ? "#ef4444" : CONFIG.theme.text;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  }

  render(isActive);

  btn.addEventListener("click", () => {
    isActive = !isActive;
    render(isActive);
    try {
      toggleFavorite?.();
    } catch (e) {}
  });

  return { btn, render };
}

// Inline SVG logo
const LOGO_SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60.48 13.68">
  <image width="252" height="57" transform="scale(.24)" xlink:href="data:image/png;base64,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"/>
</svg>`;

// Kontrol barı (ayrı kardeş DIV)
function buildControls({ onFavorite, onFullscreen, onShare, servers, onSwitch, initialServerIndex }) {
  const bar = el("div", { class: "game-controls" });
  Object.assign(bar.style, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: CONFIG.theme.panel,
    color: CONFIG.theme.text,
    padding: "10px 12px",
    borderRadius: "12px",
    border: `1px solid ${CONFIG.theme.border}`,
    marginTop: "10px",
    marginBottom: "20px",
  });

  // Logo
  const logoBox = el("a", {
    class: "logo-box",
    href: "https://ucbg.github.io",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "ucbg.github.io",
  });
  Object.assign(logoBox.style, {
    width: "80px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textDecoration: "none",
    cursor: "pointer",
    transition: "opacity .2s",
  });
  logoBox.addEventListener("mouseenter", () => (logoBox.style.opacity = "0.8"));
  logoBox.addEventListener("mouseleave", () => (logoBox.style.opacity = "1"));
  logoBox.insertAdjacentHTML("afterbegin", LOGO_SVG);

  const serversLabel = el("span", {}, ["Servers"]);
  Object.assign(serversLabel.style, { fontSize: "13px", opacity: "0.85", marginLeft: "8px", marginRight: "2px" });

  const serverGroup = el("div", { class: "server-group", role: "group", "aria-label": "Servers" });
  Object.assign(serverGroup.style, { display: "flex", gap: "6px", marginLeft: "4px", flexWrap: "wrap" });

  function makeBtn(label, active = false) {
    const b = el("button", { type: "button" }, [label]);
    Object.assign(b.style, {
      background: active ? CONFIG.theme.btnActive : CONFIG.theme.btn,
      color: CONFIG.theme.text,
      border: `1px solid ${CONFIG.theme.border}`,
      borderRadius: "8px",
      padding: "6px 10px",
      cursor: "pointer",
      fontSize: "13px",
      lineHeight: "1",
      transition: "background .2s, color .2s, transform .05s",
    });
    b.addEventListener("mouseenter", () => (b.style.background = CONFIG.theme.btnActive));
    b.addEventListener("mouseleave", () => (b.style.background = b.dataset.active === "1" ? CONFIG.theme.btnActive : CONFIG.theme.btn));
    b.addEventListener("mousedown", () => (b.style.transform = "scale(0.98)"));
    b.addEventListener("mouseup", () => (b.style.transform = "scale(1)"));
    if (active) b.dataset.active = "1";
    return b;
  }

  const serverButtons = [];
  servers.forEach((_, i) => {
    const btn = makeBtn(String(i + 1), i === initialServerIndex);
    btn.addEventListener("click", () => {
      serverButtons.forEach((b, j) => {
        b.dataset.active = j === i ? "1" : "0";
        b.style.background = j === i ? CONFIG.theme.btnActive : CONFIG.theme.btn;
      });
      onSwitch(i);
    });
    serverButtons.push(btn);
    serverGroup.appendChild(btn);
  });

  const spacer = el("div");
  Object.assign(spacer.style, { flex: "1 1 auto" });

  // Favori kalp
  const favKey = "fav-games";
  let favs = new Set(JSON.parse(localStorage.getItem(favKey) || "[]"));
  function makeFavorite(slug) {
    const isFav = favs.has(slug);
    const { btn, render } = heartButton(isFav);
    btn.addEventListener("click", () => {
      const now = !favs.has(slug);
      render(now);
      if (now) favs.add(slug);
      else favs.delete(slug);
      localStorage.setItem(favKey, JSON.stringify(Array.from(favs)));
    });
    return btn;
  }

  function iconBtn(title, pathD) {
    const SVG_NS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");

    const path = document.createElementNS(SVG_NS, "path");
    path.setAttribute("d", pathD);
    path.setAttribute("stroke", CONFIG.theme.text);
    path.setAttribute("stroke-width", "1.8");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");

    svg.appendChild(path);

    const b = el("button", { type: "button", title }, [svg]);
    Object.assign(b.style, {
      width: "34px",
      height: "34px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: CONFIG.theme.btn,
      border: `1px solid ${CONFIG.theme.border}`,
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background .2s",
    });
    b.addEventListener("mouseenter", () => (b.style.background = CONFIG.theme.btnActive));
    b.addEventListener("mouseleave", () => (b.style.background = CONFIG.theme.btn));
    return b;
  }

  const fullBtn = iconBtn("Fullscreen", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M8 21H5a2 2 0 0 1-2-2v-3m18 0v3a2 2 0 0 1-2 2h-3");
  const shareBtn = iconBtn("Share", "M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M16 6l-4-4-4 4M12 2v14");

  bar.appendChild(logoBox);
  bar.appendChild(serversLabel);
  bar.appendChild(serverGroup);
  bar.appendChild(spacer);

  return { bar, makeFavorite, fullBtn, shareBtn };
}

// Embed
async function initEmbeds() {
  const containers = document.querySelectorAll("[data-game]");
  if (!containers.length) return;

  // Opsiyonel JSON: slug -> extra servers
  let extraMap = null;
  try {
    const res = await fetch(CONFIG.jsonUrl, { cache: "no-store" });
    if (res.ok) {
      const list = await res.json();
      extraMap = new Map(list.map((g) => [g.slug, g.servers ? Object.values(g.servers) : []]));
    }
  } catch {}

  containers.forEach((container) => {
    const slug = container.getAttribute("data-game");

    // Sunucu listesi
    const jsonServers = (extraMap?.get(slug) || []).map((u) => String(u).replace(/\/$/, ""));
    const mirrors = CONFIG.defaultServers.slice();
    const servers = [...jsonServers.map((u) => ({ url: u, direct: true })), ...mirrors.map((u) => ({ url: u, direct: false }))];

    const initialIndex = 0;

    // Oyun wrapper
    const iframe = el("iframe", { frameborder: "0", scrolling: "no", title: slug });
    Object.assign(iframe.style, { width: "100%", height: "100%", border: "0", display: "block" });
    allowFullscreen(iframe);
    const { wrapper, inner } = ratioWrap();
    inner.appendChild(iframe);
    container.replaceChildren(wrapper);

    // Yükleme ve fallback
    function loadServer(idx) {
      const srv = servers[idx];
      if (!srv) return;
      if (srv.direct) {
        iframe.src = srv.url;
      } else {
        const [first, second] = buildMirrorCandidates(srv.url, slug);
        iframe.src = first;
        iframe.addEventListener(
          "error",
          () => {
            if (iframe.src !== second) iframe.src = second;
          },
          { once: true }
        );
      }
    }
    loadServer(initialIndex);

    // Kardeş kontroller host'u
    const controlsHost = el("div", { class: "game-controls-host" });
    Object.assign(controlsHost.style, { width: "100%" });
    insertAfter(container, controlsHost);

    // Kontrolleri oluştur
    const { bar, makeFavorite, fullBtn, shareBtn } = buildControls({
      servers: servers.map((s) => s.url),
      initialServerIndex: initialIndex,
    });

    // Server butonları
    const serverButtons = bar.querySelectorAll(".server-group > button");
    serverButtons.forEach((btn, i) => {
      btn.addEventListener("click", () => loadServer(i));
    });

    // Favori
    const favBtn = makeFavorite(slug);
    bar.appendChild(favBtn);

    // Fullscreen toggle mantığı
    let fsGroup = null; // Geçici fullscreen grubu için referans
    const originalGameParent = container;
    const originalBarParent = controlsHost;

    function restoreElements() {
      // Elemanları orijinal pozisyonlarına geri koy
      if (fsGroup && fsGroup.parentNode) {
        originalGameParent.appendChild(wrapper);
        originalBarParent.appendChild(bar);
        fsGroup.remove();
        fsGroup = null;
      }
    }

    // Fullscreen change event listener (ESC ile çıkış için)
    document.addEventListener("fullscreenchange", () => {
      if (!isFullscreen()) {
        restoreElements();
      }
    });

    // Webkit prefix için
    document.addEventListener("webkitfullscreenchange", () => {
      if (!isFullscreen()) {
        restoreElements();
      }
    });

    // Fullscreen butonu
    fullBtn.addEventListener("click", () => {
      if (isFullscreen()) {
        // Fullscreen aktifse çık
        exitFullscreen();
        restoreElements();
      } else {
        // Fullscreen'e gir
        if (CONFIG.fullscreenMode === "together") {
          fsGroup = el("div", { class: "fs-group" });
          Object.assign(fsGroup.style, {
            background: CONFIG.theme.bg,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            gap: "10px",
          });

          // Wrapper ve bar'ı gruba taşı
          fsGroup.appendChild(wrapper);
          fsGroup.appendChild(bar);
          document.body.appendChild(fsGroup);

          requestFullscreen(fsGroup);
        } else {
          requestFullscreen(wrapper);
        }
      }
    });
    bar.appendChild(fullBtn);

    // Share
    shareBtn.addEventListener("click", async () => {
      const url = location.href;
      const title = slug;
      if (navigator.share) {
        try {
          await navigator.share({ title, url });
        } catch {}
      } else {
        try {
          await navigator.clipboard?.writeText(url);
        } catch {}
      }
      bar.style.boxShadow = `0 0 0 2px ${CONFIG.theme.accentActive} inset`;
      setTimeout(() => (bar.style.boxShadow = "none"), 500);
    });

    // Kontrolleri host'a ekle
    controlsHost.replaceChildren(bar);
  });
}

document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initEmbeds) : initEmbeds();
