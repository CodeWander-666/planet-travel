import requests, json, os, datetime, re
from bs4 import BeautifulSoup

TRAINS = ["12138","12919","12301","12002","12421","12627","22691","14320","11126","21126"]
today = datetime.datetime.now().strftime("%Y%m%d")
trains_data = []

coord_lookup = {
    'GWL': (26.2183,78.1828), 'INDB': (22.7196,75.8577), 'BPL': (23.2599,77.4126),
    'JHS': (25.4445,78.5680), 'AGC': (27.1558,78.0060), 'ET': (23.1825,79.9882),
    'UJN': (23.1765,75.7885), 'JBP': (23.1815,79.9864), 'NDLS': (28.6419,77.2194),
    'DBA': (25.9667,78.05), 'SHR': (23.4866,79.9143)
}

for train in TRAINS:
    try:
        url = f"https://runningstatus.in/status/{train}-on-{today}"
        resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
        if resp.status_code != 200:
            print(f"  ✗ {train}: HTTP {resp.status_code}")
            continue
        soup = BeautifulSoup(resp.text, 'html.parser')
        
        # Get train name from heading
        name_el = soup.find('h1')
        train_name = name_el.text.strip() if name_el else f"Train {train}"
        
        # Get status from table rows
        table = soup.find('table')
        status_note = "Running"
        last_station = ""
        current_lat, current_lon = 23.5, 78.5
        
        if table:
            rows = table.find_all('tr')
            for row in rows:
                cols = row.find_all('td')
                if len(cols) >= 4:
                    station_name = cols[0].get_text(strip=True)
                    delay_info = cols[3].get_text(strip=True) if len(cols) > 3 else ""
                    if station_name and "Destination" not in station_name:
                        last_station = station_name
                        status_note = delay_info if delay_info else "On time"
            
            # Get coordinates for last station
            for code, coords in coord_lookup.items():
                if code.lower() in last_station.lower():
                    current_lat, current_lon = coords
                    break
        
        trains_data.append({
            "trainNo": train,
            "trainName": train_name,
            "statusNote": status_note,
            "lastStation": last_station,
            "currentLat": current_lat,
            "currentLon": current_lon
        })
        print(f"  ✓ {train}: {train_name} — {status_note}")
    except Exception as e:
        print(f"  ✗ {train}: {e}")

os.makedirs("../train-status", exist_ok=True)
with open("../train-status/live-trains.json", "w") as f:
    json.dump({"updated": datetime.datetime.utcnow().isoformat(), "trains": trains_data}, f, indent=2)
print(f"✅ {len(trains_data)} trains updated.")
