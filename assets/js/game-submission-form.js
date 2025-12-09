/**
 * Game Submission Form Handler
 * UCBG - Unblocked Cool Browser Games
 */

// Form yüklenme zamanını kaydet (spam koruması için)
window.gameFormLoadTime = new Date().toISOString();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gameSubmissionForm");
  const submitButton = document.getElementById("submitButton");
  const submitButtonText = document.getElementById("submitButtonText");
  const submitButtonSpinner = document.getElementById("submitButtonSpinner");
  const responseMessage = document.getElementById("responseMessage");
  const serverLinksContainer = document.getElementById("serverLinksContainer");
  const shortDescTextarea = document.getElementById("shortDescription");
  const shortDescCount = document.getElementById("shortDescCount");

  // Spam koruması: Buton devre dışı (5 saniye - form daha uzun)
  submitButton.disabled = true;
  setTimeout(() => {
    submitButton.disabled = false;
  }, 5000);

  // Character counter for short description
  shortDescTextarea.addEventListener("input", function () {
    shortDescCount.textContent = this.value.length;
  });

  // Add server link functionality
  serverLinksContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-server-link")) {
      const newLinkItem = document.createElement("div");
      newLinkItem.className = "server-link-item mb-2";
      newLinkItem.style.cssText = "display: flex; gap: 10px; align-items: center;";
      newLinkItem.innerHTML = `
        <input 
          type="url" 
          class="form-control server-link-input" 
          name="serverLinks[]" 
          placeholder="https://example.com/game"
          required
          style="padding: 12px; border-radius: 8px; border: 1px solid var(--bs-gray-400); flex: 1; background-color: #073858; color: white;"
        />
        <button 
          type="button" 
          class="btn btn-danger remove-server-link" 
          style="padding: 12px 20px; border-radius: 8px; background-color: var(--bs-danger); border: none; color: white; font-weight: 600; cursor: pointer; min-width: 45px;"
        >
          −
        </button>
      `;
      serverLinksContainer.appendChild(newLinkItem);
    } else if (e.target.classList.contains("remove-server-link")) {
      e.target.closest(".server-link-item").remove();
    }
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate form
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Collect server links
    const serverLinkInputs = document.querySelectorAll(".server-link-input");
    const serverLinks = Array.from(serverLinkInputs)
      .map((input) => input.value.trim())
      .filter((link) => link !== "");

    if (serverLinks.length === 0) {
      showMessage("Please add at least one server link.", "error");
      return;
    }

    // Prepare form data
    const formData = {
      userName: document.getElementById("userName").value.trim(),
      userEmail: document.getElementById("userEmail").value.trim(),
      gameName: document.getElementById("gameName").value.trim(),
      categories: document
        .getElementById("categories")
        .value.trim()
        .split(",")
        .map((c) => c.trim()),
      tags: document
        .getElementById("tags")
        .value.trim()
        .split(",")
        .map((t) => t.trim()),
      images: document
        .getElementById("images")
        .value.trim()
        .split(",")
        .map((i) => i.trim()),
      shortDescription: document.getElementById("shortDescription").value.trim(),
      longDescription: document.getElementById("longDescription").value.trim(),
      howToPlay: document.getElementById("howToPlay").value.trim(),
      serverLinks: serverLinks,
      formLoadTime: window.gameFormLoadTime || new Date().toISOString(),
      website: "", // Honeypot field (should be empty)
    };

    // Show loading state
    submitButton.disabled = true;
    submitButtonText.style.display = "none";
    submitButtonSpinner.style.display = "inline-block";
    responseMessage.style.display = "none";

    // AJAX request (v2 = database version)
    const BACKEND_URL = "https://user.ucbg.online/contact-api/submit-game.php";

    fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Success
        showMessage(data.message || "Game submitted successfully! We will review your submission and get back to you soon.", "success");
        form.reset();
        shortDescCount.textContent = "0";

        // Reset server links to just one
        serverLinksContainer.innerHTML = `
          <div class="server-link-item mb-2" style="display: flex; gap: 10px; align-items: center;">
            <input 
              type="url" 
              class="form-control server-link-input" 
              name="serverLinks[]" 
              placeholder="https://example.com/game"
              required
              style="padding: 12px; border-radius: 8px; border: 1px solid var(--bs-gray-400); flex: 1; background-color: #073858; color: white;"
            />
            <button 
              type="button" 
              class="btn btn-success add-server-link" 
              style="padding: 12px 20px; border-radius: 8px; background-color: var(--bs-success); border: none; color: white; font-weight: 600; cursor: pointer; min-width: 45px;"
            >
              +
            </button>
          </div>
        `;
      })
      .catch((error) => {
        // Error
        console.error("Error:", error);
        
        // Rate limit hatası kontrolü
        if (error.message && error.message.includes("429")) {
          showMessage("You've submitted too many games. Please wait before trying again.", "error");
        } else {
          showMessage("An error occurred while submitting your game. Please try again later or contact us directly at cricoverteam@gmail.com", "error");
        }
      })
      .finally(() => {
        // Reset button state
        submitButton.disabled = false;
        submitButtonText.style.display = "inline-block";
        submitButtonSpinner.style.display = "none";
      });
  });

  // Show message function
  function showMessage(message, type) {
    responseMessage.textContent = message;
    responseMessage.style.display = "block";

    if (type === "success") {
      responseMessage.style.backgroundColor = "rgba(28, 189, 100, 0.1)";
      responseMessage.style.border = "1px solid rgba(28, 189, 100, 0.3)";
      responseMessage.style.color = "var(--bs-success)";
    } else {
      responseMessage.style.backgroundColor = "rgba(223, 50, 92, 0.1)";
      responseMessage.style.border = "1px solid rgba(223, 50, 92, 0.3)";
      responseMessage.style.color = "var(--bs-danger)";
    }

    // Scroll to message
    responseMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});
