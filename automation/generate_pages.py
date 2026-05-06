import json, os
from jinja2 import Environment, FileSystemLoader
PROJECT_ROOT = os.environ.get('PROJECT_ROOT', '.')
with open(os.path.join(PROJECT_ROOT,'datasets','mp-cities.json')) as f:
    cities = json.load(f)
env = Environment(loader=FileSystemLoader(os.path.join(PROJECT_ROOT,'templates')))
template = env.get_template('city-template.html')
for city in cities:
    meta_title = f"Luxury {city['name_en']} Travel | Private Tours & Palace Stays | Planet&Travel"
    meta_desc = f"Bespoke luxury in {city['name_en']}: {city.get('fort','heritage')} tours, {city['luxury_hotel']} stay."
    schema = {"@context":"https://schema.org","@type":"TouristDestination","name":city['name_en'],"description":meta_desc}
    html = template.render(
        meta_title=meta_title, meta_desc=meta_desc,
        site_url="CodeWander-666.github.io/planet-travel",
        slug=city['slug'], schema=json.dumps(schema, indent=2),
        h1=f"Luxury {city['name_en']} Travel: Your Royal Concierge",
        subtitle=f"Private {city.get('fort','heritage')} tours, {city['luxury_hotel']} stays & epicurean journeys",
        email_subject=f"Inquiry%20for%20{city['name_en']}%20Luxury%20Tour",
        name_en=city['name_en']
    )
    with open(os.path.join(PROJECT_ROOT,'cities',f"{city['slug']}.html"),'w') as f:
        f.write(html)
print("✅ City pages generated.")
