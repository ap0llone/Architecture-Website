var menu = document.querySelector('#menu-icon');
var navList = document.querySelector('.navbar-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}