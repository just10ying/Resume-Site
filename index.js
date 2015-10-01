$(document).ready(function() {
	skrollr.init();
    setTimeout(function() {
        $('.jumbotron-text.container.unselectable').fadeIn(1000);
    }, 250);
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