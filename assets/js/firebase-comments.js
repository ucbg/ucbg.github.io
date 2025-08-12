// Firebase Comment System Integration Script
document.addEventListener("DOMContentLoaded", function () {
  // Find all firebaseComment containers
  const commentContainers = document.querySelectorAll(".firebaseComment");

  if (commentContainers.length === 0) return;

  // Inject the comment system HTML
  commentContainers.forEach((container) => {
    container.innerHTML = `
        <div class="fc-comment-header">
          <h2><i class="fas fa-comments"></i> Comments</h2>
          <p class="subtitle">Share your thoughts about this page</p>
        </div>
        
        <div class="fc-comments-container">
          <div class="fc-comments">Loading comments...</div>
          <div class="fc-info-message">Loading comments...</div>
        </div>
        
        <div class="fc-comment-form">
          <h2><i class="fas fa-pen"></i> Add a Comment</h2>
          <div class="fc-form-group">
            <label for="fc-nickname">Nickname (optional)</label>
            <input type="text" id="fc-nickname" placeholder="Your name or nickname">
          </div>
          
          <div class="fc-form-group">
            <label for="fc-commentText">Your Comment <span style="color:var(--fc-error-color)">*</span></label>
            <textarea id="fc-commentText" placeholder="Write your thoughts here..." required></textarea>
            <div class="fc-error-message">Please write your comment</div>
          </div>
          
          <button id="fc-sendBtn">
            <div class="fc-spinner"></div>
            <span>Submit Comment</span>
          </button>
          <div class="fc-message"></div>
        </div>
      `;

    // Initialize the comment system
    initCommentSystem(container);
  });
});

function initCommentSystem(container) {
  // Select elements within the container
  const commentsDiv = container.querySelector(".fc-comments");
  const textError = container.querySelector(".fc-error-message");
  const submitMessage = container.querySelector(".fc-message");
  const loadingMessage = container.querySelector(".fc-info-message");
  const sendBtn = container.querySelector("#fc-sendBtn");
  const commentText = container.querySelector("#fc-commentText");
  const nicknameInput = container.querySelector("#fc-nickname");

  let spinner, buttonText;
  if (sendBtn) {
    spinner = sendBtn.querySelector(".fc-spinner");
    buttonText = sendBtn.querySelector("span");
  }

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDx101DUQr-LvhW8K7woVJ58_a74TkkgJM",
    authDomain: "ucbgcomment.firebaseapp.com",
    projectId: "ucbgcomment",
    storageBucket: "ucbgcomment.appspot.com",
    messagingSenderId: "1006694508007",
    appId: "1:1006694508007:web:9f3a4413dbdeacfeee0942",
  };

  // Initialize Firebase only once
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const db = firebase.firestore();

  // Get page ID from URL
  const pageId = window.location.pathname.replace(/\/$/, "") || "/";

  // Loading state
  let isLoading = false;

  // Format date
  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  }

  // Load comments
  function loadComments() {
    isLoading = true;
    loadingMessage.style.display = "block";
    loadingMessage.textContent = "Loading comments...";
    loadingMessage.className = "fc-message fc-info-message";

    // Firestore query
    const q = db.collection("comments").where("page", "==", pageId).orderBy("date", "desc");

    q.onSnapshot(
      (snapshot) => {
        isLoading = false;
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
                  <span class="fc-comment-date">${formatDate(commentDate)}</span>
                </div>
                <div class="fc-comment-content">${comment.text}</div>
              </div>
            `;
        });

        commentsDiv.innerHTML = html;
      },
      (error) => {
        console.error("Error loading comments:", error);
        isLoading = false;
        loadingMessage.textContent = "Error loading comments. Please try again.";
        loadingMessage.className = "fc-message fc-error-message";
        loadingMessage.style.display = "block";
      }
    );
  }

  // Form validation
  function validateForm() {
    let isValid = true;
    if (submitMessage) {
      submitMessage.textContent = "";
      submitMessage.style.display = "none";
    }

    // Validate comment text
    if (!commentText.value.trim()) {
      textError.textContent = "Please write your comment";
      textError.style.display = "block";
      isValid = false;
    } else {
      textError.style.display = "none";
    }

    // Update button state
    if (sendBtn) {
      sendBtn.disabled = !isValid;
    }

    return isValid;
  }

  // Cloud Function URL
  const functionUrl = "https://addcomment-rfkgsqj4ya-uc.a.run.app";

  // Submit comment
  if (sendBtn) {
    sendBtn.addEventListener("click", async () => {
      if (!validateForm()) return;

      const nickname = nicknameInput.value.trim();
      const text = commentText.value.trim();

      // Set submitting state
      sendBtn.disabled = true;
      spinner.style.display = "block";
      buttonText.textContent = "Submitting...";
      if (submitMessage) {
        submitMessage.textContent = "";
        submitMessage.style.display = "none";
      }

      try {
        const response = await fetch(functionUrl, {
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
          mode: "cors",
        });

        // Process response
        const responseText = await response.text();
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          console.error("JSON parse error:", e, "Response:", responseText);
          throw new Error(`Invalid server response: ${responseText.substring(0, 100)}`);
        }

        if (response.ok && data.success) {
          // Successful submission
          commentText.value = "";
          if (submitMessage) {
            submitMessage.textContent = "✓ Comment submitted successfully!";
            submitMessage.className = "fc-message fc-success-message";
            submitMessage.style.display = "block";
          }

          // Reload comments
          loadComments();

          // Hide success message after 3 seconds
          setTimeout(() => {
            if (submitMessage) {
              submitMessage.style.display = "none";
            }
          }, 3000);
        } else {
          // Server error
          const errorMsg = data.error || `HTTP Error: ${response.status}`;
          if (submitMessage) {
            submitMessage.textContent = "Error: " + errorMsg;
            submitMessage.className = "fc-message fc-error-message";
            submitMessage.style.display = "block";
          }
        }
      } catch (err) {
        // Network error
        console.error("Submission error:", err);
        if (submitMessage) {
          submitMessage.textContent = "Error: " + (err.message || "Could not connect to server");
          submitMessage.className = "fc-message fc-error-message";
          submitMessage.style.display = "block";
        }
      } finally {
        // Reset state
        if (sendBtn) {
          sendBtn.disabled = false;
        }
        if (spinner) {
          spinner.style.display = "none";
        }
        if (buttonText) {
          buttonText.textContent = "Submit Comment";
        }
      }
    });
  }

  // Form input listeners
  if (commentText) {
    commentText.addEventListener("input", validateForm);
  }
  if (nicknameInput) {
    nicknameInput.addEventListener("input", validateForm);
  }

  // Load comments on page load
  loadComments();

  // Validate form on load
  setTimeout(validateForm, 100);
}
