$(document).ready(function(){
    $("#content-wrap").load("content.html #home");

    $("#navigation").on("click", "li", function() {
        let page = $( this ).children().attr('href');
        let target = "content.html " + page;
        $("#content-wrap").load(target);
    });
});

$(document).on('click', '#contact-button', function() {
    $("#content-wrap").load("content.html #contact");
});