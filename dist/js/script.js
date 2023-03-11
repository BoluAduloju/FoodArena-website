const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('bx-x');
let navbar = document.querySelector('open');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
};

const sr = ScrollReveal ({
  distance: '600px' ,
  duration: 2500 ,
  reset: true
});

sr.reveal('.home-text', {delay:200, origin: 'left'});
sr.reveal('.home-img', {delay:200, origin: 'right'});

sr.reveal('.feature','.about', '.contact', {delay:200, origin: 'bottom'});
