/* IMPORTANT: Replace the sample jobs with real, current and verifiable vacancies before publishing. */
const SITE_CONFIG = {
  brand: 'Gulf Career Hub',
  // Set to the WhatsApp number confirmed for this page, international digits only (no + or spaces).
  whatsappNumber: '923045999859'
};
const jobs = [
 {title:'Construction & Site Roles',country:'Saudi Arabia',category:'Construction',type:'Category guide',description:'Explore verified posts for trades such as pipe fitters, welders, riggers, scaffolders and site support staff.',status:'Guide only'},
 {title:'Driving & Logistics Roles',country:'United Arab Emirates',category:'Driving & Logistics',type:'Category guide',description:'Check licence class, driving experience, route requirements and employer-provided terms before applying.',status:'Guide only'},
 {title:'Technical & Industrial Roles',country:'Qatar',category:'Technical & Industrial',type:'Category guide',description:'Review trade certificates, relevant experience, testing requirements and the actual job location.',status:'Guide only'},
 {title:'Hospitality & Service Roles',country:'Oman',category:'Hospitality',type:'Category guide',description:'Compare role duties, shift patterns, accommodation arrangements and written contract terms.',status:'Guide only'},
 {title:'Maintenance & Facilities Roles',country:'Bahrain',category:'Technical & Industrial',type:'Category guide',description:'Look for clear qualifications, employer details, work location and application instructions.',status:'Guide only'},
 {title:'Skilled & Support Roles',country:'Kuwait',category:'Office & Professional',type:'Category guide',description:'Confirm that each advertised opening is current and that the recruiter and employer are identifiable.',status:'Guide only'}
];
const grid=document.getElementById('jobGrid'), empty=document.getElementById('empty');
function renderJobs(){
 const q=document.getElementById('q').value.trim().toLowerCase(), c=document.getElementById('country').value, cat=document.getElementById('category').value;
 const filtered=jobs.filter(j=>(!q||(j.title+' '+j.country+' '+j.category+' '+j.description).toLowerCase().includes(q))&&(!c||j.country===c)&&(!cat||j.category===cat));
 grid.innerHTML=filtered.map(j=>`<article class="job-card"><div class="job-top"><span class="job-category">${j.category.toUpperCase()}</span><span class="job-status">${j.status}</span></div><h3>${j.title}</h3><div class="job-meta"><span>⌖ ${j.country}</span><span>• ${j.type}</span></div><p>${j.description}</p><div class="job-bottom"><small>General guidance — not a vacancy</small><button data-country="${j.country}">Explore →</button></div></article>`).join('');
 empty.hidden=filtered.length!==0;
 grid.querySelectorAll('button[data-country]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('country').value=b.dataset.country;document.getElementById('jobs').scrollIntoView({behavior:'smooth'});renderJobs()}));
}
['q','country','category'].forEach(id=>document.getElementById(id).addEventListener(id==='q'?'input':'change',renderJobs));
document.getElementById('searchBtn').addEventListener('click',renderJobs);
document.querySelectorAll('.country-card').forEach(b=>b.addEventListener('click',()=>{document.getElementById('country').value=b.dataset.country;document.getElementById('jobs').scrollIntoView({behavior:'smooth'});renderJobs()}));
document.getElementById('menu').addEventListener('click',()=>{const nav=document.getElementById('navlinks');const open=nav.classList.toggle('open');document.getElementById('menu').setAttribute('aria-expanded',String(open))});
document.getElementById('year').textContent=new Date().getFullYear();
const wa=document.getElementById('waLink');
if(SITE_CONFIG.whatsappNumber && /^\d{10,15}$/.test(SITE_CONFIG.whatsappNumber)){wa.href='https://wa.me/'+SITE_CONFIG.whatsappNumber+'?text='+encodeURIComponent('Assalam-o-Alaikum, I would like to ask about Gulf job updates.');}else{wa.href='https://www.facebook.com/profile.php?id=61595872135029';wa.textContent='Contact via Facebook ↗';}
renderJobs();
