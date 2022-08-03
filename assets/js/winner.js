
/**
 * This will give you the outPut where your color is and change the appropriate
 * fields to let you reset the game after you play.
 * @param {*} winnerArray Gets the array of winners, first color is the first input.
 */
 function winnerColor(winnerArray) {
    // Checks which color is the winner
    if (winnerArray.length === 1) {
        colorFinish[0].style.cssText = "background-color: " + winnerArray[0];
        if (color_0 == winnerArray[0]) {
            announceWinner(0);
        } else if (color_1 == winnerArray[0]) {
            announceWinner(1);
        } else if (color_2 == winnerArray[0]) {
            announceWinner(2);
        } else if (color_3 == winnerArray[0]) {
            announceWinner(3);
        }
        // Gives the 2nd place
    } else if (winnerArray.length === 2) {
        colorFinish[1].style.cssText = "background-color: " + winnerArray[1];
        // Gives the 3rd place
    } else if (winnerArray.length === 3) {
        colorFinish[2].style.cssText = "background-color: " + winnerArray[2];
        // Gives the 4th place
    } else if (winnerArray.length === 4) {
        colorFinish[3].style.cssText = "background-color: " + winnerArray[3];

        // This will enable click event on the div 
        document.getElementById("play").style.pointerEvents = "auto";

        // Changes the Big button to it respected color and Icon
        selectPlay.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
        selectPlay.style.backgroundColor = playColor;
        selectPlay.style.color = whiteColor;

        // Changes the play buttons ID to reset
        document.getElementById("play").setAttribute("id", "reset");

        // Converts the rounds and score to Integers
        const rounds = parseInt(currentRound.innerHTML);
        const score = parseInt(scoreBox.innerHTML);
        maxRounds(rounds, score);
    }
}

/**
 * This will let you decide what to do when you win or lose the game.
 * @param {*} winID Gets the winner's ID
 */
function announceWinner(winID) {
    if (winID == colorID) {
        // Converts score into integer
        const score = parseInt(scoreBox.innerHTML);
        plusScore(score);
    } else {
        // Converts score into integer
        const score = parseInt(scoreBox.innerHTML);
        minusScore(score);
    }
}