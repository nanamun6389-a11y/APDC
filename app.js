
const ADMIN_KEY='apdc_mini_admin_v3';
const SCORE_KEY='apdc_mini_scores_v3';
const RESULT_KEY='apdc_mini_results_v3';
const STATE_KEY='apdc_mini_state_v3';

function q(id){ return document.getElementById(id); }
function readJSON(key, fallback={}) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch(e){ return fallback; }
}
function writeJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }

function isAdmin(){ return sessionStorage.getItem(ADMIN_KEY)==='1'; }
function requireAdmin(){ if(!isAdmin()) location.replace('admin.html'); }
function adminLogin(password){
  if(password==='0070'){ sessionStorage.setItem(ADMIN_KEY,'1'); return true; }
  return false;
}
function adminLogout(){ sessionStorage.removeItem(ADMIN_KEY); location.href='index.html'; }

function defaultState(){ return {groupIndex:0,status:'READY'}; }
function getState(){ return readJSON(STATE_KEY, defaultState()); }
function setState(s){ writeJSON(STATE_KEY,s); window.dispatchEvent(new Event('storage')); }
function statusText(s){ return s==='LIVE'?'IN PROGRESS':s==='FINISHED'?'FINISHED':'UP NEXT'; }

function eventByNo(no){ return APDC_EVENTS.find(e=>String(e.no)===String(no)); }
function groupDetail(g){ return {...g, events:g.events.map(eventByNo).filter(Boolean)}; }
function allGroups(){ return APDC_GROUPS.map(groupDetail); }
function uniqueEntries(group){
  const m=new Map();
  group.events.forEach(e=>e.entries.forEach(p=>m.set(String(p.backNo)+'|'+p.name,p)));
  return [...m.values()];
}
function scoreKey(judgeKey,eventNo){ return judgeKey+'|'+eventNo; }
function getScores(){ return readJSON(SCORE_KEY,{}); }
function saveScores(v){ writeJSON(SCORE_KEY,v); }
function getResults(){ return readJSON(RESULT_KEY,{}); }
function saveResults(v){ writeJSON(RESULT_KEY,v); }

function nav(active=''){
  return `<header class="topbar">
    <a class="brand" href="index.html">APDC<br>MINI</a>
    <nav>
      <a href="index.html">ENTRY</a>
      ${isAdmin()?`<a href="dashboard.html">DASHBOARD</a><a href="judge.html">JUDGE</a><a href="results.html">RESULTS</a><a href="admin.html">ADMIN</a>`:''}
    </nav>
  </header>`;
}
