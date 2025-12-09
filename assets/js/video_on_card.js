//video on card
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".card").forEach((card) => {
    const video = card.querySelector("video");
    if (video) {
      card.addEventListener("mouseenter", () => {
        video.play();
      });
      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
  
  // Sistem kontrolü
  if (typeof crayzgames === "function") {
    setTimeout(() => crayzgames(), Math.random() * 3000);
  }
});
