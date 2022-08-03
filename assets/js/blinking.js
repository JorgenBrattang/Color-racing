/**
 * Sets the blinking on all buttons except PlayButton
 */
 function colorBlinkingActive() {
    colorID_0.style.animation = "selection 1000ms infinite";
    colorID_1.style.animation = "selection 1000ms infinite";
    colorID_2.style.animation = "selection 1000ms infinite";
    colorID_3.style.animation = "selection 1000ms infinite";
    selectBtn.style.backgroundColor = blackColor;
    selectBtn.style.animation = "none";
}

/**
 * Sets blinking to PlayButton except for color/round buttons
 */
function colorBlinkingNone() {
    colorID_0.style.animation = "none";
    colorID_1.style.animation = "none";
    colorID_2.style.animation = "none";
    colorID_3.style.animation = "none";
    selectBtn.style.backgroundColor = playColor;
    selectBtn.style.animation = "selection 1000ms infinite";
}