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
experienceApp.controller('experienceController', function($scope) {
    var epic2015 = new Object();
    epic2015.title = "Epic";
    epic2015.imgSrc = "resources/epic.jpg";
    epic2015.position = "Android Development Intern";
    epic2015.description = "I worked at Epic!  It was cool.  I did things.";
    epic2015.bullets = [
        "Created a multi-layer image annotation tool for Android, which supports drawing, text, and distance annotations",
        "Utilized OpenCV for reference object detection, allowing for relative distance measurements",
        "Designed tool resolution to change dynamically to save memory without quality loss"
    ];
    
    var tedResearch = new Object();
    tedResearch.title = "University of Pittsburgh: Thermoelectric Device Simulation";
    tedResearch.imgSrc = "resources/benedum.jpg";
    tedResearch.position = "Research Assistant";
    tedResearch.description = "Ray tracing!";
    tedResearch.bullets = [
        "Created a multi-layer image annotation tool for Android, which supports drawing, text, and distance annotations",
        "Utilized OpenCV for reference object detection, allowing for relative distance measurements",
        "Designed tool resolution to change dynamically to save memory without quality loss"
    ];
    
    var epic2014 = new Object();
    epic2014.title = "Epic";
    epic2014.imgSrc = "resources/hyperspace.jpg";
    epic2014.position = "Hyperspace Web Development Intern";
    epic2014.description = "Epic hwyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
    epic2014.bullets = [
        "Created a multi-layer image annotation tool for Android, which supports drawing, text, and distance annotations",
        "Utilized OpenCV for reference object detection, allowing for relative distance measurements",
        "Designed tool resolution to change dynamically to save memory without quality loss"
    ];
    
    var bentley = new Object();
    bentley.title = "Bentley Systems";
    bentley.imgSrc = "resources/bentley.png";
    bentley.position = "Software Development Intern";
    bentley.description = "Enums hwyyyyyyyyyyyyyyyyyyyyy";
    bentley.bullets = [
        "Created a multi-layer image annotation tool for Android, which supports drawing, text, and distance annotations",
        "Utilized OpenCV for reference object detection, allowing for relative distance measurements",
        "Designed tool resolution to change dynamically to save memory without quality loss"
    ];
    
    $scope.expList = [epic2015, tedResearch, epic2014, bentley];
});