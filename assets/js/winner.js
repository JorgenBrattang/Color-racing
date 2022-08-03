
/**
 * This will give you the outPut where your color is and change the appropriate
 * fields to let you reset the game after you play.
 * @param {*} winnerArray Gets the array of winners, first color is the first input.
 */
 function winnerColor(winnerArray) {
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
    } else if (winnerArray.length === 2) {
        colorFinish[1].style.cssText = "background-color: " + winnerArray[1];
    } else if (winnerArray.length === 3) {
        colorFinish[2].style.cssText = "background-color: " + winnerArray[2];
    } else if (winnerArray.length === 4) {
        colorFinish[3].style.cssText = "background-color: " + winnerArray[3];

        // This will enable click event on the div 
        document.getElementById("play").style.pointerEvents = "auto";

        selectPlay.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
        selectPlay.style.backgroundColor = playColor;
        selectPlay.style.color = whiteColor;

        // Changes the play buttons ID to reset
        document.getElementById("play").setAttribute("id", "reset");

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
        const score = parseInt(scoreBox.innerHTML);
        plusScore(score);
    } else {
        const score = parseInt(scoreBox.innerHTML);
        minusScore(score);
    }
}