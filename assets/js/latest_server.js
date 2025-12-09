// Replace placeholders with the real address if your backend provides it.
const realLatest = "https://ucbg.github.io"; // <-- PUT REAL URL HERE

// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  const latestLink = document.getElementById("latest-link");
  const visitBtn = document.getElementById("visit-btn");

  if (latestLink) {
    latestLink.href = realLatest;
  }

  if (visitBtn) {
    visitBtn.href = realLatest;

    // Small friendly accessibility tweak: announce if no real link is provided.
    if (realLatest === "#" || realLatest.includes("example.com")) {
      visitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Oops — the real latest address hasn't been set yet. Replace `realLatest` in the HTML with your current URL.");
      });
    }
  }
});
