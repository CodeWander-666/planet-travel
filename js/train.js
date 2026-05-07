let stations = [];
fetch('/planet-travel/datasets/all-india-stations-with-coords.json')
  .then(r => r.json())
  .then(data => { stations = data; console.log('✅ ' + stations.length + ' stations loaded'); })
  .catch(() => {
    console.warn('Station fetch failed – using embedded list');
    stations = [
      {"code":"GWL","name":"Gwalior Jn","lat":26.2183,"lon":78.1828},
      {"code":"INDB","name":"Indore Jn Bg","lat":22.7196,"lon":75.8577},
      {"code":"BPL","name":"Bhopal Jn","lat":23.2599,"lon":77.4126},
      {"code":"NDLS","name":"New Delhi","lat":28.6419,"lon":77.2194},
      {"code":"BCT","name":"Mumbai Central","lat":18.9398,"lon":72.8355},
      {"code":"HWH","name":"Howrah Jn","lat":22.5855,"lon":88.3426}
    ];
  });

function autocomplete(inputId){
  const input = document.getElementById(inputId);
  const wrapper = input.closest('.autocomplete-wrapper');
  let list = wrapper.querySelector('.autocomplete-items');
  if(!list){list=document.createElement('div');list.className='autocomplete-items';wrapper.appendChild(list);}
  let idx=-1;
  input.addEventListener('input',function(){
    const v=this.value.toLowerCase().trim();list.innerHTML='';idx=-1;
    if(!v)return;
    const matches=stations.filter(s=>s.name.toLowerCase().includes(v)||s.code.toLowerCase().includes(v)).slice(0,8);
    matches.forEach((s,i)=>{
      const d=document.createElement('div');d.className='autocomplete-item';
      d.innerHTML=`<strong>${s.code}</strong> — ${s.name}`;
      d.addEventListener('click',()=>{input.value=s.code+' - '+s.name;list.innerHTML='';});
      list.appendChild(d);
    });
  });
  input.addEventListener('keydown',function(e){
    const items=list.getElementsByClassName('autocomplete-item');
    if(!items.length)return;
    if(e.key==='ArrowDown'){e.preventDefault();idx=Math.min(idx+1,items.length-1);highlight(items,idx);}
    else if(e.key==='ArrowUp'){e.preventDefault();idx=Math.max(idx-1,0);highlight(items,idx);}
    else if(e.key==='Enter'){e.preventDefault();if(idx>=0)items[idx].click();}
  });
  function highlight(items,i){for(let j=0;j<items.length;j++)items[j].classList.remove('selected');if(i>=0)items[i].classList.add('selected');}
  document.addEventListener('click',e=>{if(!wrapper.contains(e.target))list.innerHTML='';});
}

// Search trains between stations via erail.in timetable
function searchTrains(){
  const fromCode = document.getElementById('from-station').value.split(' - ')[0].trim();
  const toCode = document.getElementById('to-station').value.split(' - ')[0].trim();
  if(!fromCode||!toCode){alert('Please select both stations');return;}
  const res = document.getElementById('train-results');
  res.innerHTML='<p>🔍 Searching trains...</p>';

  fetch(`https://corsproxy.io/?${encodeURIComponent(`http://erail.in/rail/getTrains.aspx?Station_From=${fromCode}&Station_To=${toCode}&DataSource=0&Language=0&Cache=true`)}`)
    .then(r => r.text())
    .then(text => {
      if(!text || text.length < 10) throw new Error('empty');
      const trains = parseErailResponse(text);
      if(trains.length > 0) displayTrains(trains);
      else res.innerHTML='<p>No trains found. <a href="/planet-travel/concierge.html">Ask our concierge</a>.</p>';
    })
    .catch(() => res.innerHTML='<p>Service temporarily unavailable. Please try again.</p>');
}

function parseErailResponse(text){
  const trains = [];
  const entries = text.split('^');
  for(let i=1;i<entries.length;i++){
    const fields = entries[i].split('~');
    if(fields.length>=13){
      trains.push({
        number: fields[0].trim(), name: fields[1].trim(),
        departure: fields[10].trim(), arrival: fields[11].trim(), duration: fields[12].trim()
      });
    }
  }
  return trains;
}

function displayTrains(trains){
  const list=document.getElementById('train-results');
  list.innerHTML=trains.map(t=>`
    <div class="glass" style="padding:1rem;margin:1rem 0;">
      <h4>${t.number} — ${t.name}</h4>
      <p>🚂 Dep: ${t.departure} | 🏁 Arr: ${t.arrival} | ⏱️ ${t.duration}</p>
      <button class="btn-gold" onclick="trackTrain('${t.number}')">📍 Track Live</button>
    </div>`).join('');
}

function trackTrain(n){window.location.href=`/planet-travel/train-live.html?train=${n}`;}
