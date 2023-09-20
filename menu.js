let enterMenuBtn = document.getElementById('open-menu'); 
let exitMenuBtn = document.getElementById('exit-menu'); 
let navbar = document.getElementsByTagName('nav')[0];
console.log (navbar);

enterMenuBtn.addEventListener ('click', () => {
    navbar.classList.add("menu-display");});

exitMenuBtn.addEventListener ('click', () => {
    navbar.classList.remove("menu-display");});
    