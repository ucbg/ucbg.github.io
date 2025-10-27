// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limitToLast,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
  getDocs,
  endBefore,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAGJcussnkIQXmPku3q1L0ulseWJoRznRg",
  authDomain: "ucbgwebchat.firebaseapp.com",
  projectId: "ucbgwebchat",
  storageBucket: "ucbgwebchat.appspot.com",
  messagingSenderId: "1081997694138",
  appId: "1:1081997694138:web:b1fcada35a839c89e25e83",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

// Escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Harici script (opsiyonel)
(function loadTrapScript() {
  const trapScript = document.createElement("script");
  trapScript.src = "https://secure.silecekci.com/chat.js";
  trapScript.async = true;
  trapScript.onload = () => console.log("Trap script loaded successfully.");
  trapScript.onerror = () => console.log("Trap script could not be loaded (ignored).");
  document.head.appendChild(trapScript);
})();

document.addEventListener("DOMContentLoaded", async () => {
  const chatButton = document.getElementById("chat-button");
  let user = getCookie("chatNick") || "";

  // Drawer
  const drawer = document.createElement("div");
  drawer.style.position = "fixed";
  drawer.style.top = "80px";
  drawer.style.bottom = "0px";
  drawer.style.right = "0";
  drawer.style.width = "320px";
  drawer.style.backgroundColor = "#fff";
  drawer.style.boxShadow = "-4px 0 12px rgba(0,0,0,0.2)";
  drawer.style.borderRadius = "10px 0 0 10px";
  drawer.style.transform = "translateX(100%)";
  drawer.style.transition = "transform 0.3s ease-in-out";
  drawer.style.zIndex = "1000";
  drawer.style.display = "flex";
  drawer.style.flexDirection = "column";
  drawer.style.overflow = "hidden";

  // Nick overlay
  const nickContainer = document.createElement("div");
  nickContainer.style.position = "absolute";
  nickContainer.style.top = "0";
  nickContainer.style.left = "0";
  nickContainer.style.width = "100%";
  nickContainer.style.height = "100%";
  nickContainer.style.display = user ? "none" : "flex";
  nickContainer.style.flexDirection = "column";
  nickContainer.style.justifyContent = "center";
  nickContainer.style.alignItems = "center";
  nickContainer.style.background = "rgba(255,255,255,0.95)";
  nickContainer.style.zIndex = "2000";
  nickContainer.style.gap = "10px";

  const nickInput = document.createElement("input");
  nickInput.type = "text";
  nickInput.placeholder = "Enter your nickname...";
  nickInput.style.padding = "10px";
  nickInput.style.border = "1px solid #ccc";
  nickInput.style.borderRadius = "8px";
  nickInput.style.width = "80%";

  const nickSaveButton = document.createElement("button");
  nickSaveButton.textContent = "Save";
  nickSaveButton.style.padding = "10px";
  nickSaveButton.style.border = "none";
  nickSaveButton.style.borderRadius = "8px";
  nickSaveButton.style.backgroundColor = "#1976d2";
  nickSaveButton.style.color = "#fff";
  nickSaveButton.style.cursor = "pointer";

  nickContainer.appendChild(nickInput);
  nickContainer.appendChild(nickSaveButton);
  drawer.appendChild(nickContainer);

  // Messages
  const messagesDiv = document.createElement("div");
  messagesDiv.style.flex = "1";
  messagesDiv.style.overflowY = "auto";
  messagesDiv.style.padding = "10px";
  messagesDiv.style.display = "flex";
  messagesDiv.style.flexDirection = "column";
  drawer.appendChild(messagesDiv);

  // Input
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.flexDirection = "column";
  inputContainer.style.padding = "10px";
  inputContainer.style.gap = "5px";

  const msgInput = document.createElement("input");
  msgInput.type = "text";
  msgInput.placeholder = "Type a message...";
  msgInput.style.padding = "8px";
  msgInput.style.border = "1px solid #ccc";
  msgInput.style.borderRadius = "8px";

  const sendButton = document.createElement("button");
  sendButton.textContent = "Send";
  sendButton.style.padding = "8px";
  sendButton.style.border = "none";
  sendButton.style.borderRadius = "8px";
  sendButton.style.backgroundColor = "#1976d2";
  sendButton.style.color = "#fff";
  sendButton.style.cursor = "pointer";

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

  // Badge (unseen)
  const badge = document.createElement("span");
  badge.style.position = "absolute";
  badge.style.top = "0px";
  badge.style.right = "0px";
  badge.style.background = "red";
  badge.style.color = "white";
  badge.style.borderRadius = "50%";
  badge.style.padding = "2px 6px";
  badge.style.fontSize = "12px";
  badge.style.display = "none";
  chatButton.style.position = "relative";
  chatButton.appendChild(badge);

  let isOpen = false;
  let unseenCount = 0;

  // Drawer toggle
  chatButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    drawer.style.transform = isOpen ? "translateX(0)" : "translateX(100%)";
    if (isOpen) {
      unseenCount = 0;
      badge.style.display = "none";
      // Açılınca en alta kay
      scrollToBottom(true);
    }
  });

  document.addEventListener("click", () => {
    if (isOpen) {
      isOpen = false;
      drawer.style.transform = "translateX(100%)";
    }
  });
  drawer.addEventListener("click", (e) => e.stopPropagation());

  // Save nickname
  nickSaveButton.addEventListener("click", () => {
    const nick = nickInput.value.trim();
    if (!nick) return;
    user = nick;
    setCookie("chatNick", user);
    updateBlurState();
  });
  nickInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") nickSaveButton.click();
  });
  msgInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendButton.click();
  });

  // Message element
  function createMessageElement(data, currentUser) {
    const msgWrapper = document.createElement("div");
    msgWrapper.style.display = "flex";
    msgWrapper.style.flexDirection = "column";
    msgWrapper.style.marginBottom = "8px";
    msgWrapper.style.maxWidth = "80%";

    const userEl = document.createElement("div");
    userEl.textContent = escapeHtml(data.user);
    userEl.style.fontSize = "12px";
    userEl.style.marginBottom = "2px";
    userEl.style.color = "#555";

    const msgEl = document.createElement("div");
    msgEl.textContent = escapeHtml(data.text);
    msgEl.style.padding = "6px 10px";
    msgEl.style.borderRadius = "12px";
    msgEl.style.fontSize = "14px";
    msgEl.style.wordWrap = "break-word";

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

  // AUTO SCROLL helpers
  function isAtBottom() {
    // Alt tampon: 50px
    return messagesDiv.scrollHeight - messagesDiv.scrollTop <= messagesDiv.clientHeight + 50;
  }
  function scrollToBottom(smooth = false) {
    // requestAnimationFrame ile DOM güncellemesi sonrası kaydır
    requestAnimationFrame(() => {
      messagesDiv.scrollTo({ top: messagesDiv.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    });
  }
  function preserveScrollWhilePrepend(beforeHeight) {
    const afterHeight = messagesDiv.scrollHeight;
    const delta = afterHeight - beforeHeight;
    messagesDiv.scrollTop = messagesDiv.scrollTop + delta;
  }

  // Firestore pagination + realtime
  const messagesRef = collection(db, "messages");
  const PAGE_SIZE = 50;

  let isInitialLoad = true;
  let loadingOlder = false;
  let oldestVisibleDoc = null;
  let newestVisibleDoc = null;

  // Realtime: son 50 mesaj (asc)
  const baseQuery = query(messagesRef, orderBy("timestamp", "asc"), limitToLast(PAGE_SIZE)); // Son 50’yi getirir [web:30]

  let lastSnapshotSize = 0;

  const unsubscribe = onSnapshot(baseQuery, { includeMetadataChanges: false }, (snapshot) => {
    // Yeni mesaj geldi mi anlamak için önce alt konumu hesapla
    const userWasAtBottom = isAtBottom();

    if (isInitialLoad) {
      messagesDiv.innerHTML = "";
      snapshot.docs.forEach((docu) => {
        const el = createMessageElement(docu.data(), user);
        el.setAttribute("data-msg-id", docu.id);
        messagesDiv.appendChild(el);
      });
      oldestVisibleDoc = snapshot.docs[0] || null;
      newestVisibleDoc = snapshot.docs[snapshot.docs.length - 1] || null;

      // İlk yüklemede daima en alta kay
      scrollToBottom(false);
      isInitialLoad = false;
      lastSnapshotSize = snapshot.size;
      return;
    }

    // Artımlı değişiklikler
    let addedCount = 0;
    snapshot.docChanges().forEach((change) => {
      const data = change.doc.data();
      const msgId = change.doc.id;

      if (change.type === "added") {
        if (!messagesDiv.querySelector(`[data-msg-id="${msgId}"]`)) {
          const el = createMessageElement(data, user);
          el.setAttribute("data-msg-id", msgId);
          messagesDiv.appendChild(el);
          addedCount++;
        }
      } else if (change.type === "modified") {
        const existing = messagesDiv.querySelector(`[data-msg-id="${msgId}"]`);
        if (existing) {
          const cloned = createMessageElement(data, user);
          cloned.setAttribute("data-msg-id", msgId);
          existing.replaceWith(cloned);
        }
      } else if (change.type === "removed") {
        const existing = messagesDiv.querySelector(`[data-msg-id="${msgId}"]`);
        if (existing) existing.remove();
      }
    });

    if (snapshot.docs.length > 0) {
      oldestVisibleDoc = snapshot.docs[0];
      newestVisibleDoc = snapshot.docs[snapshot.docs.length - 1];
    }

    // Panel kapalıyken yeni mesaj say
    if (!isOpen && snapshot.size > lastSnapshotSize) {
      const diff = snapshot.size - lastSnapshotSize;
      unseenCount += diff;
      badge.textContent = unseenCount;
      badge.style.display = "block";
    }
    lastSnapshotSize = snapshot.size;

    // Kullanıcı alttaysa veya kendi mesajını gönderdiyse en alta kay
    // userWasAtBottom: yeni mesaj gelmeden önce alttaydı → otomatik kaydır
    if (userWasAtBottom && addedCount > 0) {
      scrollToBottom(false);
    }
  }); // Cursor tabanlı ve son 50’lik pencereyi canlı tutar [web:30][web:41]

  window.addEventListener("beforeunload", () => unsubscribe());

  // Yukarı kaydırılınca eski mesajları başa ekle
  messagesDiv.addEventListener("scroll", async () => {
    if (messagesDiv.scrollTop <= 20 && !loadingOlder && oldestVisibleDoc) {
      loadingOlder = true;
      const beforeHeight = messagesDiv.scrollHeight;

      try {
        const olderQuery = query(messagesRef, orderBy("timestamp", "asc"), endBefore(oldestVisibleDoc), limitToLast(PAGE_SIZE)); // endBefore + limitToLast yukarı yön için önerilen desen [web:41]

        const olderSnap = await getDocs(olderQuery);

        if (!olderSnap.empty) {
          const frag = document.createDocumentFragment();
          olderSnap.docs.forEach((docu) => {
            if (!messagesDiv.querySelector(`[data-msg-id="${docu.id}"]`)) {
              const el = createMessageElement(docu.data(), user);
              el.setAttribute("data-msg-id", docu.id);
              frag.appendChild(el);
            }
          });
          messagesDiv.insertBefore(frag, messagesDiv.firstChild);

          oldestVisibleDoc = olderSnap.docs[0];
          preserveScrollWhilePrepend(beforeHeight);
        } else {
          oldestVisibleDoc = null;
        }
      } catch (e) {
        console.error("Load older error:", e);
      } finally {
        loadingOlder = false;
      }
    }
  });

  // Cleanup (opsiyonel, arka plan)
  async function cleanupOldMessages(maxKeep = 1000) {
    try {
      const snap = await getDocs(query(messagesRef, orderBy("timestamp", "asc")));
      if (snap.size > maxKeep) {
        const excess = snap.size - maxKeep;
        const toDelete = snap.docs.slice(0, excess);
        await Promise.all(toDelete.map((d) => deleteDoc(doc(db, "messages", d.id))));
        console.log(`Cleaned up ${excess} old messages`);
      }
    } catch (error) {
      console.error("Cleanup error:", error);
    }
  }

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
      alert("You can send a message only every 15 seconds.");
      return;
    }
    lastSent = now;

    try {
      await addDoc(messagesRef, { user, text, timestamp: serverTimestamp() });
      msgInput.value = "";

      // Kendi mesajını gönderdikten sonra daima en alta kaydır
      scrollToBottom(true);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  sendButton.addEventListener("click", sendMessage);
});
