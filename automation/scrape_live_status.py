import requests, json, os, datetime
from bs4 import BeautifulSoup

TRAINS = ["12138","12919","12301","12002","12421","12627","22691","14320","11126","21126"]
coord_lookup = {
    'GWL':(26.2183,78.1828),'INDB':(22.7196,75.8577),'BPL':(23.2599,77.4126),
    'JHS':(25.4445,78.5680),'AGC':(27.1558,78.0060),'ET':(23.1825,79.9882),
    'UJN':(23.1765,75.7885),'JBP':(23.1815,79.9864),'NDLS':(28.6419,77.2194)
}
today = datetime.datetime.now().strftime("%Y%m%d")
trains_data = []
for train in TRAINS:
    try:
        url = f"https://runningstatus.in/status/{train}-on-{today}"
        resp = requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=15)
        if resp.status_code != 200: continue
        soup = BeautifulSoup(resp.text, 'html.parser')
        name_el = soup.find('h1')
        train_name = name_el.text.strip() if name_el else f"Train {train}"
        table = soup.find('table')
        status_note = "Running"
        last_station = ""
        if table:
            rows = table.find_all('tr')
            for row in rows:
                cols = row.find_all('td')
                if len(cols)>=4:
                    stn = cols[0].get_text(strip=True)
                    if "Destination" not in stn and stn:
                        last_station = stn
                        status_note = cols[3].get_text(strip=True) if len(cols)>3 else "On time"
        lat, lon = 23.5, 78.5
        for code,coords in coord_lookup.items():
            if code.lower() in last_station.lower():
                lat, lon = coords
                break
        trains_data.append({"trainNo":train,"trainName":train_name,"statusNote":status_note,"lastStation":last_station,"currentLat":lat,"currentLon":lon})
    except Exception as e:
        print(f"  ✗ {train}: {e}")
os.makedirs("../train-status", exist_ok=True)
with open("../train-status/live-trains.json","w") as f:
    json.dump({"updated":datetime.datetime.utcnow().isoformat(),"trains":trains_data},f,indent=2)
print(f"✅ {len(trains_data)} live trains updated.")
