$(document).ready(function() {
	skrollr.init();
    $.srSmoothscroll({
        step: 100,
        speed: 300,
        ease: 'swing',
        target: $('body'),
        container: $(window)
    });
});

function scrollToAbout() {
	$('html, body').animate({
        scrollTop: $(".about-container").offset().top
    }, 650);
}

function scrollToExperience() {
	$('html, body').animate({
        scrollTop: $(".container.experience").offset().top
    }, 650);
}