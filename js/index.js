$(document).ready(function() {
    // skrollr has poor performance on mobile, so don't enable it on mobile devices:
    // Thanks to: http://stackoverflow.com/a/10364620/5356439
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");
    if (!isMobile.matches) {
        var s = skrollr.init();
    }
    setTimeout(function() {
        $('.jumbotron-text.container.unselectable').fadeIn(1000);
    }, 250);
});

function scrollToElement(element) {
	$('html, body').animate({
        scrollTop: $(element).offset().top
    }, 650);
}