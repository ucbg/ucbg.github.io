document.addEventListener("DOMContentLoaded", function () {
  // Yorum konteynırını bul
  const commentContainer = document.querySelector(".fc-comment-container");
  if (!commentContainer) return;

  // Firebase konfigürasyonu
  const firebaseConfig = {
    apiKey: "AIzaSyDx101DUQr-LvhW8K7woVJ58_a74TkkgJM",
    authDomain: "ucbgcomment.firebaseapp.com",
    projectId: "ucbgcomment",
    storageBucket: "ucbgcomment.appspot.com",
    messagingSenderId: "1006694508007",
    appId: "1:1006694508007:web:9f3a4413dbdeacfeee0942",
  };

  // Firebase'i başlat
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();

  // Element referansları
  const commentsDiv = commentContainer.querySelector(".fc-comments");
  const loadingMessage = commentContainer.querySelector(".fc-info-message");
  const sendBtn = commentContainer.querySelector("#fc-sendBtn");
  const commentText = commentContainer.querySelector("#fc-commentText");
  const nicknameInput = commentContainer.querySelector("#fc-nickname");
  const messageDiv = commentContainer.querySelector(".fc-message");
  const textError = commentContainer.querySelector(".fc-error-message");
  const spinner = commentContainer.querySelector(".fc-spinner");

  // Sayfa ID'sini al
  const pageId = window.location.pathname.replace(/\/$/, "") || "/";

  // Yorumları yükle
  function loadComments() {
    const q = db.collection("comments").where("page", "==", pageId).orderBy("date", "desc");

    loadingMessage.style.display = "block";

    q.onSnapshot(
      (snapshot) => {
        loadingMessage.style.display = "none";

        if (snapshot.empty) {
          commentsDiv.innerHTML = '<div class="fc-no-comments">No comments yet. Be the first to comment!</div>';
          return;
        }

        let html = "";
        snapshot.forEach((doc) => {
          const comment = doc.data();
          const commentDate = comment.date.toDate ? comment.date.toDate() : comment.date;

          html += `
          <div class="fc-comment">
            <div class="fc-comment-header-inner">
              <span class="fc-comment-author">${comment.nickname || "Anonymous"}</span>
              <span class="fc-comment-date">${new Date(commentDate).toLocaleString()}</span>
            </div>
            <div class="fc-comment-content">${comment.text}</div>
          </div>
        `;
        });

        commentsDiv.innerHTML = html;
      },
      (error) => {
        console.error("Error loading comments:", error);
        loadingMessage.textContent = "Error loading comments. Please try again.";
        loadingMessage.className = "fc-error-message";
      }
    );
  }

  // Yorum gönderme işlevi
  if (sendBtn) {
    sendBtn.addEventListener("click", async function () {
      const nickname = nicknameInput.value.trim();
      const text = commentText.value.trim();

      if (!text) {
        textError.style.display = "block";
        return;
      }

      // Gönderim durumunu ayarla
      sendBtn.disabled = true;
      spinner.style.display = "inline-block";
      sendBtn.querySelector("span").textContent = "Submitting...";

      try {
        // Cloud Function URL
        const response = await fetch("https://addcomment-rfkgsqj4ya-uc.a.run.app", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Origin: "https://ucbg.github.io",
          },
          body: JSON.stringify({
            pageId: pageId,
            nickname: nickname,
            text: text,
          }),
        });

        const data = await response.json();

        if (data.success) {
          // Başarılı gönderim
          commentText.value = "";
          messageDiv.textContent = "✓ Comment submitted successfully!";
          messageDiv.className = "fc-message fc-success-message";
          messageDiv.style.display = "block";

          // Yorumları yeniden yükle
          loadComments();
        } else {
          // Hata durumu
          messageDiv.textContent = "Error: " + (data.error || "Unknown error");
          messageDiv.className = "fc-message fc-error-message";
          messageDiv.style.display = "block";
        }
      } catch (err) {
        messageDiv.textContent = "Error: " + err.message;
        messageDiv.className = "fc-message fc-error-message";
        messageDiv.style.display = "block";
      } finally {
        // Durumu sıfırla
        sendBtn.disabled = false;
        spinner.style.display = "none";
        sendBtn.querySelector("span").textContent = "Submit Comment";
      }
    });
  }

  // Yorumları yükle
  loadComments();
});
