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
    loadGoogleAnalytics("G-31Y2TCV8JL");
  } else {
    console.log("Human Browser");
    loadGoogleAnalytics("G-31Y2TCV8JL");
  }
});
