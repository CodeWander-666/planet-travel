import json, os, sys, random
from jinja2 import Environment, FileSystemLoader

# Get project root from environment or infer
PROJECT_ROOT = os.environ.get('PROJECT_ROOT', os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))

with open(os.path.join(PROJECT_ROOT, 'datasets', 'mp-cities.json'), encoding='utf-8') as f:
    cities = json.load(f)

env = Environment(loader=FileSystemLoader(os.path.join(PROJECT_ROOT, 'templates')))
template = env.get_template('city-template.html')

def generate_faq_html(city):
    qa = [
        (f"What is the best luxury tour in {city['name_en']}?",
         f"Planet&Travel’s private dawn tour of {city.get('fort','the city')} includes champagne and a historian. Unmatched exclusivity."),
        (f"Which are the best 5‑star hotels in {city['name_en']}?",
         f"{city['luxury_hotel']} provides opulent suites and impeccable service."),
        (f"When is the best time to visit {city['name_en']} for luxury travel?",
         f"October to March offers perfect weather for heritage and wildlife. Our concierge designs seasonal surprises.")
    ]
    items = []
    for q, a in qa:
        items.append(f'<div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">'
                     f'<h3 itemprop="name">{q}</h3>'
                     f'<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">'
                     f'<div itemprop="text">{a}</div></div></div>')
    return '\n'.join(items)

def generate_related_cards(current_slug):
    others = [c for c in cities if c['slug'] != current_slug]
    selected = random.sample(others, min(3, len(others)))
    cards = []
    for c in selected:
        cards.append(f'''
        <div class="city-card">
          <img src="/planet-travel/assets/watercolor/{c['slug']}.jpg" alt="Luxury {c['name_en']}">
          <h3>{c['name_en']}</h3>
          <p>{c['description']}</p>
          <a href="/planet-travel/cities/{c['slug']}.html" class="btn-outline-gold">Discover</a>
        </div>''')
    return '\n'.join(cards)

def generate_body(city):
    intros = [
        f"In the heart of India lies {city['name_en']}, where whispers of maharajas echo through centuries. Our private guide unlocks hidden chambers of {city.get('fort','its heritage')} for you alone.",
        f"Imagine silk cushions on a rooftop overlooking {city.get('fort','the cityscape')}. {city['name_en']} isn't just a destination; it's a passage to royal living, curated by Planet&Travel.",
        f"Beyond the tourist trail, {city['name_en']} reveals its secrets – a private audience with a fort custodian, a dinner lit by a thousand candles. This is luxury unbounded."
    ]
    body = random.choice(intros)
    body += f" Stay at {city['luxury_hotel']}, where heritage meets haute couture service. Every moment is designed for the discerning traveller."
    return body

for city in cities:
    meta_title = f"Luxury {city['name_en']} Travel – Private Tours, 5‑Star Stays | Planet&Travel"
    meta_desc = f"Bespoke {city['name_en']} luxury: {city.get('fort','heritage')} tours, {city['luxury_hotel']} stay, exclusive experiences. Enquire now."

    schema = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": city['name_en'],
        "description": f"Luxury heritage travel in {city['name_en']} curated by Planet&Travel",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city['name_en'],
            "addressRegion": "Madhya Pradesh",
            "addressCountry": "IN"
        },
        "touristType": "Luxury heritage travellers"
    }

    html = template.render(
        meta_title=meta_title,
        meta_desc=meta_desc,
        site_url="CodeWander-666.github.io/planet-travel"
        slug=city['slug'],
        schema=json.dumps(schema, indent=2),
        h1=f"Luxury {city['name_en']} Travel: Your Royal Concierge",
        subtitle=f"Private {city.get('fort','heritage')} tours, {city['luxury_hotel']} stays & epicurean journeys",
        email_subject=f"Inquiry%20for%20{city['name_en']}%20Luxury%20Tour",
        name_en=city['name_en'],
        body_content=generate_body(city),
        faq_html=generate_faq_html(city),
        related_cards=generate_related_cards(city['slug'])
    )

    out_path = os.path.join(PROJECT_ROOT, 'cities', f"{city['slug']}.html")
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)

print("✅ All 25 city pages generated with luxury schema.")
