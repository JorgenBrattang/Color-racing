/**
 * This will increase the score by 5
 * @param {*} score - Gets the score from the from the DOM
 * @returns
 */
 function plusScore(score) {
    score += 5;
    scoreBox.innerHTML = score;
    scoreBox.style.animation = "glowingWin 250ms 3";
    return score;
}

/**
 * This will decrease the score by 3
 * @param {*} score - Gets the score from the from the DOM
 * @returns
 */
function minusScore(score) {
    score -= 3;
    scoreBox.innerHTML = score;
    scoreBox.style.animation = "glowingLose 250ms 3";
    return score;
}