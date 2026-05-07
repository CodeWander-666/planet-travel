import requests, json, re, os
from bs4 import BeautifulSoup

def get_stations_from_wikipedia():
    url = "https://en.wikipedia.org/wiki/List_of_railway_stations_in_India"
    resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
    soup = BeautifulSoup(resp.text, 'html.parser')
    table = soup.find('table', {'class': 'wikitable'})
    stations = []
    if not table: return stations
    rows = table.find_all('tr')
    for row in rows[1:]:
        cols = row.find_all('td')
        if len(cols) >= 4:
            code = cols[0].get_text(strip=True)
            name = cols[1].get_text(strip=True)
            coord_cell = cols[3]
            geo_span = coord_cell.find('span', {'class': 'geo'})
            if geo_span:
                coords_text = geo_span.get_text(strip=True)
                parts = coords_text.split(';')
                if len(parts) == 2:
                    try:
                        lat = float(parts[0].strip())
                        lon = float(parts[1].strip())
                        stations.append({"code": code, "name": name, "lat": lat, "lon": lon})
                    except ValueError: pass
    print(f"Found {len(stations)} stations with coordinates.")
    return stations

stations = get_stations_from_wikipedia()
os.makedirs("../datasets", exist_ok=True)
with open("../datasets/all-india-stations-with-coords.json", "w") as f:
    json.dump(stations, f, indent=2)
print(f"✅ Saved {len(stations)} stations.")
