from bs4 import BeautifulSoup
import json

# HTML dosyasını oku
with open("search.html", "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, "html.parser")

# Oyun bilgilerini saklayacak liste
games = []

# Tüm oyunları bul
for game in soup.find_all("a", class_="card game-item"):
    game_info = {
        "url": "https://ucbg.github.io/" + game["href"],
        "title": game.find("h3").text if game.find("h3") else "",
        "image": "https://ucbg.github.io/" + game.find("img")["data-src"] if game.find("img") else "",
        "video": "",
        "description": "",
        "groups":"action, adventure"
    }
    games.append(game_info)

# JSON olarak kaydet
with open("games.json", "w", encoding="utf-8") as json_file:
    json.dump(games, json_file, ensure_ascii=False, indent=4)

print("JSON dosyası oluşturuldu: games.json")
