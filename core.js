(function(root){
'use strict';
const names=['1. Mose','2. Mose','3. Mose','4. Mose','5. Mose','Josua','Richter','Rut','1. Samuel','2. Samuel','1. Könige','2. Könige','1. Chronik','2. Chronik','Esra','Nehemia','Ester','Hiob','Psalmen','Sprüche','Prediger','Hohelied','Jesaja','Jeremia','Klagelieder','Hesekiel','Daniel','Hosea','Joel','Amos','Obadja','Jona','Micha','Nahum','Habakuk','Zefanja','Haggai','Sacharja','Maleachi','Matthäus','Markus','Lukas','Johannes','Apostelgeschichte','Römer','1. Korinther','2. Korinther','Galater','Epheser','Philipper','Kolosser','1. Thessalonicher','2. Thessalonicher','1. Timotheus','2. Timotheus','Titus','Philemon','Hebräer','Jakobus','1. Petrus','2. Petrus','1. Johannes','2. Johannes','3. Johannes','Judas','Offenbarung'];
const counts=[50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
const books=names.map((name,id)=>({id,name,chapters:counts[id]}));
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
const day=s=>Date.parse(s+'T00:00:00Z')/86400000;
const validDate=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&Number.isFinite(day(s))&&new Date(day(s)*86400000).toISOString().slice(0,10)===s;
function validate(s){
 if(!s||s.version!==1||!Array.isArray(s.goals)||s.goals.length>200)throw Error('Unbekanntes Dateiformat.');
 const ids=new Set();
 for(const g of s.goals){
 if(!g||typeof g.id!=='string'||ids.has(g.id)||typeof g.name!=='string'||!g.name.trim()||g.name.length>120||!validDate(g.created)||g.created>today()||!Array.isArray(g.books)||!g.books.length||new Set(g.books).size!==g.books.length||g.books.some(b=>!Number.isInteger(b)||!books[b])||!Array.isArray(g.entries)||g.entries.length>10000||g.target&& !validDate(g.target))throw Error('Ungültiges Leseziel.');
 ids.add(g.id);
 for(const e of g.entries){if(!e||typeof e.id!=='string'||!validDate(e.date)||e.date>today()||e.date<g.created||!g.books.includes(e.book)||!Number.isInteger(e.from)||!Number.isInteger(e.to)||e.from<1||e.to<e.from||e.to>books[e.book].chapters||typeof e.note!=='string'||e.note.length>5000)throw Error('Ungültiger Leseeintrag.');}
 }return s;
}
function stats(g,now=today()){
 const chapters=new Map();
 for(const e of g.entries.filter(e=>e.date<=now).sort((a,b)=>a.date.localeCompare(b.date)))for(let c=e.from;c<=e.to;c++){const k=e.book+':'+c;if(!chapters.has(k))chapters.set(k,e.date);}
 const total=g.books.reduce((n,b)=>n+books[b].chapters,0),read=chapters.size,days=Math.max(1,day(now)-day(g.created)+1);
 const recent=[...chapters.values()].filter(d=>day(d)>=day(now)-6).length;
 return {total,read,left:total-read,long:read/days,week:recent/7,chapters};
}
root.Bible={books,today,day,validDate,validate,stats};
})(typeof window==='undefined'?globalThis:window);
