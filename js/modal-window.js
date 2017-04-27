var popup = document.querySelector('.modal-post-form');
var overlay = document.querySelector('.modal-overlay');
var link = document.querySelector('.table__btn');

link.addEventListener('click', function(event) {
     event.preventDefault();
     popup.classList.add('modal-post-form_show');
     overlay.classList.add('modal-overlay_show');
});

var close = document.querySelector('.close-cross');

close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-post-form_show');
    overlay.classList.remove('modal-overlay_show');
});

