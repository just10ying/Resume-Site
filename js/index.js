$(document).ready(function() {
    setTimeout(function() {
        $('.jumbotron-text.container').fadeIn(1000);
    }, 250);
});

function scrollToElement(element) {
	$('html, body').animate({
        scrollTop: $(element).offset().top
    }, 650);
}


/* Angular JS */

var experienceApp = angular.module('experienceApp', []);
experienceApp.controller('experienceController', function($scope, $http) {
    $http.get("resources/experiences.json").success( function(response) {
        $scope.expList = response;
     });
});