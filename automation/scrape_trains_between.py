import requests, json, os
from bs4 import BeautifulSoup

PAIRS = [("GWL","INDB"), ("INDB","BPL"), ("GWL","BPL"), ("JHS","BPL"), ("ET","BPL")]
headers = {'User-Agent': 'Mozilla/5.0'}
base_url = "https://www.runningstatus.in/trains-between"
for from_st, to_st in PAIRS:
    try:
        url = f"{base_url}/{from_st}/{to_st}"
        resp = requests.get(url, headers=headers, timeout=15)
        if resp.status_code != 200: continue
        soup = BeautifulSoup(resp.text, 'html.parser')
        table = soup.find('table')
        if not table: continue
        trains = []
        for row in table.find_all('tr')[1:]:
            cols = row.find_all('td')
            if len(cols) >= 5:
                trains.append({
                    "number": cols[0].text.strip(),
                    "name": cols[1].text.strip(),
                    "departure": cols[2].text.strip(),
                    "arrival": cols[3].text.strip(),
                    "duration": cols[4].text.strip()
                })
        os.makedirs(f"../datasets/trains-between", exist_ok=True)
        with open(f"../datasets/trains-between/{from_st}-{to_st}.json","w") as f:
            json.dump(trains, f, indent=2)
        print(f"  ✓ {from_st}-{to_st}: {len(trains)} trains")
    except Exception as e:
        print(f"  ✗ {from_st}-{to_st}: {e}")
print("✅ Trains-between data updated.")
