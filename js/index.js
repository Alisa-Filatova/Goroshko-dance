var nav = document.querySelector('.main-nav__items');
var open = document.querySelector('.main-nav__menu-open');
var close = document.querySelector('.close-btn');

open.addEventListener('click', function(event) {
     event.preventDefault();
     nav.classList.add('main-nav__items_show');
     open.classList.add('main-nav__menu-open_hidden');
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.remove('main-nav__items_show');
    open.classList.remove('main-nav__menu-open_hidden');
});


var popup = document.querySelector('.modal-post-form');
var overlay = document.querySelector('.modal-overlay');
var link = document.querySelector('.table__btn');

link.addEventListener('click', function(event) {
     event.preventDefault();
     popup.classList.add('modal-post-form_show');
     overlay.classList.add('modal-overlay_show');
});

var closeCross = document.querySelector('.close-cross');

closeCross.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-post-form_show');
    overlay.classList.remove('modal-overlay_show');
});

function scrollToAnchor(event) {
    event.preventDefault();

    var scrollTop = 0;
    var documentHight = $(document).height();
    var windowHeight = $(window).height();

    if($(this.hash).offset().top > documentHight - windowHeight) {
        scrollTop = documentHight - windowHeight;
    } else {
        scrollTop = $(this.hash).offset().top;
    }

    $('html, body').animate({ scrollTop: scrollTop }, 700, 'swing');
}

$('.paginator__item').on('click', function() {
    var classActive = 'paginator__item_active';

    $(this)
        .siblings()
        .removeClass(classActive)
        .end()
        .addClass(classActive);

    scrollToAnchor.apply(this, arguments);
});

var form = document.querySelector('.modal-post-form > form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = $(form).serialize();

    $.post('/subscribe', formData).done().fail();
});

$('.alert__btn').on('click', function(event) {
    event.preventDefault();

    $(this)
        .closest('.alert')
        .removeClass('alert_show');

    overlay.classList.remove('modal-overlay_show');
});
