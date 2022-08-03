/**
 * Sets the background color of the buttons to be ROUNDS color
 * And adds an flashing animation
 */
 function resetColorRounds() {
    colorID_0.style.backgroundColor = playColor;
    colorID_0.style.animation = "selection 1000ms infinite";
    colorID_1.style.backgroundColor = playColor;
    colorID_1.style.animation = "selection 1000ms infinite";
    colorID_2.style.backgroundColor = playColor;
    colorID_2.style.animation = "selection 1000ms infinite";
    colorID_3.style.backgroundColor = playColor;
    colorID_3.style.animation = "selection 1000ms infinite";
    selectBtn.style.backgroundColor = blackColor;
}

/**
 * Sets the background color of the buttons to be RACING color
 */
function resetColorRaces() {
    colorID_0.style.backgroundColor = color_0;
    colorID_1.style.backgroundColor = color_1;
    colorID_2.style.backgroundColor = color_2;
    colorID_3.style.backgroundColor = color_3;
}

/**
     * Sets all the Round buttons back to 100% opacity
     */
 function resetRoundButtonOpacity() {
    const colorNumbers = [0, 1, 2, 3];
    for (let number of colorNumbers) {
        document.getElementById(number).style.opacity = "1";
        colorFinish[number].style.cssText = "background-color: white";
    }
}

/**
 * This will reset the game, so you can play a new round
 */
 function resetGame(colorNumbers) {
    /* Deselects the color chosen */
    colorID = null;

    fullSelectedOpacity(colorNumbers);

    /* Sets the reset button back to ID of play */
    document.getElementById("reset").setAttribute("id", "play");

    resetButtons();

    /* Sets the icon on Play button */
    selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>';

    const rounds = parseInt(currentRound.innerHTML);
    plusRounds(rounds);

    /* Takes away the animation from score box */

    scoreBox.style.animation = "none";
}

/**
 * Reset the buttons, so you can click them again.
 */
 function resetButtons() {
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (let id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "auto";
    }
}