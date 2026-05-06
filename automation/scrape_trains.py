import requests, json, os, datetime
from bs4 import BeautifulSoup

TRAINS = ["12138","12919","12301","12002","12421","12627","22691","14320","11126","21126"]
headers = {'User-Agent': 'Mozilla/5.0'}
trains_data = []

for train in TRAINS:
    try:
        url = f"https://www.runningstatus.in/status/{train}"
        resp = requests.get(url, headers=headers, timeout=15)
        if resp.status_code != 200:
            continue
        soup = BeautifulSoup(resp.text, 'html.parser')

        name_tag = soup.find('h1')
        train_name = name_tag.text.strip() if name_tag else f"Train {train}"

        # Look for status text
        status_text = "Running on time"
        status_div = soup.find('div', class_='status')
        if status_div:
            status_text = status_div.text.strip()

        next_stn = "N/A"
        next_tag = soup.find('td', string='Next Station')
        if next_tag:
            nxt = next_tag.find_next('td')
            if nxt: next_stn = nxt.text.strip()

        delay = "On time"
        delay_tag = soup.find('td', string='Delay')
        if delay_tag:
            dly = delay_tag.find_next('td')
            if dly: delay = dly.text.strip()

        # Coordinate lookup
        coords_lookup = {
            'GWL': (26.2183,78.1828), 'INDB': (22.7196,75.8577),
            'BPL': (23.2599,77.4126), 'JHS': (25.4445,78.5680),
            'AGC': (27.1558,78.0060), 'ET': (23.1825,79.9882),
            'UJN': (23.1765,75.7885), 'JBP': (23.1815,79.9864),
            'NDLS': (28.6419,77.2194), 'KURJ': (24.8318,79.9199)
        }
        coords = (23.5, 78.5)

        trains_data.append({
            "number": train,
            "name": train_name,
            "status": status_text,
            "next_station": next_stn,
            "delay": delay,
            "lat": coords[0],
            "lon": coords[1]
        })
        print(f"  ✓ {train} {train_name}")
    except Exception as e:
        print(f"  ✗ {train}: {e}")

os.makedirs("../train-status", exist_ok=True)
with open("../train-status/live-trains.json","w") as f:
    json.dump({"updated": datetime.datetime.utcnow().isoformat(), "trains": trains_data}, f, indent=2)
print("✅ Live train data saved.")
