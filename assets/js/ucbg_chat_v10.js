// API Config
const API_BASE_URL = "https://silecekci.com/chat-api";
const ACTIVE_POLL_INTERVAL = 2500;
const BACKGROUND_POLL_INTERVAL = 5000;

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

  // TROLLBOX Header
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

  // Nick container
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

  // Messages div
  const messagesDiv = document.createElement("div");
  messagesDiv.style.cssText = `
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  `;
  drawer.appendChild(messagesDiv);

  // Input container
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

  inputContainer.appendChild(msgInput);
  inputContainer.appendChild(sendButton);
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

  // Message element creator
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

  // Get the oldest message ID currently displayed
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

  // Fetch messages
  async function fetchMessages(initial = false) {
    try {
      const url = initial ? `${API_BASE_URL}/fetch.php?limit=100` : `${API_BASE_URL}/fetch.php?since=${lastTimestamp}&limit=50`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data.success) {
        console.error("Fetch error:", data.error);
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
            if (msg.id < minId) {
              minId = msg.id;
            }
          });

          lastTimestamp = maxTimestamp;
          oldestMessageId = minId;

          console.log(`Initial load: ${data.messages.length} messages, oldestMessageId = ${oldestMessageId}, lastTimestamp = ${lastTimestamp}`);

          // Debug: log all message IDs
          const messageIds = data.messages.map((msg) => msg.id).sort((a, b) => a - b);
          console.log("All message IDs in initial load:", messageIds);

          // Check if we have the actual oldest message
          // Since we're loading the last 100 messages, if we have message ID 1,
          // it means we might have the actual beginning of the chat
          if (oldestMessageId === 1) {
            hasMoreMessages = false;
            console.log("We have message ID 1, assuming no older messages exist");
          } else {
            hasMoreMessages = true;
            console.log("Oldest message ID is greater than 1, older messages might exist");
          }
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

              if (!isOpen && msg.user !== user) {
                newMessageCount++;
              }
            }
          });

          if (newMessageCount > 0) {
            unreadCount += newMessageCount;
            setIntCookie("chatUnread", unreadCount);
            showBadge();
          }

          if (userWasAtBottom) {
            scrollToBottom(true);
          }
        }
      }

      setIntCookie("lastTimestamp", lastTimestamp);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  // Load older messages
  async function loadOlderMessages() {
    const currentOldestId = getOldestDisplayedMessageId();

    if (isLoadingOlder || !hasMoreMessages || currentOldestId <= 1) {
      console.log(`Skipping load older: loading=${isLoadingOlder}, hasMore=${hasMoreMessages}, currentOldestId=${currentOldestId}`);
      return;
    }

    isLoadingOlder = true;
    const scrollTopBefore = messagesDiv.scrollTop;

    console.log(`Loading older messages before ID: ${currentOldestId} (current oldest displayed)`);

    try {
      const response = await fetch(`${API_BASE_URL}/fetch-older.php?before_id=${currentOldestId}&limit=20`);
      const data = await response.json();

      console.log("Older messages response:", data);

      if (!data.success) {
        console.error("Load older error:", data.error);
        return;
      }

      if (data.messages && data.messages.length > 0) {
        const fragment = document.createDocumentFragment();
        let minId = currentOldestId;

        data.messages.forEach((msg) => {
          if (!messagesDiv.querySelector(`[data-msg-id="${msg.id}"]`)) {
            const el = createMessageElement(msg, user);
            fragment.appendChild(el);

            if (msg.id < minId) {
              minId = msg.id;
            }
          }
        });

        const heightBefore = messagesDiv.scrollHeight;
        messagesDiv.insertBefore(fragment, messagesDiv.firstChild);
        const heightAfter = messagesDiv.scrollHeight;
        const heightDiff = heightAfter - heightBefore;

        messagesDiv.scrollTop = scrollTopBefore + heightDiff;

        // Update the oldest message ID we know about
        oldestMessageId = minId;

        console.log(`Loaded ${data.messages.length} older messages, new oldest known ID = ${oldestMessageId}`);

        // If we got fewer messages than requested, or if we now have message ID 1, we're probably at the beginning
        if (data.messages.length < 20 || oldestMessageId === 1) {
          hasMoreMessages = false;
          console.log("Reached the beginning of chat history");
        }
      } else {
        hasMoreMessages = false;
        console.log("No more older messages available", data.debug);
      }
    } catch (error) {
      console.error("Load older error:", error);
    } finally {
      isLoadingOlder = false;
    }
  }

  // Scroll event listener
  messagesDiv.addEventListener("scroll", () => {
    if (messagesDiv.scrollTop < 100 && !isLoadingOlder && hasMoreMessages) {
      console.log("Scrolled near top, loading older messages...");
      loadOlderMessages();
    }
  });

  // Polling functions
  function startActivePolling() {
    if (pollInterval) return;
    fetchMessages(false);
    pollInterval = setInterval(() => fetchMessages(false), ACTIVE_POLL_INTERVAL);
    console.log("Active polling started");
  }

  function stopActivePolling() {
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
      console.log("Active polling stopped");
    }
  }

  function startBackgroundPolling() {
    if (backgroundPollInterval) return;
    backgroundPollInterval = setInterval(() => {
      if (!isOpen) {
        fetchMessages(false);
      }
    }, BACKGROUND_POLL_INTERVAL);
    console.log("Background polling started");
  }

  function stopBackgroundPolling() {
    if (backgroundPollInterval) {
      clearInterval(backgroundPollInterval);
      backgroundPollInterval = null;
      console.log("Background polling stopped");
    }
  }

  // Initial load
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
    if (!nick) return;
    user = nick;
    setCookie("chatNick", user);
    unreadCount = 0;
    setIntCookie("chatUnread", 0);
    showBadge();
    updateBlurState();
  });

  nickInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") nickSaveButton.click();
  });

  // Enter tuşu
  msgInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendButton.click();
    }
  });

  // Send message
  let lastSent = 0;

  const sendMessage = async () => {
    if (!user) {
      updateBlurState();
      return;
    }
    const text = msgInput.value.trim();
    if (!text) return;

    const now = Date.now();
    if (now - lastSent < 15000) {
      alert("Wait 15 seconds before sending.");
      return;
    }
    lastSent = now;

    try {
      const response = await fetch(`${API_BASE_URL}/send.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, text }),
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.error || "Could not send message.");
        return;
      }

      msgInput.value = "";
      msgInput.style.height = "auto";
      await fetchMessages(false);
      scrollToBottom(true);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Could not send message. Try again.");
    }
  };

  sendButton.addEventListener("click", sendMessage);

  // Cleanup
  window.addEventListener("beforeunload", () => {
    stopActivePolling();
    stopBackgroundPolling();
  });
});
