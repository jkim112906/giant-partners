// ---------- Language toggle (remembers your choice across pages) ----------
function setLang(lang){
  document.body.classList.remove('lang-ko','lang-en');
  document.body.classList.add('lang-'+lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.classList.toggle('active', b.dataset.lang===lang);
  });
  try { localStorage.setItem('gp-lang', lang); } catch(e){}
}

// On every page load, apply the language you last chose (defaults to Korean)
(function(){
  var saved = 'ko';
  try { saved = localStorage.getItem('gp-lang') || 'ko'; } catch(e){}
  setLang(saved);
})();

// ---------- Sticky bar style on scroll ----------
var topbar = document.getElementById('topbar');
if(topbar){
  window.addEventListener('scroll', function(){
    topbar.classList.toggle('scrolled', window.scrollY > 80);
  });
}

// ---------- Mobile menu ----------
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
if(navToggle && navLinks){
  navToggle.addEventListener('click', function(){ navLinks.classList.toggle('open'); });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
  });
}

// ---------- Scroll reveal ----------
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });