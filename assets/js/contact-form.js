/**
 * Contact Form Handler
 * UCBG - Unblocked Cool Browser Games
 */

// Form yüklenme zamanını kaydet (spam koruması için)
window.contactFormLoadTime = new Date().toISOString();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("contactSubmitButton");
  const submitButtonText = document.getElementById("contactSubmitButtonText");
  const submitButtonSpinner = document.getElementById("contactSubmitButtonSpinner");
  const responseMessage = document.getElementById("contactResponseMessage");
  const messageTextarea = document.getElementById("message");
  const messageCount = document.getElementById("messageCount");

  // Spam koruması: Buton devre dışı (2 saniye)
  submitButton.disabled = true;
  setTimeout(() => {
    submitButton.disabled = false;
  }, 2000);

  // Character counter for message
  messageTextarea.addEventListener("input", function () {
    messageCount.textContent = this.value.length;
  });

  // DMCA/Copyright handling
  const requestTypeSelect = document.getElementById("requestType");
  const messageGroup = messageTextarea.closest(".form-group");
  const dmcaNotice = document.createElement("div");
  dmcaNotice.className = "alert alert-warning";
  dmcaNotice.style.cssText = "background-color: rgba(255, 193, 7, 0.1); border: 1px solid rgba(255, 193, 7, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 20px; display: none;";
  dmcaNotice.innerHTML = `
    <h6 style="color: #f57c00; margin-bottom: 10px; font-weight: 600;">⚠️ Copyright / DMCA Request</h6>
    <p style="margin-bottom: 8px; font-size: 14px;">
      For copyright or DMCA-related requests, please contact us directly via email instead of using this form:
    </p>
    <p style="margin-bottom: 8px; font-size: 14px;">
      📧 <a href="mailto:cricoverteam@gmail.com" style="color: #f57c00; text-decoration: none; font-weight: 600;">cricoverteam@gmail.com</a>
    </p>
    <p style="margin-bottom: 0; font-size: 13px; color: var(--bs-gray-700);">
      <strong>Important:</strong> Please use your official email address and include:
    </p>
    <ul style="font-size: 13px; margin-top: 8px; margin-bottom: 0;">
      <li>Your contact information and proof of ownership</li>
      <li>Detailed description of the copyrighted content</li>
      <li>URL(s) of the content in question</li>
      <li>A statement of good faith belief</li>
    </ul>
    <p style="margin-top: 10px; margin-bottom: 0; font-size: 13px; color: var(--bs-gray-700);">
      We will process your request within 24-48 hours.
    </p>
  `;
  messageGroup.parentNode.insertBefore(dmcaNotice, messageGroup);

  requestTypeSelect.addEventListener("change", function () {
    if (this.value === "copyright") {
      // DMCA seçildi - message alanını gizle, uyarı göster
      messageGroup.style.display = "none";
      dmcaNotice.style.display = "block";
      messageTextarea.removeAttribute("required");
      submitButton.disabled = true;
      submitButton.style.opacity = "0.5";
      submitButton.style.cursor = "not-allowed";
    } else {
      // Diğer seçenekler - normal davranış
      messageGroup.style.display = "block";
      dmcaNotice.style.display = "none";
      messageTextarea.setAttribute("required", "required");
      submitButton.disabled = false;
      submitButton.style.opacity = "1";
      submitButton.style.cursor = "pointer";
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

    // Prepare form data
    const formData = {
      name: document.getElementById("contactName").value.trim(),
      email: document.getElementById("contactEmail").value.trim(),
      requestType: document.getElementById("requestType").value,
      message: document.getElementById("message").value.trim(),
      timestamp: new Date().toISOString(),
      formLoadTime: window.contactFormLoadTime || new Date().toISOString(),
      website: "", // Honeypot field (should be empty)
    };

    // Show loading state
    submitButton.disabled = true;
    submitButtonText.style.display = "none";
    submitButtonSpinner.style.display = "inline-block";
    responseMessage.style.display = "none";

    // AJAX request (v2 = database version)
    const BACKEND_URL = "https://user.ucbg.online/contact-api/contact.php";

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
        showMessage(data.message || "Thank you for contacting us! We have received your message and will get back to you soon.", "success");
        form.reset();
        messageCount.textContent = "0";
      })
      .catch((error) => {
        // Error
        console.error("Error:", error);
        
        // Rate limit hatası kontrolü
        if (error.message && error.message.includes("429")) {
          showMessage("You've sent too many messages. Please wait before trying again.", "error");
        } else {
          showMessage("An error occurred while sending your message. Please try again later or contact us directly at cricoverteam@gmail.com", "error");
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
