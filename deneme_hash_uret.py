import hashlib
import json

def read_json(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)
    return data.get("text", "")

def generate_hash(text1, text2, domain):
    # Birleştirilen metni hash'le
    combined = text1 + text2 + domain
    hashed = hashlib.sha256(combined.encode()).hexdigest()
    return hashed[:16]  # İlk 16 karakteri al

# Web siteleri ve her birinin geçerli hash'lerini tutan liste
domains = ["ucbg.github.io", "127.0.0.1:5500", "ucbg.pages.dev"]

# JSON dosyasından metinleri oku
text1 = read_json("data-json/auth1.json")
text2 = read_json("data-json/auth2.json")

# Her bir domain için hash hesapla ve yazdır
for domain in domains:
    generated_hash = generate_hash(text1, text2, domain)
    print(f"Domain: {domain}")
    print(f"Oluşturulan Hash: {generated_hash}")
    print("-" * 40)  # Ayırıcı çizgi
