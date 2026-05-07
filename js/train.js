let stations = [];

// Load station list – fallback to embedded array if fetch fails
fetch('/planet-travel/datasets/stations.json')
  .then(r => r.json())
  .then(data => { stations = data; console.log('✅ ' + stations.length + ' stations loaded'); })
  .catch(() => {
    console.warn('Station fetch failed – using embedded list');
    stations = [
      {"code":"GWL","name":"Gwalior Jn","city":"Gwalior"},
      {"code":"INDB","name":"Indore Jn Bg","city":"Indore"},
      {"code":"BPL","name":"Bhopal Jn","city":"Bhopal"},
      {"code":"JHS","name":"Jhansi Jn","city":"Jhansi"},
      {"code":"UJN","name":"Ujjain Jn","city":"Ujjain"},
      {"code":"JBP","name":"Jabalpur","city":"Jabalpur"},
      {"code":"ET","name":"Itarsi Jn","city":"Itarsi"},
      {"code":"NDLS","name":"New Delhi","city":"Delhi"},
      {"code":"AGC","name":"Agra Cantt","city":"Agra"},
      {"code":"KURJ","name":"Khajuraho","city":"Khajuraho"},
      {"code":"BCT","name":"Mumbai Central","city":"Mumbai"},
      {"code":"HWH","name":"Howrah Jn","city":"Kolkata"},
      {"code":"MAS","name":"Chennai Central","city":"Chennai"},
      {"code":"DBA","name":"Dabra","city":"Dabra"},
      {"code":"SHRN","name":"Sant Hirdaram Nagar","city":"Bairagarh"},
      {"code":"SHR","name":"Sihora Road","city":"Sihora"},
      {"code":"GWL","name":"Gwalior Jn","city":"Gwalior"}
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
    const matches=stations.filter(s=>
      s.name.toLowerCase().includes(v)||s.code.toLowerCase().includes(v)
    ).slice(0,8);
    matches.forEach((s,i)=>{
      const d=document.createElement('div');d.className='autocomplete-item';
      d.innerHTML=`<strong>${s.code}</strong> — ${s.name}${s.city?', '+s.city:''}`;
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

// 🔥 PRIMARY: erail.in free public endpoint (no key, unlimited)
function searchTrains(){
  const fromCode=document.getElementById('from-station').value.split(' - ')[0].trim();
  const toCode=document.getElementById('to-station').value.split(' - ')[0].trim();
  if(!fromCode||!toCode){alert('Please select both stations');return;}
  const res=document.getElementById('train-results');
  res.innerHTML='<p style="color:var(--gold-light);padding:1rem;">🔍 Searching trains...</p>';

  // Step 1: Try erail.in public API (proven, free, no key)
  fetch(`https://corsproxy.io/?${encodeURIComponent('http://erail.in/rail/getTrains.aspx?Station_From='+fromCode+'&Station_To='+toCode+'&DataSource=0&Language=0&Cache=true')}`)
    .then(r => {
      if(!r.ok) throw new Error('erail failed');
      return r.text();
    })
    .then(text => {
      if(!text || text.length < 10) throw new Error('empty');
      const trains = parseErailResponse(text);
      if(trains.length > 0){
        displayTrains(trains);
      } else {
        throw new Error('no trains');
      }
    })
    .catch(() => {
      // Step 2: Try pre‑computed JSON (cached by GitHub Action)
      fetch('/planet-travel/datasets/trains-between/'+fromCode+'-'+toCode+'.json')
        .then(r2 => r2.ok ? r2.json() : [])
        .then(trains => {
          if(trains.length > 0) displayTrains(trains);
          else res.innerHTML='<p style="color:var(--gold-light);">No trains found. <a href="/planet-travel/concierge.html">Ask our concierge</a>.</p>';
        });
    });
}

// Parse erail.in pipe-delimited format
function parseErailResponse(text){
  const trains = [];
  const entries = text.split('^');
  for(let i=1; i<entries.length; i++){
    const fields = entries[i].split('~');
    if(fields.length >= 13){
      trains.push({
        number: fields[0].trim(),
        name: fields[1].trim(),
        departure: fields[10].trim(),
        arrival: fields[11].trim(),
        duration: fields[12].trim(),
        train_no: fields[0].trim(),
        train_name: fields[1].trim(),
        from_time: fields[10].trim(),
        to_time: fields[11].trim(),
        travel_time: fields[12].trim()
      });
    }
  }
  return trains;
}

function displayTrains(trains){
  const list=document.getElementById('train-results');
  list.innerHTML=trains.map(t=>`
    <div class="glass" style="padding:1rem;margin:1rem 0;">
      <h4>${t.train_no||t.number} — ${t.train_name||t.name}</h4>
      <p>🚂 Dep: ${t.from_time||t.departure} | 🏁 Arr: ${t.to_time||t.arrival} | ⏱️ ${t.travel_time||t.duration}</p>
      <button class="btn-gold" onclick="trackTrain('${t.train_no||t.number}')">📍 Track Live</button>
    </div>`).join('');
}

function trackTrain(n){window.location.href='/planet-travel/train-live.html?train='+n;}
