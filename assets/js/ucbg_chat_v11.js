// API Config
const API_BASE_URL = "https://silecekci.com/chat-api";
const ACTIVE_POLL_INTERVAL = 2500;
const BACKGROUND_POLL_INTERVAL = 5000;
const PAGE_SIZE = 30; // initial load and older-page size
const TOP_TRIGGER_PX = 100; // top region to trigger loading older
const RESET_TRIGGER_PX = 250; // scroll-away distance to re-arm trigger

// Cookies
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

function setIntCookie(name, value, days = 365) {
  setCookie(name, String(value), days);
}

function getIntCookie(name, def = 0) {
  const v = parseInt(getCookie(name), 10);
  return Number.isFinite(v) ? v : def;
}

// Escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "'");
}

document.addEventListener("DOMContentLoaded", async () => {
  const chatButton = document.getElementById("chat-button");
  let user = getCookie("chatNick") || "";

  if (getComputedStyle(chatButton).position === "static") {
    chatButton.style.position = "relative";
  }

  // Drawer
  const drawer = document.createElement("div");
  drawer.style.cssText = `
    position: fixed;
    top: 80px;
    bottom: 0px;
    right: 0;
    width: 320px;
    background-color: #fff;
    box-shadow: -4px 0 12px rgba(0,0,0,0.2);
    border-radius: 10px 0 0 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  // Header
  const header = document.createElement("div");
  header.textContent = "TROLLBOX";
  header.style.cssText = `
    background: #e8e8e8;
    color: #555;
    padding: 6px;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #ccc;
  `;
  drawer.appendChild(header);

  // Nick overlay
  const nickContainer = document.createElement("div");
  nickContainer.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${user ? "none" : "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,0.95);
    z-index: 2000;
    gap: 10px;
  `;

  const nickInput = document.createElement("input");
  nickInput.type = "text";
  nickInput.placeholder = "Enter your nickname...";
  nickInput.style.cssText = `
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 80%;
  `;

  const nickSaveButton = document.createElement("button");
  nickSaveButton.textContent = "Save";
  nickSaveButton.style.cssText = `
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #1976d2;
    color: #fff;
    cursor: pointer;
  `;

  nickContainer.appendChild(nickInput);
  nickContainer.appendChild(nickSaveButton);
  drawer.appendChild(nickContainer);

  // Messages area
  const messagesDiv = document.createElement("div");
  messagesDiv.style.cssText = `
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  `;
  drawer.appendChild(messagesDiv);

  // Input area
  const inputContainer = document.createElement("div");
  inputContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
  `;

  const msgInput = document.createElement("textarea");
  msgInput.placeholder = "Message… (Shift+Enter = new line)";
  msgInput.rows = 1;
  msgInput.style.cssText = `
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: none;
    font-family: inherit;
    font-size: 14px;
    max-height: 120px;
    overflow-y: auto;
  `;
  msgInput.addEventListener("input", () => {
    msgInput.style.height = "auto";
    msgInput.style.height = Math.min(msgInput.scrollHeight, 120) + "px";
  });

  const sendButton = document.createElement("button");
  sendButton.textContent = "Send";
  sendButton.style.cssText = `
    padding: 8px;
    border: none;
    border-radius: 8px;
    background-color: #1976d2;
    color: #fff;
    cursor: pointer;
  `;

  // Inline status (replaces alerts)
  const statusBar = document.createElement("div");
  statusBar.style.cssText = `
    display: none;
    font-size: 12px;
    padding: 6px 8px;
    border-radius: 8px;
    border: 1px solid transparent;
  `;
  let statusHideTimer = null;

  function showStatus(message, type = "info", timeout = 4000) {
    const palette = {
      info: { bg: "#eef5ff", fg: "#0b63c8", bd: "#bcd8ff" },
      warn: { bg: "#fff6e5", fg: "#9a6b00", bd: "#ffdfaa" },
      error: { bg: "#ffecec", fg: "#b40000", bd: "#ffb5b5" },
      ok: { bg: "#ecfff2", fg: "#0f7a3a", bd: "#b9f0cf" },
    };
    const p = palette[type] || palette.info;
    statusBar.textContent = message;
    statusBar.style.background = p.bg;
    statusBar.style.color = p.fg;
    statusBar.style.borderColor = p.bd;
    statusBar.style.display = "block";
    if (statusHideTimer) clearTimeout(statusHideTimer);
    statusHideTimer = setTimeout(() => {
      statusBar.style.display = "none";
    }, timeout);
  }

  // Button flash helper
  function flashButtonMessage(message, ms = 2000) {
    const now = Date.now();
    if (cooldownUntil && now < cooldownUntil) {
      showStatus(message, "error", ms);
      return;
    }
    const prev = sendButton.textContent;
    sendButton.textContent = message;
    try {
      sendButton.animate([{ transform: "scale(1)" }, { transform: "scale(0.98)" }, { transform: "scale(1)" }], { duration: 150, easing: "ease-out" });
    } catch (_) {}
    setTimeout(() => {
      if (!(cooldownUntil && Date.now() < cooldownUntil)) {
        sendButton.textContent = prev;
      }
    }, ms);
  }

  inputContainer.appendChild(msgInput);
  inputContainer.appendChild(sendButton);
  inputContainer.appendChild(statusBar);
  drawer.appendChild(inputContainer);
  document.body.appendChild(drawer);

  // Blur state
  function updateBlurState() {
    if (!user) {
      messagesDiv.style.filter = "blur(5px)";
      messagesDiv.style.opacity = "0.3";
      messagesDiv.style.pointerEvents = "none";
      inputContainer.style.filter = "blur(5px)";
      inputContainer.style.opacity = "0.3";
      inputContainer.style.pointerEvents = "none";
      nickContainer.style.display = "flex";
    } else {
      messagesDiv.style.filter = "none";
      messagesDiv.style.opacity = "1";
      messagesDiv.style.pointerEvents = "auto";
      inputContainer.style.filter = "none";
      inputContainer.style.opacity = "1";
      inputContainer.style.pointerEvents = "auto";
      nickContainer.style.display = "none";
    }
  }
  updateBlurState();

  // Badge
  const badge = document.createElement("span");
  badge.id = "chat-badge";
  badge.textContent = "0";
  badge.style.cssText = `
    position: absolute;
    top: 0px;
    right: 0px;
    background: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    display: none;
  `;
  chatButton.appendChild(badge);

  let isOpen = false;
  let unreadCount = getIntCookie("chatUnread", 0);
  let lastTimestamp = getIntCookie("lastTimestamp", 0);
  let oldestMessageId = 0;
  let pollInterval = null;
  let backgroundPollInterval = null;
  let isLoadingOlder = false;
  let hasMoreMessages = true;
  let canTriggerOlder = true; // single-fire gating for top region

  if (!user) {
    unreadCount = Math.max(unreadCount, 1);
    setIntCookie("chatUnread", unreadCount);
  }

  function showBadge() {
    if (unreadCount > 0) {
      badge.textContent = String(unreadCount);
      badge.style.display = "block";
    } else {
      badge.style.display = "none";
    }
  }
  showBadge();

  // Message element
  function createMessageElement(data, currentUser) {
    const msgWrapper = document.createElement("div");
    msgWrapper.style.cssText = `
      display: flex;
      flex-direction: column;
      margin-bottom: 8px;
      max-width: 80%;
    `;
    msgWrapper.setAttribute("data-msg-id", data.id);

    const userEl = document.createElement("div");
    userEl.textContent = escapeHtml(data.user);
    userEl.style.cssText = `
      font-size: 12px;
      margin-bottom: 2px;
      color: #555;
    `;

    const msgEl = document.createElement("div");
    msgEl.textContent = escapeHtml(data.text);
    msgEl.style.cssText = `
      padding: 6px 10px;
      border-radius: 12px;
      font-size: 14px;
      word-wrap: break-word;
      white-space: pre-wrap;
    `;

    if (data.user === currentUser) {
      msgWrapper.style.alignSelf = "flex-end";
      userEl.style.textAlign = "right";
      msgEl.style.backgroundColor = "#1976d2";
      msgEl.style.color = "#fff";
    } else {
      msgWrapper.style.alignSelf = "flex-start";
      userEl.style.textAlign = "left";
      msgEl.style.backgroundColor = "#e0e0e0";
      msgEl.style.color = "#000";
    }

    msgWrapper.appendChild(userEl);
    msgWrapper.appendChild(msgEl);
    return msgWrapper;
  }

  // Scroll helpers
  function isAtBottom() {
    return messagesDiv.scrollHeight - messagesDiv.scrollTop <= messagesDiv.clientHeight + 50;
  }

  function scrollToBottom(smooth = false) {
    requestAnimationFrame(() => {
      messagesDiv.scrollTo({
        top: messagesDiv.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
    });
  }

  // Oldest id on screen
  function getOldestDisplayedMessageId() {
    const messageElements = messagesDiv.querySelectorAll("[data-msg-id]");
    if (messageElements.length === 0) return 0;

    let oldestId = Infinity;
    messageElements.forEach((el) => {
      const id = parseInt(el.getAttribute("data-msg-id"));
      if (id < oldestId) oldestId = id;
    });

    return oldestId === Infinity ? 0 : oldestId;
  }

  // Fetch messages (initial + forward)
  async function fetchMessages(initial = false) {
    try {
      const url = initial ? `${API_BASE_URL}/fetch.php?limit=${PAGE_SIZE}` : `${API_BASE_URL}/fetch.php?since=${lastTimestamp}&limit=50`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data.success) {
        console.error("Fetch error:", data.error);
        showStatus("Could not load messages.", "error", 3000);
        return;
      }

      const userWasAtBottom = isAtBottom();

      if (initial) {
        messagesDiv.innerHTML = "";

        if (data.messages.length > 0) {
          let minId = Infinity;
          let maxTimestamp = 0;

          data.messages.forEach((msg) => {
            const el = createMessageElement(msg, user);
            messagesDiv.appendChild(el);

            maxTimestamp = Math.max(maxTimestamp, msg.timestamp);
            if (msg.id < minId) minId = msg.id;
          });

          lastTimestamp = maxTimestamp;
          oldestMessageId = minId;
          hasMoreMessages = oldestMessageId !== 1;
        } else {
          hasMoreMessages = false;
        }

        scrollToBottom(false);
      } else {
        if (data.messages.length > 0) {
          let newMessageCount = 0;

          data.messages.forEach((msg) => {
            if (!messagesDiv.querySelector(`[data-msg-id="${msg.id}"]`)) {
              const el = createMessageElement(msg, user);
              messagesDiv.appendChild(el);
              lastTimestamp = Math.max(lastTimestamp, msg.timestamp);
              if (!isOpen && msg.user !== user) newMessageCount++;
            }
          });

          if (newMessageCount > 0) {
            unreadCount += newMessageCount;
            setIntCookie("chatUnread", unreadCount);
            showBadge();
          }

          if (userWasAtBottom) scrollToBottom(true);
        }
      }

      setIntCookie("lastTimestamp", lastTimestamp);
    } catch (error) {
      console.error("Fetch error:", error);
      showStatus("Network error: failed to load messages.", "error", 3000);
    }
  }

  // Load older page
  async function loadOlderMessages() {
    const currentOldestId = getOldestDisplayedMessageId();

    if (isLoadingOlder || !hasMoreMessages || currentOldestId <= 1) {
      return;
    }

    isLoadingOlder = true;
    const scrollTopBefore = messagesDiv.scrollTop;

    try {
      const response = await fetch(`${API_BASE_URL}/fetch-older.php?before_id=${currentOldestId}&limit=${PAGE_SIZE}`);
      const data = await response.json();

      if (!data.success) {
        console.error("Load older error:", data.error);
        showStatus("Could not load older messages.", "error", 3000);
        return;
      }

      const incoming = Array.isArray(data.messages) ? data.messages : [];
      const page = incoming.slice(0, PAGE_SIZE); // hard cap client-side

      if (page.length > 0) {
        const fragment = document.createDocumentFragment();
        let minId = currentOldestId;

        page.forEach((msg) => {
          if (!messagesDiv.querySelector(`[data-msg-id="${msg.id}"]`)) {
            const el = createMessageElement(msg, user);
            fragment.appendChild(el);
            if (msg.id < minId) minId = msg.id;
          }
        });

        const heightBefore = messagesDiv.scrollHeight;
        messagesDiv.insertBefore(fragment, messagesDiv.firstChild);
        const heightAfter = messagesDiv.scrollHeight;
        const heightDiff = heightAfter - heightBefore;

        messagesDiv.scrollTop = scrollTopBefore + heightDiff;

        oldestMessageId = minId;

        if (page.length < PAGE_SIZE || oldestMessageId === 1) {
          hasMoreMessages = false;
        }
      } else {
        hasMoreMessages = false;
      }
    } catch (error) {
      console.error("Load older error:", error);
      showStatus("Network error: failed to load older messages.", "error", 3000);
    } finally {
      isLoadingOlder = false;
    }
  }

  // Scroll listener with single-fire gating
  messagesDiv.addEventListener("scroll", () => {
    if (messagesDiv.scrollTop < TOP_TRIGGER_PX && !isLoadingOlder && hasMoreMessages && canTriggerOlder) {
      canTriggerOlder = false; // disarm until user scrolls away
      loadOlderMessages();
    } else if (messagesDiv.scrollTop > RESET_TRIGGER_PX) {
      canTriggerOlder = true; // re-arm after user scrolls down enough
    }
  });

  // Polling
  function startActivePolling() {
    if (pollInterval) return;
    fetchMessages(false);
    pollInterval = setInterval(() => fetchMessages(false), ACTIVE_POLL_INTERVAL);
  }

  function stopActivePolling() {
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
  }

  function startBackgroundPolling() {
    if (backgroundPollInterval) return;
    backgroundPollInterval = setInterval(() => {
      if (!isOpen) fetchMessages(false);
    }, BACKGROUND_POLL_INTERVAL);
  }

  function stopBackgroundPolling() {
    if (backgroundPollInterval) {
      clearInterval(backgroundPollInterval);
      backgroundPollInterval = null;
    }
  }

  // Initial
  await fetchMessages(true);
  startBackgroundPolling();

  // Drawer toggle
  chatButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    drawer.style.transform = isOpen ? "translateX(0)" : "translateX(100%)";

    if (isOpen) {
      unreadCount = 0;
      setIntCookie("chatUnread", 0);
      showBadge();
      startActivePolling();
      scrollToBottom(true);
    } else {
      stopActivePolling();
    }
  });

  document.addEventListener("click", () => {
    if (isOpen) {
      isOpen = false;
      drawer.style.transform = "translateX(100%)";
      stopActivePolling();
    }
  });

  drawer.addEventListener("click", (e) => e.stopPropagation());

  // Save nickname
  nickSaveButton.addEventListener("click", () => {
    const nick = nickInput.value.trim();
    if (!nick) {
      flashButtonMessage("Nickname required", 1500);
      showStatus("Please enter a nickname.", "warn", 2500);
      return;
    }
    user = nick;
    setCookie("chatNick", user);
    unreadCount = 0;
    setIntCookie("chatUnread", 0);
    showBadge();
    updateBlurState();
    showStatus("Nickname saved.", "ok", 2000);
  });

  nickInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") nickSaveButton.click();
  });

  // Enter key to send
  msgInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendButton.click();
    }
  });

  // Send cooldown (replaces alerts)
  const SEND_COOLDOWN_MS = 15000;
  let cooldownTimer = null;
  let cooldownUntil = 0;
  const originalSendLabel = sendButton.textContent || "Send";

  function setSendButtonDisabled(disabled) {
    sendButton.disabled = disabled;
    sendButton.style.opacity = disabled ? "0.6" : "1";
    sendButton.style.cursor = disabled ? "not-allowed" : "pointer";
  }

  function updateButtonLabel() {
    const remaining = Math.max(0, cooldownUntil - Date.now());
    const secs = Math.ceil(remaining / 1000);
    sendButton.textContent = `Wait ${secs}s`;
  }

  function startCooldown(ms) {
    clearCooldown();
    cooldownUntil = Date.now() + ms;
    setSendButtonDisabled(true);
    updateButtonLabel();
    cooldownTimer = setInterval(() => {
      const remaining = cooldownUntil - Date.now();
      if (remaining <= 0) {
        clearCooldown();
      } else {
        updateButtonLabel();
      }
    }, 250);
  }

  function clearCooldown() {
    if (cooldownTimer) {
      clearInterval(cooldownTimer);
      cooldownTimer = null;
    }
    cooldownUntil = 0;
    setSendButtonDisabled(false);
    sendButton.textContent = originalSendLabel;
  }

  // Send message
  let lastSent = 0;

  const sendMessage = async () => {
    if (!user) {
      updateBlurState();
      showStatus("Please save a nickname first.", "warn", 2500);
      return;
    }
    const text = msgInput.value.trim();
    if (!text) {
      flashButtonMessage("Empty message", 1200);
      showStatus("Empty messages cannot be sent.", "warn", 2000);
      return;
    }

    const now = Date.now();

    // Already in cooldown? Nudge and inform
    if (cooldownUntil && now < cooldownUntil) {
      try {
        sendButton.animate([{ transform: "scale(1)" }, { transform: "scale(0.98)" }, { transform: "scale(1)" }], {
          duration: 150,
          easing: "ease-out",
        });
      } catch (_) {}
      showStatus("Please wait, rate limit in effect.", "warn", 2000);
      return;
    }

    // Start cooldown immediately (client-side rate-limit UX)
    lastSent = now;
    startCooldown(SEND_COOLDOWN_MS);

    try {
      const response = await fetch(`${API_BASE_URL}/send.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, text }),
      });

      const data = await response.json();

      if (!data.success) {
        const errMsg = data.error || "Could not send.";
        flashButtonMessage("Send failed", 1800);
        showStatus(errMsg, "error", 4000);
        return;
      }

      msgInput.value = "";
      msgInput.style.height = "auto";
      await fetchMessages(false);
      scrollToBottom(true);
      showStatus("Message sent.", "ok", 1200);
    } catch (error) {
      console.error("Error sending message:", error);
      flashButtonMessage("Network error", 1800);
      showStatus("Network error: message not sent. Try again.", "error", 4000);
    }
  };

  sendButton.addEventListener("click", sendMessage);

  // Cleanup
  window.addEventListener("beforeunload", () => {
    stopActivePolling();
    stopBackgroundPolling();
  });
});
