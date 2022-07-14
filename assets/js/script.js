let buttons = document.getElementsByTagName("button");
let i = 1;
for (button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "color-1") { 
            console.log('color 1');
        }
        else if (this.getAttribute("data-type") === "color-2") {
            console.log('color 2');
        }
        else if (this.getAttribute("data-type") === "play") {
            console.log('Play');
        }
        else if (this.getAttribute("data-type") === "color-3") {
            console.log('color 3');
        }
        else if (this.getAttribute("data-type") === "color-4") {
            console.log('color 4');
        }
        else {
            alert("button doesn't choose a data-type, look that up!")
        }
    })
}