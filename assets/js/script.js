const color1 = '#685465';
const color2 = '#A96C7B';
const color3 = '#E38C79';
const color4 = '#FFBC6C';
const playColor = '#00A97F';
const selectColor = '#C9C9C9';

let buttons = document.getElementsByTagName("button");
let i = 1;
for (button of buttons) {
    button.addEventListener("click", function(event) {
        if (this.getAttribute("data-type") === "color-1") { 
            select(event, color1);
        }
        else if (this.getAttribute("data-type") === "color-2") {
            select(event, color2);
        }
        else if (this.getAttribute("data-type") === "play") {
            select(event, playColor);
        }
        else if (this.getAttribute("data-type") === "color-3") {
            select(event, color3);
        }
        else if (this.getAttribute("data-type") === "color-4") {
            select(event, color4);
        }
        else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })

    button.addEventListener("mouseover", function(event) {
        if (this.getAttribute("data-type") === "color-1") { 
            mouseOver(event);
        }
        else if (this.getAttribute("data-type") === "color-2") {
            mouseOver(event);
        }
        else if (this.getAttribute("data-type") === "play") {
            mouseOver(event);
        }
        else if (this.getAttribute("data-type") === "color-3") {
            mouseOver(event);
        }
        else if (this.getAttribute("data-type") === "color-4") {
            mouseOver(event);
        }
        else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })

    button.addEventListener("mouseleave", function(event) {
        if (this.getAttribute("data-type") === "color-1") { 
            mouseLeave(event, color1);
        }
        else if (this.getAttribute("data-type") === "color-2") {
            mouseLeave(event, color2);
        }
        else if (this.getAttribute("data-type") === "play") {
            mouseLeave(event, playColor);
        }
        else if (this.getAttribute("data-type") === "color-3") {
            mouseLeave(event, color3);
        }
        else if (this.getAttribute("data-type") === "color-4") {
            mouseLeave(event, color4);
        }
        else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })
}

function select(event, color) {

    event.target.style.backgroundColor = color;
}

function mouseOver(event) {
    event.target.style.backgroundColor = selectColor;
}

function mouseLeave(event, color) {
    event.target.style.backgroundColor = color;
}