import requests, json, os, datetime, sys
from bs4 import BeautifulSoup

TRAINS = ["12138","12919","12301","12002","12421","12627","22691"]
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
        status_div = soup.find('div', class_='status')
        status_text = status_div.text.strip() if status_div else "Running on time"
        next_stn = soup.find('td', text='Next Station')
        next_stn_val = next_stn.find_next('td').text.strip() if next_stn else "N/A"
        delay_tag = soup.find('td', text='Delay')
        delay_val = delay_tag.find_next('td').text.strip() if delay_tag else "On time"
        # coordinates from static lookup
        station_coords = {
            'GWL': (26.2183, 78.1828), 'INDB': (22.7196, 75.8577),
            'BPL': (23.2599, 77.4126), 'JHS': (25.4445, 78.5680),
            'AGC': (27.1558, 78.0060), 'ET': (23.1825, 79.9882)
        }
        last_station = "GWL"
        coords = station_coords.get(last_station[:3], (23.5, 78.5))
        trains_data.append({
            "number": train,
            "name": train_name,
            "status": status_text,
            "next_station": next_stn_val,
            "delay": delay_val,
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
