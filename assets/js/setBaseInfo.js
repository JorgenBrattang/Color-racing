/**
 * Sets all the colors for the game to begin, they will change in other functions
 */
 function setAllBaseColors() {
    document.querySelector("body").style.backgroundColor = blackColor;
    document.querySelector("header").style.color = whiteColor;
    document.querySelector(".instruction-container").style.backgroundColor = whiteColor;
    document.querySelector(".high-score-container").style.backgroundColor = whiteColor;
    document.querySelector(".select-container").style.backgroundColor = whiteColor;
    document.querySelector(".race-container ").style.backgroundColor = whiteColor;
    document.querySelector(".color-0").style.backgroundColor = color_0;
    document.querySelector(".color-1").style.backgroundColor = color_1;
    document.querySelector(".color-2").style.backgroundColor = color_2;
    document.querySelector(".color-3").style.backgroundColor = color_3;
    document.querySelector("footer").style.color = whiteColor;
}

// Declaring color select and play button to fetch from the DOM
const colorID_0 = document.querySelector(".color-0--select");
const colorID_1 = document.querySelector(".color-1--select");
const colorID_2 = document.querySelector(".color-2--select");
const colorID_3 = document.querySelector(".color-3--select");
const selectBtn = document.querySelector(".play-button--btn");

/**
 * - Sets the basic background color to the buttons.
 * - Play button changes icon to Play
 * - And RoundChosen is equal to true
 */
function setButtonsForPlayID() {
    colorID_0.style.backgroundColor = color_0;
    colorID_1.style.backgroundColor = color_1;
    colorID_2.style.backgroundColor = color_2;
    colorID_3.style.backgroundColor = color_3;

    selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    roundChosen = true;
}