let stations = [];
fetch('/planet-travel/datasets/all-india-stations-with-coords.json')
  .then(r => r.json()).then(data => stations = data).catch(() => {
    stations = [{code:"GWL",name:"Gwalior Jn"},{code:"INDB",name:"Indore Jn Bg"},{code:"BPL",name:"Bhopal Jn"}];
  });

function autocomplete(inputId){
  const input = document.getElementById(inputId);
  const wrapper = input.closest('.autocomplete-wrapper');
  let list = wrapper.querySelector('.autocomplete-items');
  if(!list){list=document.createElement('div');list.className='autocomplete-items';wrapper.appendChild(list);}
  input.addEventListener('input',function(){
    const v=this.value.toLowerCase().trim();list.innerHTML='';
    if(!v)return;
    const matches=stations.filter(s=>s.name.toLowerCase().includes(v)||s.code.toLowerCase().includes(v)).slice(0,8);
    matches.forEach(s=>{
      const d=document.createElement('div');d.className='autocomplete-item';
      d.innerHTML=`<strong>${s.code}</strong> — ${s.name}`;
      d.addEventListener('click',()=>{input.value=s.code+' - '+s.name;list.innerHTML='';});
      list.appendChild(d);
    });
  });
  document.addEventListener('click',e=>{if(!wrapper.contains(e.target))list.innerHTML='';});
}

function searchTrains(){
  const fromCode = document.getElementById('from-station').value.split(' - ')[0].trim();
  const toCode = document.getElementById('to-station').value.split(' - ')[0].trim();
  if(!fromCode||!toCode){alert('Please select both stations');return;}
  const res = document.getElementById('train-results');
  res.innerHTML='<p>🔍 Searching trains...</p>';
  fetch(`https://corsproxy.io/?${encodeURIComponent('http://erail.in/rail/getTrains.aspx?Station_From='+fromCode+'&Station_To='+toCode+'&DataSource=0&Language=0&Cache=true')}`)
    .then(r => r.text())
    .then(text => {
      const trains = [];
      const entries = text.split('^');
      for(let i=1;i<entries.length;i++){
        const f = entries[i].split('~');
        if(f.length>=13) trains.push({number:f[0].trim(), name:f[1].trim(), departure:f[10].trim(), arrival:f[11].trim(), duration:f[12].trim()});
      }
      res.innerHTML = trains.length ? trains.map(t=>`<div class="glass" style="padding:1rem;margin:1rem 0;"><h4>${t.number} — ${t.name}</h4><p>Dep: ${t.departure} | Arr: ${t.arrival} | Duration: ${t.duration}</p><button class="btn-gold" onclick="trackTrain('${t.number}')">Track Live</button></div>`).join('') : '<p>No trains found.</p>';
    })
    .catch(() => res.innerHTML='<p>Service unavailable.</p>');
}
function trackTrain(n){window.location.href='/planet-travel/train-live.html?train='+n;}
