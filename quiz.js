//QUIZ PAGE

//Mobile nav
const body = document.querySelector('body');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuOpen.addEventListener('click', () => {
  nav.classList.add('toggle');
  console.log('open');
})

body.addEventListener('click', (e) => {
  let clickedElement = e.target;
  console.log('close');

  if (clickedElement.classList.contains('menu-close') || !clickedElement.classList.contains('menu-open')) {
    nav.classList.remove('toggle'); 
  }
});