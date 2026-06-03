/* ======================================
SCROLL PROGRESS BAR
====================================== */

const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {

const scrollTop = window.scrollY;

const documentHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(scrollTop / documentHeight) * 100;

progressBar.style.width = progress + '%';

});

/* ======================================
SCROLL REVEAL
====================================== */

const revealElements =
document.querySelectorAll(
'.card,.project-card,.document-card,.skill,.timeline-item,.section-title'
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

el.classList.add('fade-up');

revealObserver.observe(el);

});

/* ======================================
NAVBAR SCROLL EFFECT
====================================== */

const navbar =
document.querySelector('.navbar');

window.addEventListener('scroll',()=>{

if(window.scrollY > 50){

navbar.style.background =
'rgba(10,10,10,.92)';

navbar.style.borderBottom =
'1px solid rgba(212,175,55,.25)';

}

else{

navbar.style.background =
'rgba(10,10,10,.80)';

navbar.style.borderBottom =
'1px solid rgba(212,175,55,.15)';

}

});

/* ======================================
ACTIVE MENU ITEM
====================================== */

const sections =
document.querySelectorAll('section');

const navLinks =
document.querySelectorAll('.navbar a');

window.addEventListener('scroll',()=>{

let current = '';

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute('id');

}

});

navLinks.forEach(link=>{

link.classList.remove('active');

if(

link.getAttribute('href')
=== '#' + current

){

link.classList.add('active');

}

});

});

/* ======================================
SMOOTH INTERNAL LINKS
====================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
'click',
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({

behavior:'smooth'

});

}

}

);

});

/* ======================================
HERO FADE EFFECT
====================================== */

const hero =
document.querySelector('.hero');

window.addEventListener('scroll',()=>{

const value =
window.scrollY;

hero.style.opacity =
1 - value / 700;

});

/* ======================================
GOLD GLOW FOLLOW EFFECT
====================================== */

const glow =
document.createElement('div');

glow.classList.add('mouse-glow');

document.body.appendChild(glow);

document.addEventListener(
'mousemove',
(e)=>{

glow.style.left =
e.clientX + 'px';

glow.style.top =
e.clientY + 'px';

}
);

/* ======================================
CONSOLE BRANDING
====================================== */

console.log(
'%cمحمد مهدی حسینی',
'color:#D4AF37;font-size:20px;font-weight:bold;'
);

console.log(
'%cPortfolio Website',
'color:white;font-size:14px;'
);
