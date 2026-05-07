import requests, json, os, sys, time
from bs4 import BeautifulSoup

PAIRS = [("GWL","INDB"),("GWL","BPL"),("INDB","BPL"),("INDB","JBP"),("BPL","JBP"),
         ("GWL","JHS"),("JHS","BPL"),("UJN","INDB"),("BPL","UJN"),("BPL","ET"),
         ("GWL","AGC"),("BPL","NDLS"),("INDB","NDLS"),("GWL","NDLS"),("ET","JBP")]

def get_trains_erail(frm, to):
    url = f"http://erail.in/rail/getTrains.aspx?Station_From={frm}&Station_To={to}&DataSource=0&Language=0&Cache=true"
    try:
        resp = requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=15)
        if resp.status_code != 200: return []
        text = resp.text
        trains = []
        entries = text.split('^')
        for entry in entries[1:]:
            fields = entry.split('~')
            if len(fields) >= 13:
                trains.append({
                    "number": fields[0].strip(), "name": fields[1].strip(),
                    "departure": fields[10].strip(), "arrival": fields[11].strip(),
                    "duration": fields[12].strip()
                })
        return trains
    except: return []

def is_cancelled_runningstatus(train_no):
    try:
        url = f"https://runningstatus.in/status/{train_no}"
        resp = requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=10)
        soup = BeautifulSoup(resp.text, 'html.parser')
        return "Train Cancelled" in soup.get_text()
    except: return False

def get_route_erail(train_no):
    url = f"http://erail.in/rail/getTrainRoute.aspx?TrainNo={train_no}"
    try:
        resp = requests.get(url, headers={'User-Agent':'Mozilla/5.0'}, timeout=15)
        if resp.status_code != 200: return []
        text = resp.text
        stations = []
        entries = text.split('^')
        for entry in entries[1:]:
            fields = entry.split('~')
            if len(fields) >= 4:
                stn_code = fields[0].strip()
                stn_name = fields[1].strip()
                pl = fields[2].strip() if len(fields)>2 else ""
                stations.append({"code": stn_code, "name": stn_name, "platform": pl})
        return stations
    except: return []

os.makedirs("../datasets/trains-between", exist_ok=True)
os.makedirs("../datasets/train-routes", exist_ok=True)
all_trains_routes = {}

for frm, to in PAIRS:
    trains = get_trains_erail(frm, to)
    running_trains = []
    print(f"  {frm}-{to}: {len(trains)} timetable trains")
    for t in trains:
        if not is_cancelled_runningstatus(t['number']):
            running_trains.append(t)
            # fetch route once and store
            if t['number'] not in all_trains_routes:
                route = get_route_erail(t['number'])
                all_trains_routes[t['number']] = route
                with open(f"../datasets/train-routes/{t['number']}.json","w") as f:
                    json.dump({"stations": route}, f, indent=2)
        else:
            print(f"    ✗ {t['number']} cancelled")
    with open(f"../datasets/trains-between/{frm}-{to}.json","w") as f:
        json.dump(running_trains, f, indent=2)
    print(f"    → {len(running_trains)} running trains saved")
print("✅ Trains-between filtered & route files updated.")
