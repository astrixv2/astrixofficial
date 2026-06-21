// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});

// Scroll Animation

const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

cards.forEach(card => {

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "0.7s ease";

observer.observe(card);

});

// Navbar Shadow Effect

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

}
else{

header.style.boxShadow =
"0 5px 20px rgba(0,0,0,.05)";

}

});

// Page Loaded

console.log("ASTRIX V2 Premium Loaded 🚀");

function toggleMenu(){
document
.getElementById("navLinks")
.classList.toggle("active");
}function revealSections(){
let reveals = document.querySelectorAll(".reveal");

reveals.forEach(section => {
let windowHeight = window.innerHeight;
let revealTop = section.getBoundingClientRect().top;
let revealPoint = 100;

if(revealTop < windowHeight - revealPoint){
section.classList.add("active");
}
});
}

window.addEventListener("scroll", revealSections);
revealSections();
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},800);

},1500);

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}

});

});