import requests, json, os, sys

# Station pairs to pre‑compute for MP (can be extended)
PAIRS = [
    ("GWL", "INDB"), ("GWL", "BPL"), ("GWL", "JHS"),
    ("INDB", "BPL"), ("INDB", "JBP"), ("INDB", "UJN"),
    ("BPL", "JBP"), ("BPL", "JHS"), ("BPL", "UJN"),
    ("JHS", "BPL"), ("JHS", "INDB"), ("JBP", "BPL"),
    ("UJN", "INDB"), ("UJN", "BPL"), ("ET", "BPL"),
    ("ET", "JBP"), ("GWL", "AGC"), ("BPL", "NDLS"),
    ("INDB", "NDLS"), ("GWL", "NDLS")
]

for from_st, to_st in PAIRS:
    try:
        # eRail.in public API — free, no key needed
        url = f"http://erail.in/rail/getTrains.aspx?Station_From={from_st}&Station_To={to_st}&DataSource=0&Language=0"
        resp = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=15)
        if resp.status_code != 200:
            print(f"  ✗ {from_st}-{to_st}: HTTP {resp.status_code}")
            continue

        text = resp.text
        trains = []

        # Parse the pipe‑delimited format
        # Each train entry starts with '^'
        entries = text.split('^')
        for entry in entries[1:]:  # skip header
            fields = entry.split('~')
            if len(fields) < 13:
                continue
            try:
                train_no = fields[0].strip()
                train_name = fields[1].strip()
                dep_time = fields[10].strip()
                arr_time = fields[11].strip()
                duration = fields[12].strip()

                if train_no and train_name:
                    trains.append({
                        "number": train_no,
                        "name": train_name,
                        "departure": dep_time,
                        "arrival": arr_time,
                        "duration": duration
                    })
            except (IndexError, ValueError):
                continue

        os.makedirs("../datasets/trains-between", exist_ok=True)
        with open(f"../datasets/trains-between/{from_st}-{to_st}.json", "w") as f:
            json.dump(trains, f, indent=2)
        print(f"  ✓ {from_st}-{to_st}: {len(trains)} trains")

    except Exception as e:
        print(f"  ✗ {from_st}-{to_st}: {e}")

print("✅ Trains-between data pre‑computed.")
