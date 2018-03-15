$(document).ready(function(){
    // TODO: Switch to Home in prod
    $("#content-wrap").load("content.html #portfolio-page");

    $("#navigation").on("click", "li", function() {
        let page = $( this ).children().attr('href');
        let target = "content.html " + page + "-page";
        $("#content-wrap").load(target);
    });
});

$(document).on('click', '#contact-button', function() {
    $("#content-wrap").load("content.html #contact-page");
});