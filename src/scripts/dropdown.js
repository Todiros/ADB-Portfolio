function toggleSlider(state) {
    if (state === "down") {
        $("#dropdown-menu").animate({
            top: "+=90px"
        }, 500);
    } else {
        $("#dropdown-menu").animate({
            top: "-=90px"
        }, 500);
    }
}

function changeIconStyle(state, notHover = false) {
    let element = $("#button-wrap");

    if (state === "down") {
        $( element ).children().attr("class", "up");
        $( element ).children().attr("src", "res/img/icons/up-green.svg");
    } if (state === "up" && !notHover) {
        $( element ).children().attr("class", "down");
        $( element ).children().attr("src", "res/img/icons/down-green.svg");
    } if (state === "up" && notHover) {
        $( element ).children().attr("class", "down");
        $( element ).children().attr("src", "res/img/icons/down.svg");
    }
}

function dropMenu(state) {
    changeIconStyle(state);
    toggleSlider(state);
}


