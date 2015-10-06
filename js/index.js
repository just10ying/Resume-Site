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
    epic2015.title = "Epic (2015)";
    epic2015.imgSrc = "resources/epic.jpg";
    epic2015.position = "Android Development Intern";
    epic2015.description = "I added new annotation functionality to Haiku Android, Epic's mobile application for physicians, and I collaborated with two other interns to deliver inter-platform compatibility to Haiku on both iOS and Android.  Mobile dev was fun!";
    epic2015.bullets = [
        "Created a multi-layer annotation tool for Android that supports drawing, text, and measurement annotations",
        "Utilized OpenCV for reference object detection, allowing for relative distance measurements",
        "Designed an easily-extensible layer structure that supports cross-platform compatibility with iOS devices"
    ];
    
    var tedResearch = new Object();
    tedResearch.title = "Swanson School of Engineering (2015)";
    tedResearch.imgSrc = "resources/benedum.jpg";
    tedResearch.position = "Research Assistant";
    tedResearch.description = "Quantifying the effects of radiation heat transfer in thermoelectric devices (TEDs) sheds light on the affects of different interconnect geometries on efficiency.  I worked with MEMS instructor Matthew Barry to develop a program for determining the effects of radiation heat transfer in different TED structures";
    tedResearch.bullets = [
        "Created a ray tracer to calculate high resolution heat radiation view factors for variable TED geometries",
        "Optimized and parallelized the simulation via GPU acceleration to run hundreds of times faster than the existing Matlab script with greater precision",
        "Co-authored journal article \"Numerical Solution of Radiation View Factors within a Thermoelectric Device\" currently under review for engineering journal Energy"
    ];
    
    var epic2014 = new Object();
    epic2014.title = "Epic (2014)";
    epic2014.imgSrc = "resources/hyperspace.jpg";
    epic2014.position = "Hyperspace Web Development Intern";
    epic2014.description = "I ported a Visual Basic Hyperspace activity to Hyperspace Web, which involved creating a responsive web application compatible with all modern browsers, streamlining the UI, and adding new, requested features.";
    epic2014.bullets = [
        "Collaborated with UX and QA staff to produce a fully-functional, polished, and secure web application",
        "Designed and implemented an improved user interface that performed consistently across multiple browsers and scaled to varying screen resolutions",
        "Interfaced with Epic's database using proprietary ORM to store and retrieve relevant data"
    ];
    
    var bentley = new Object();
    bentley.title = "Bentley Systems (2013)";
    bentley.imgSrc = "resources/bentley.png";
    bentley.position = "Software Development Intern";
    bentley.description = "I modified Microstation source code to use C++11's enum classes and refactoring legacy code.";
    bentley.bullets = [
        "Upgraded the MicroStation build process for compliance with C++11 standards",
        "Transitioned enums to enum classes, enforcing their proper usage in the MicroStation codebase",
        "Refactored legacy code to improve maintainability"
    ];
    
    $scope.expList = [epic2015, tedResearch, epic2014, bentley];
});