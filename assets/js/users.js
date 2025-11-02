document.addEventListener("DOMContentLoaded", async () => {
  const onlineUsersElement = document.getElementById("online-users");

  // Mevcut oyun başlatıcı zinciri
  if (typeof ppe === "function") await ppe();
  else if (typeof poki === "function") await poki();
  else await crayzgames();

  // ABD saat dilimleri (ET, CT, MT, PT)
  const TZ_LIST = ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles"];

  // Performans için saat formatlayıcılarını bir kez oluştur
  const hourFormatters = TZ_LIST.map((tz) => new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hour12: false }));

  function getUSHours(now) {
    return hourFormatters.map((fmt) => parseInt(fmt.format(now), 10)); // 0..23
  }

  // Gündüz ağırlığı (0..1): 6–22 yüksek; geçişler kademeli
  function dayWeight(hour) {
    if (hour < 6) return 0.25;
    if (hour < 9) return 0.55;
    if (hour < 12) return 0.8;
    if (hour < 18) return 1.0;
    if (hour < 22) return 0.7;
    return 0.35;
  }

  function getUSDayFactor(now) {
    const hours = getUSHours(now);
    const weights = hours.map(dayWeight);
    return weights.reduce((a, b) => a + b, 0) / weights.length; // 0..1
  }

  // Hedef aralıkları: "hafta içi ~100k", "hafta sonu ~20k"
  const WEEKDAY_RANGE = { low: 85000, high: 115000 };
  const WEEKEND_RANGE = { low: 15000, high: 25000 };

  const TICK_MS = 1500;
  let current = null;
  let intervalId = null;

  function isWeekendLocal(now) {
    const d = now.getDay(); // 0: Pazar, 6: Cumartesi
    return d === 0 || d === 6;
  }

  function step() {
    const now = new Date();

    // Hafta içi/sonu aralığını seç
    const weekend = isWeekendLocal(now);
    const range = weekend ? WEEKEND_RANGE : WEEKDAY_RANGE;

    // ABD gündüz/gece faktörüyle hedefi aralık içinde konumlandır
    const usFactor = getUSDayFactor(now); // 0..1
    const target = Math.round(range.low + usFactor * (range.high - range.low));

    if (current === null) current = target;

    const delta = target - current;

    // Hedefe yumuşak yaklaşım (easing)
    const ease = delta * 0.12;

    // Pıtır pıtır jitter: delta'ya bağlı, sınırla
    const jitterAmp = Math.max(15, Math.min(300, Math.abs(delta) * 0.02));
    const jitter = (Math.random() * 2 - 1) * jitterAmp;

    current = Math.max(0, current + ease + jitter);

    // Yerelleştirilmiş çıktı
    onlineUsersElement.textContent = Math.round(current).toLocaleString();
  }

  function start() {
    stop();
    step();
    intervalId = setInterval(step, TICK_MS);
  }

  function stop() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") start();
    else stop();
  });

  start();
});
