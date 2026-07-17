
const KEY='apdc-mini-state-v2';const bc=('BroadcastChannel'in window)?new BroadcastChannel('apdc-mini-v2'):null;
function def(){return{index:0,status:'READY'}}function load(){try{return JSON.parse(localStorage.getItem(KEY))||def()}catch(e){return def()}}
function save(s){localStorage.setItem(KEY,JSON.stringify(s));if(bc)bc.postMessage(s);window.dispatchEvent(new CustomEvent('apdc',{detail:s}))}
function sub(fn){window.addEventListener('storage',e=>{if(e.key===KEY)fn(load())});window.addEventListener('apdc',e=>fn(e.detail));if(bc)bc.onmessage=e=>fn(e.data)}
function st(x){return{READY:'UP NEXT',LIVE:'NOW PLAYING',FINISHED:'FINISHED'}[x]||x}
