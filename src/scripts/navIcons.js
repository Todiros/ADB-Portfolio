$("#navigation").on('mouseover', 'li', function() {
    let page = $( this ).children().attr("id");
    let newPath = "res/img/" + page + "-green.svg";
    $( this ).children().children().attr("src", newPath);
}).on('mouseout', 'li', function() {
    let page = $( this ).children().attr("id");
    let newPath = "res/img/" + page + ".svg";
    $( this ).children().children().attr("src", newPath);
});

$("#button-wrap").on("mouseover", function() {
    let currentClass = $( this ).children().attr("class");
    $( this ).children().attr("src", `res/img/${currentClass}-green.svg`);
}).on("mouseout", function() {
    let currentClass = $( this ).children().attr("class");
    $( this ).children().attr("src", `res/img/${currentClass}.svg`);
}).on("click", function(){
    let currentClass = $( this ).children().attr("class");
    if (currentClass === "down") {
        $( this ).children().attr("class", "up");
        $( this ).children().attr("src", "res/img/up-green.svg");
    } else {
        $( this ).children().attr("class", "down");
        $( this ).children().attr("src", "res/img/down-green.svg");
    }
});

$("#social").on('mouseover', 'li', function() {
    let media = $( this ).attr("class");
    let newPath = "res/img/" + media + "-green.svg";
    $( this ).find("img").attr("src", newPath);
}).on('mouseout', 'li', function() {
    let media = $( this ).attr("class");
    let newPath = "res/img/" + media + ".svg";
    $( this ).find("img").attr("src", newPath);
});



