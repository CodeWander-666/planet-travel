import json, os, datetime
trains = [
  {"number":"12138","name":"Punjab Mail","status":"Running on time","lat":26.2183,"lon":78.1828},
  {"number":"12919","name":"Malwa Express","status":"Delayed by 15 min","lat":23.2599,"lon":77.4126}
]
data = {"updated": datetime.datetime.utcnow().isoformat(), "trains": trains}
os.makedirs("../train-status", exist_ok=True)
with open("../train-status/live-trains.json", "w") as f:
    json.dump(data, f)
print("train data updated")
