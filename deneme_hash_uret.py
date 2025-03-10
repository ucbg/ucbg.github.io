import json
import base64
import os

# Kod içine gömülü izin verilen domainler
ALLOWED_DOMAINS = [
    "https://ucbg.github.io",
    "https://ucbg.pages.dev"
]

AUTH_FILES = ["auth1.json", "auth2.json"]

def generate_hash(domain):
    """Verilen domain için Base64 hash üretir."""
    return base64.b64encode(domain.encode()).decode()

def read_auth_files():
    """auth1.json ve auth2.json dosyalarını okuyarak mevcut hashleri döndürür."""
    existing_hashes = set()
    
    for auth_file in AUTH_FILES:
        if os.path.exists(auth_file):
            with open(auth_file, "r") as f:
                try:
                    auth_data = json.load(f)
                    if "hash" in auth_data:
                        existing_hashes.add(auth_data["hash"])
                except json.JSONDecodeError:
                    print(f"Uyarı: {auth_file} bozuk veya okunamıyor.")
    
    return existing_hashes

def check_and_generate_hashes():
    """Verilen domainler için hash hesaplar ve mevcut hashlerle karşılaştırır."""
    existing_hashes = read_auth_files()

    print("\n=== Hash Kontrol ve Üretim ===")
    for domain in ALLOWED_DOMAINS:
        domain_hash = generate_hash(domain)
        status = "✅ Eşleşti" if domain_hash in existing_hashes else "❌ Eşleşmedi"
        print(f"Domain: {domain}")
        print(f"Hash: {domain_hash} -> {status}\n")

if __name__ == "__main__":
    check_and_generate_hashes()
