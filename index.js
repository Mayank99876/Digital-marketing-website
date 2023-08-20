var menu = document.querySelector(".menu");
var open_menu = document.querySelector(".open-menu");
var close_menu = document.querySelector(".close-menu");

open_menu.addEventListener('click',show);
close_menu.addEventListener('click',close);

function show(){
    menu.style.display = 'flex';
    menu.style.top = '0';
}

function close(){
    menu.style.top = '-100%';
}

function scrolltotop(){
    document.querySelector(".hero-container").scrollIntoView({behaviour: 'smooth'})
}
