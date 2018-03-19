$(document).ready(function(){
    $("#content-wrap").load("content.html #home-page");

    $("#navigation, #dropdown-nav").on("click", "li", function() {
        let page = $( this ).children().attr('href');
        let target = "content.html " + page + "-page";
        $("#content-wrap").load(target);
        toggleSlider("up");
        changeIconStyle("up", true);
    });
});

$(document).on('click', '#contact-button', function() {
    $("#content-wrap").load("content.html #contact-page");
});