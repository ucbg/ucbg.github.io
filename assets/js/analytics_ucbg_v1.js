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

function generateHash(text1, text2, domain) {
  let combined = text1 + text2 + domain;
  return btoa(combined).substring(0, 16); // Basit bir hash üretimi (Base64 ve kesme işlemi)
}

async function checkAccess() {
  let json1 = await fetchJson("/data-json/auth1.json");
  let json2 = await fetchJson("/data-json/auth2.json");
  if (!json1 || !json2) {
    document.body.innerHTML = "<h1>Erişim Engellendi</h1>";
    return;
  }

  let domain = getDomain();
  let expectedHash = generateHash(json1.text, json2.text, domain);
  let validHash = "ÖNCEDEN_BELİRLENMİŞ_HASH"; // Önceden belirlenmiş doğru hash değeri

  if (expectedHash !== validHash) {
    document.body.innerHTML = "<h1>Erişim Engellendi</h1>";
  }
}

checkAccess();
