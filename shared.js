const ADMIN_KEY='apdc-mini-admin-auth';
function isAdmin(){return sessionStorage.getItem(ADMIN_KEY)==='1'}
function requireAdmin(){if(!isAdmin()){location.replace('admin.html');return false}return true}

const STATE_KEY='apdc-mini-all-state-v1';
const SCORE_KEY='apdc-mini-all-scores-v1';
const RESULT_KEY='apdc-mini-all-results-v1';
const bc=('BroadcastChannel'in window)?new BroadcastChannel('apdc-mini-all'):null;
function defaultState(){return{index:0,status:'READY',updatedAt:Date.now()}}
function loadState(){try{return JSON.parse(localStorage.getItem(STATE_KEY))||defaultState()}catch(e){return defaultState()}}
function saveState(s){s.updatedAt=Date.now();localStorage.setItem(STATE_KEY,JSON.stringify(s));if(bc)bc.postMessage({type:'state',data:s});window.dispatchEvent(new CustomEvent('apdc-state',{detail:s}))}
function subscribeState(fn){window.addEventListener('storage',e=>{if(e.key===STATE_KEY)fn(loadState())});window.addEventListener('apdc-state',e=>fn(e.detail));if(bc)bc.onmessage=e=>{if(e.data?.type==='state')fn(e.data.data)}}
function statusText(x){return{READY:'UP NEXT',LIVE:'NOW PLAYING',FINISHED:'FINISHED'}[x]||x}
function loadJSON(key){try{return JSON.parse(localStorage.getItem(key))||{}}catch(e){return{}}}
function saveJSON(key,val){localStorage.setItem(key,JSON.stringify(val))}
function nav(active){return `<header class="top"><a class="brand" href="index.html">APDC MINI</a><nav class="nav">
<a href="index.html">ENTRY</a>
<a class="${active==='dashboard'?'active':''}" href="dashboard.html">DASHBOARD</a>
<a class="${active==='judge'?'active':''}" href="judge.html">JUDGE</a>
<a class="${active==='mc'?'active':''}" href="mc.html">MC</a>
<a class="${active==='live'?'active':''}" href="live.html">LIVE</a>
<a class="${active==='broadcast'?'active':''}" href="broadcast.html">BROADCAST</a>
<a class="${active==='results'?'active':''}" href="results.html">RESULTS</a>
</nav></header>`}
