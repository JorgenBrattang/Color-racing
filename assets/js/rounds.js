/**
 * Limits the amount of rounds to be played
 * @param {*} rounds - Amount of rounds that you want to play
 * @param {*} score - This is your score count
 */
 function maxRounds(rounds, score) {
    if (rounds == limitRounds) {
        if (score > highScore) {
            highScore.push(score);
            highScoreBox.innerHTML = score;
            highScoreBox.style.animation = "glowingWin 250ms 3";
            latestScoreBox.style.animation = "glowingWin 250ms 3";
        }
        latestScoreBox.innerHTML = score;
        if (score < highScore) {
            latestScoreBox.style.animation = "glowingLose 250ms 3";
        }
        // Sets the reset button back to ID of play
        document.getElementById("reset").setAttribute("id", "newGame");

        // Changes to newGame Button
        selectPlay.innerHTML = '<i class="fa-solid fa-gamepad"></i>';
        selectPlay.style.backgroundColor = playColor;
        selectPlay.style.color = whiteColor;
    }
}

/**
 * This will increase the rounds by 1
 * @param {*} rounds - Gets the amount of rounds from the DOM
 * @returns
 */
function plusRounds(rounds) {
    if (rounds == limitRounds) {
        // Do nothing
    } else {
        rounds += 1;
        currentRound.innerHTML = rounds;
    }
    return rounds;
}