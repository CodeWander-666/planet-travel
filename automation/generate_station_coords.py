import requests, json, re, os
from bs4 import BeautifulSoup

def get_stations_from_wikipedia():
    """Scrape the Wikipedia page for List of railway stations in India."""
    url = "https://en.wikipedia.org/wiki/List_of_railway_stations_in_India"
    try:
        resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
        soup = BeautifulSoup(resp.text, 'html.parser')
        # Find the main table with class 'wikitable sortable'
        table = soup.find('table', {'class': 'wikitable'})
        stations = []
        if not table:
            return stations
        rows = table.find_all('tr')
        for row in rows[1:]:  # skip header
            cols = row.find_all('td')
            if len(cols) >= 4:
                code = cols[0].get_text(strip=True)
                name = cols[1].get_text(strip=True)
                # Extract coordinates from a span or link in the 4th column
                coord_cell = cols[3]
                lat, lon = 0.0, 0.0
                # Look for a span with class 'geo' or a link to geohack
                geo_span = coord_cell.find('span', {'class': 'geo'})
                if geo_span:
                    coords_text = geo_span.get_text(strip=True)
                    parts = coords_text.split(';')
                    if len(parts) == 2:
                        try:
                            lat = float(parts[0].strip())
                            lon = float(parts[1].strip())
                        except ValueError:
                            pass
                if lat != 0.0 and lon != 0.0:
                    stations.append({"code": code, "name": name, "lat": lat, "lon": lon})
        print(f"Found {len(stations)} stations with coordinates.")
        return stations
    except Exception as e:
        print(f"Error scraping Wikipedia: {e}")
        return []

# 2. Generate the dataset
stations = get_stations_from_wikipedia()
if stations:
    os.makedirs("../datasets", exist_ok=True)
    with open("../datasets/all-india-stations-with-coords.json", "w") as f:
        json.dump(stations, f, indent=2)
    print(f"✅ Saved {len(stations)} station coordinates to datasets/")
else:
    print("❌ Failed to generate station data. Using embedded fallback.")
