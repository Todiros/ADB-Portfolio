$(document).ready(function(){
    $("#content-wrap").load("content.html #home");

    $("#home").click(function() {
        $("#content-wrap").load("content.html #home");
    });
    
    $("#about").click(function() {
        $("#content-wrap").load("content.html #about");
    });
    
    $("#portfolio").click(function() {
        $("#content-wrap").load("content.html #portfolio");
    });
    
    $("#contact").click(function() {
        $("#content-wrap").load("content.html #contact");
    });
});

$(document).on('click', '#contact-button', function() {
    $("#content-wrap").load("content.html #contact");
});