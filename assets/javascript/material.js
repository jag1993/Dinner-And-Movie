$(document).ready(function () {
// SELECT
    $('select').material_select();

// CAROUSEL
    $('.carousel').carousel();
    $('.carousel-slider').slider({full_width: true});

 // MODAL
    $('.modal-trigger').leanModal();
});

$('#modal1').openModal();
$('#modal1').closeModal();

// SMOOTH SCROLLING
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: target.offset().top
                }, 1000);
            return false;
            }
        }
    });
});