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

// Fetch valid hash values from a JSON file
async function fetchValidHashes() {
  try {
    let response = await fetch("/data-json/validHashes.json");
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to fetch valid hashes");
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function checkAccess() {
  let json1 = await fetchJson("/data-json/auth1.json");
  let json2 = await fetchJson("/data-json/auth2.json");

  if (!json1 || !json2) {
    document.body.innerHTML = "<h1>Erişim Engellendi</h1>";
    return;
  }

  let domain = getDomain();

  let expectedHash = await generateHash(json1.text, json2.text, domain);

  let validHashes = await fetchValidHashes();

  if (!validHashes.includes(expectedHash)) {
    setTimeout(function () {
      window.location.href = "https://ucbg.github.io";
    }, 500);
  } else {
    console.log("Erişim Onaylandı");
  }
}

checkAccess();
