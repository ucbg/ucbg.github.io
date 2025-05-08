document.addEventListener("DOMContentLoaded", () => {
  const onlineUsersElement = document.getElementById("online-users");

  function getOnlineUsers(currentHour) {
    const timeRanges = [
      { start: 7, end: 15, startUsers: 5548, endUsers: 250080 }, // 7-15 saatleri arası
      { start: 15, end: 24, startUsers: 250080, endUsers: 10080 }, // 15-24 saatleri arası
      { start: 0, end: 7, startUsers: 10080, endUsers: 5564 }, // 24-7 saatleri arası
    ];

    let users = 0;

    // Saat dilimlerine göre uygun aralığı bul
    for (let range of timeRanges) {
      if (currentHour >= range.start && currentHour < range.end) {
        const progress = (currentHour - range.start) / (range.end - range.start);
        users = Math.round(range.startUsers + progress * (range.endUsers - range.startUsers));
        break;
      }
    }

    return users;
  }

  function updateOnlineUsers() {
    const now = new Date();
    const currentHour = now.getHours();
    const users = getOnlineUsers(currentHour);

    // Sayıyı rastgele biraz değiştir
    const randomChange = Math.floor(Math.random() * 1000) - 500; // -500 ile 500 arasında bir değişim
    const updatedUsers = users + randomChange;

    onlineUsersElement.textContent = Math.max(0, updatedUsers).toLocaleString(); // Sayıyı formatla ve negatif olmasın
  }

  // Başlangıçta güncelle ve sonra her 2 saniyede bir güncelleme yap
  updateOnlineUsers();
  setInterval(updateOnlineUsers, 10000); // 2 saniyede bir çalıştır
});
