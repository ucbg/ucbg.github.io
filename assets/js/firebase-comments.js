// Firebase Comment System Integration Script
document.addEventListener("DOMContentLoaded", function () {
  // Find all firebaseComment containers
  const commentContainers = document.querySelectorAll(".firebaseComment");

  if (commentContainers.length === 0) return;

  // Inject the comment system HTML
  commentContainers.forEach((container) => {
    container.innerHTML = `
        <div class="comment-header">
          <h2><i class="fas fa-comments"></i> Comments</h2>
          <p class="subtitle">Share your thoughts about this page</p>
        </div>
        
        <div id="comments-container">
          <div id="comments">Loading comments...</div>
          <div id="loading-message" class="info-message">Loading comments...</div>
        </div>
        
        <div id="comment-form">
          <h2><i class="fas fa-pen"></i> Add a Comment</h2>
          <div class="form-group">
            <label for="nickname">Nickname (optional)</label>
            <input type="text" id="nickname" placeholder="Your name or nickname">
          </div>
          
          <div class="form-group">
            <label for="commentText">Your Comment <span style="color:var(--error-color)">*</span></label>
            <textarea id="commentText" placeholder="Write your thoughts here..." required></textarea>
            <div id="text-error" class="error-message">Please write your comment</div>
          </div>
          
          <button id="sendBtn">
            <div class="spinner"></div>
            <span>Submit Comment</span>
          </button>
          <div id="submit-message" class="message"></div>
        </div>
      `;

    // Initialize the comment system
    initCommentSystem(container);
  });
});

function initCommentSystem(container) {
  // Select elements within the container
  const commentsDiv = container.querySelector("#comments");
  const textError = container.querySelector("#text-error");
  const submitMessage = container.querySelector("#submit-message");
  const loadingMessage = container.querySelector("#loading-message");
  const sendBtn = container.querySelector("#sendBtn");
  const commentText = container.querySelector("#commentText");
  const nicknameInput = container.querySelector("#nickname");

  let spinner, buttonText;
  if (sendBtn) {
    spinner = sendBtn.querySelector(".spinner");
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
    loadingMessage.className = "message info-message";

    // Firestore query
    const q = db.collection("comments").where("page", "==", pageId).orderBy("date", "desc");

    q.onSnapshot(
      (snapshot) => {
        isLoading = false;
        loadingMessage.style.display = "none";

        if (snapshot.empty) {
          commentsDiv.innerHTML = '<div class="no-comments">No comments yet. Be the first to comment!</div>';
          return;
        }

        let html = "";
        snapshot.forEach((doc) => {
          const comment = doc.data();
          const commentDate = comment.date.toDate ? comment.date.toDate() : comment.date;

          html += `
            <div class="comment">
              <div class="comment-header-inner">
                <span class="comment-author">${comment.nickname || "Anonymous"}</span>
                <span class="comment-date">${formatDate(commentDate)}</span>
              </div>
              <div class="comment-content">${comment.text}</div>
            </div>
          `;
        });

        commentsDiv.innerHTML = html;
      },
      (error) => {
        console.error("Error loading comments:", error);
        isLoading = false;
        loadingMessage.textContent = "Error loading comments. Please try again.";
        loadingMessage.className = "message error-message";
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
            submitMessage.className = "message success-message";
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
            submitMessage.className = "message error-message";
            submitMessage.style.display = "block";
          }
        }
      } catch (err) {
        // Network error
        console.error("Submission error:", err);
        if (submitMessage) {
          submitMessage.textContent = "Error: " + (err.message || "Could not connect to server");
          submitMessage.className = "message error-message";
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
