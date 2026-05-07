import requests, json, os, datetime, re
from bs4 import BeautifulSoup

TRAINS = ["12138","12919","12301","12002","12421","12627","22691","14320","11126","21126"]

def get_railyatri_live(train_no):
    try:
        url = f"https://www.railyatri.in/live-train-running-status/{train_no}"
        resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
        soup = BeautifulSoup(resp.text, 'html.parser')
        script = soup.find('script', {'type': 'application/ld+json'})
        if script:
            data = json.loads(script.string)
            return {
                "trainNo": train_no,
                "trainName": data.get('name', f'Train {train_no}'),
                "status": data.get('trainStatus', 'Running'),
                "currentLocation": data.get('currentLocation', ''),
                "delay": data.get('delay', 'On time'),
                "nextStation": data.get('nextStation', '')
            }
    except Exception as e:
        print(f"  RailYatri error {train_no}: {e}")
    return None

def get_runningstatus_route(train_no):
    try:
        url = f"https://runningstatus.in/status/{train_no}"
        resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
        soup = BeautifulSoup(resp.text, 'html.parser')
        table = soup.find('table')
        if not table: return []
        rows = table.find_all('tr')
        stations = []
        for row in rows:
            cols = row.find_all('td')
            if len(cols) >= 4 and 'Destination' not in cols[0].text:
                code = cols[1].text.strip() if len(cols) > 1 else ''
                name = cols[0].text.strip()
                platform = cols[2].text.strip() if len(cols) > 2 else ''
                stations.append({"code": code, "name": name, "platform": platform})
        return stations
    except Exception as e:
        print(f"  RunningStatus error {train_no}: {e}")
        return []

live_data = []
os.makedirs("../train-status", exist_ok=True)
os.makedirs("../datasets/train-routes", exist_ok=True)

for train in TRAINS:
    # Live status
    status = get_railyatri_live(train)
    if status:
        live_data.append(status)
        print(f"  ✓ {train}: {status['currentLocation']}")
    # Route cache
    route = get_runningstatus_route(train)
    if route:
        with open(f"../datasets/train-routes/{train}.json", "w") as f:
            json.dump({"stations": route}, f, indent=2)
        print(f"  ✓ Route for {train} cached ({len(route)} stations)")

with open("../train-status/live-trains.json", "w") as f:
    json.dump({"updated": datetime.datetime.utcnow().isoformat(), "trains": live_data}, f, indent=2)
print(f"✅ {len(live_data)} trains updated.")
