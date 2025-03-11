function loadGoogleAnalytics(id) {
  // Google tag (gtag.js)
  var firstScript = document.getElementsByTagName("script")[0];
  let newScript = document.createElement("script");
  newScript.async = true;
  newScript.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
  firstScript.parentNode.insertBefore(newScript, firstScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", id);
}

window.addEventListener("load", function () {
  if (navigator.webdriver) {
    console.log("Bot Browser");
    loadGoogleAnalytics("G-ZV6ZQ5BY4B");
  } else {
    console.log("Human Browser");
    loadGoogleAnalytics("G-T445XL67R6");
  }
});
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

function getDomain() {
  return window.location.origin.replace(/https?:\/\//, "");
}

async function generateHash(text1, text2, domain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text1 + text2 + domain);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
    .substring(0, 16);
}

// Geçerli hash değerlerinin listesi
const validHashes = [
  "19a8a8ffcefe6162",
  "63e7208c2ddc1f1d",
  "7f8e2a1c4b6d3f9a",
  "abcdef1234567890", // Buraya ek hashler ekleyebilirsin
];

async function checkAccess() {
  let json1 = await fetchJson("/data-json/auth1.json");
  let json2 = await fetchJson("/data-json/auth2.json");

  if (!json1 || !json2) {
    document.body.innerHTML = "<h1>Erişim Engellendi</h1>";
    return;
  }

  let domain = getDomain();

  let expectedHash = await generateHash(json1.text, json2.text, domain);

  if (!validHashes.includes(expectedHash)) {
    console.log("Geçersiz Hash");
    document.body.innerHTML = "<h1>Erişim Engellendi</h1>";

    setTimeout(function () {
      window.location.href = "https://ucbg.github.io";
    }, 1000);
  } else {
    console.log("Erişim Onaylandı");
  }
}

checkAccess();
