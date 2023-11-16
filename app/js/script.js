//console.log('hello world!');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => navItems.classList.add('open'));
close.addEventListener('click', () => navItems.classList.remove('open'));
