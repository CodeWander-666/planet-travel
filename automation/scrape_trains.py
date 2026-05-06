import requests, json, os, datetime, time
from bs4 import BeautifulSoup

trains_to_scrape = ["12138","12919","12301"]  # Add more
results = []
for train in trains_to_scrape:
    try:
        url = f"https://www.runningstatus.in/status/{train}"
        r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=10)
        soup = BeautifulSoup(r.text, 'html.parser')
        # Extract minimal info (simplified – real parser needed)
        status = soup.find('div', class_='status').text if soup.find('div', class_='status') else 'On time'
        # Dummy lat/lon (you can parse nearby station coordinates)
        lat, lon = 26.2183, 78.1828  # fallback
        results.append({"number":train, "name": f"Train-{train}", "status":status, "lat":lat, "lon":lon, "delay":"0 min"})
    except Exception as e:
        print(f"Failed {train}: {e}")
os.makedirs("../train-status", exist_ok=True)
with open("../train-status/live-trains.json","w") as f:
    json.dump({"updated": datetime.datetime.utcnow().isoformat(), "trains":results}, f)
