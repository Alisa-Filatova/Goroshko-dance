var nav = document.querySelector('.main-nav__items');
var open = document.querySelector('.main-nav__menu-open');
var close = document.querySelector('.close-btn');


open.addEventListener('click', function(event) {
     event.preventDefault();
     nav.classList.add('main-nav__items_show');
     open.classList.remove('main-nav__menu-open');
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.remove('main-nav__items_show');
    open.classList.add('main-nav__menu-open');
});
