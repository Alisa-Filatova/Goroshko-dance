import $ from 'jquery';

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


// var popup = document.querySelector('.modal-post-form');
// var overlay = document.querySelector('.modal-overlay');
// var link = document.querySelector('.table__btn');
//
// link.addEventListener('click', function(event) {
//      event.preventDefault();
//      popup.classList.add('modal-post-form_show');
//      overlay.classList.add('modal-overlay_show');
// });
//
// var closeCross = document.querySelector('.close-cross');
//
// closeCross.addEventListener('click', function(event) {
//     event.preventDefault();
//     popup.classList.remove('modal-post-form_show');
//     overlay.classList.remove('modal-overlay_show');
// });

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

var $paginatorItem = $('.paginator__item');

$paginatorItem.on('click', function() {
    var classActive = 'paginator__item_active';

    $(this)
        .siblings()
        .removeClass(classActive)
        .end()
        .addClass(classActive);

    scrollToAnchor.apply(this, arguments);
});

$('.main-nav__link').on('click', function() {
    scrollToAnchor.apply(this, arguments);
});

$('.direction-item__btn').on('click', function() {
    scrollToAnchor.apply(this, arguments);
});

$('.footer-nav__link').on('click', function() {
    scrollToAnchor.apply(this, arguments);
});

$('.footer-nav__logo-link').on('click', function() {
    scrollToAnchor.apply(this, arguments);
});

var form = document.querySelector('.modal-post-form > form');
var $form = $(form);

function closeForm() {
    $form.parent().removeClass('modal-post-form_show');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var button = event.target.querySelector('input[type="submit"]');

    button.disabled = true;

    var request = $.post('/enroll', $form.serialize());

    request.done(function() {
        closeForm();
        $('.alert_success').addClass('alert_show');
    });

    request.fail(function() {
        closeForm();
        $('.alert_error').addClass('alert_show');
    });

    request.always(function() {
        button.disabled = false;
    });
});

$('.alert__btn').on('click', function(event) {
    event.preventDefault();

    $(this)
        .closest('.alert')
        .removeClass('alert_show');

    overlay.classList.remove('modal-overlay_show');
});








