document.addEventListener('DOMContentLoaded',()=>{
  const container=document.getElementById('city-cards-container');
  if(container){
    fetch('/planet-travel/datasets/mp-cities.json').then(r=>r.json()).then(cities=>{
      container.innerHTML='';
      cities.slice(0,12).forEach(city=>{
        const card=document.createElement('div');
        card.className='city-card glass';
        card.innerHTML=`<img src="/planet-travel/assets/watercolor/${city.slug}.jpg" alt="Luxury ${city.name_en}"><h3>${city.name_en}</h3><p>${city.description}</p><a href="/planet-travel/cities/${city.slug}.html" class="btn-gold" style="display:inline-block;margin:0 1rem 1rem;">Explore</a>`;
        container.appendChild(card);
      });
    });
  }
});
