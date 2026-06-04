/* ====================================
ACTIVE MENU HIGHLIGHT
==================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".sidebar-nav a");

window.addEventListener(
"scroll",
updateActiveMenu
);

window.addEventListener(
"load",
updateActiveMenu
);

/* ====================================
SMOOTH SCROLL
==================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

}
);

});

/* ====================================
SIMPLE REVEAL ANIMATION
==================================== */

const revealElements =
document.querySelectorAll(
".card,.project-card,.document-card,.skill,.timeline-item"
);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"revealed"
);

}

});

},

{
threshold:0.1
}

);

revealElements.forEach(el=>{

el.classList.add("reveal");

revealObserver.observe(el);

});

/* ====================================
YEAR AUTO UPDATE
==================================== */

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
"© " + new Date().getFullYear();

}

/* ====================================
HEADER SHADOW ON SCROLL
==================================== */

window.addEventListener(
"scroll",
()=>{

const sidebar =
document.querySelector(
".sidebar"
);

if(window.scrollY > 50){

sidebar.style.boxShadow =
"0 15px 40px rgba(0,0,0,.08)";

}else{

sidebar.style.boxShadow =
"0 10px 30px rgba(0,0,0,.03),0 30px 60px rgba(0,0,0,.04)";

}

}
);


/* ==========================
   MOBILE MENU
========================== */

const menuToggle =
document.getElementById(
'menuToggle'
);

const sidebar =
document.querySelector(
'.sidebar'
);

const closeSidebar =
document.getElementById(
'closeSidebar'
);

const overlay =
document.getElementById(
'overlay'
);

const mobileLinks =
document.querySelectorAll(
'.sidebar-nav a'
);

function closeMenu(){

sidebar.classList.remove(
'active'
);

overlay.classList.remove(
'active'
);

}

function openMenu(){

sidebar.classList.add(
'active'
);

overlay.classList.add(
'active'
);

}

if(menuToggle){

menuToggle.addEventListener(
'click',
openMenu
);

}

if(closeSidebar){

closeSidebar.addEventListener(
'click',
closeMenu
);

}

if(overlay){

overlay.addEventListener(
'click',
closeMenu
);

}

mobileLinks.forEach(link=>{

link.addEventListener(
'click',
closeMenu
);

});

function updateActiveMenu(){

let currentSection = "hero";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(window.scrollY >= sectionTop){

currentSection =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + currentSection
){

link.classList.add("active");

}

});

}