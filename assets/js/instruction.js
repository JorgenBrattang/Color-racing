/* Toggles the instructions to show and hide */
addGlobalEventListener("click", ".instruction-container > button", () => {
    toggleInstructions();
});

/**
 * Makes the instruction's text and button change color
 */
function toggleInstructions() {
    // Toggle the instructions open and close
    document.querySelector("#myDropdown").classList.toggle("show");
    const btn = document.querySelector(".dropContent--btn");

    // Checks what the HTML of the instructions button is and changes it accordingly.
    if (btn.innerHTML === "Instructions, press here!") {
        btn.innerHTML = "Instructions how to play!";
        btn.style.cssText = 'font-weight: 400; color: ' + whiteColor + '; background-color: ' + blackColor + ';'
    } else {
        btn.innerHTML = "Instructions, press here!";
        btn.style.cssText = 'font-weight: 600; color: black; background-color: ' + playColor + ';'
    }
    // When you press the button, if your not in view of the content. This moves you down.
    document.querySelector("#myDropdown").scrollIntoView({
        behavior: "smooth",
    });
}

/**
 * This function add eventListener to your code.
 * Follow the instructions below to make it work.
 * @param {*} type What type do you want? "click", "mouseover" etc.
 * @param {*} selector What do you want to target? "button", "div" etc.
 * @param {*} callback What do you want to have as a callback? e => or similar b =>
 */
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    });
}