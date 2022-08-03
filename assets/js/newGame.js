/**
 * This will start a new game, by resetting everything (like reloading page)
 */
 function newGame(limitRoundsArray) {
    resetColorRounds();

    // Resets the rounds innerHTML to base value 
    const roundReset = [0, 1, 2, 3];
    for (let round of roundReset) {
        let changeNumber = document.getElementById(round);
        changeNumber.innerHTML = `${limitRoundsArray[round]}`;
    }

    // sets the amount of rounds back to null
    roundChosen = null;

    /* Deselects the color chosen */
    colorID = null;

    resetRoundButtonOpacity();


    // Sets the reset button back to ID of play
    document.getElementById("newGame").setAttribute("id", "play");

    // Reset the buttons, so you can click them
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (let id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "auto";
    }

    // Sets the icon on Hand button
    selectPlay.innerHTML = '<i class="fa-regular fa-hand"></i>';

    // Resets the score
    currentRound.innerHTML = 1;
    scoreBox.innerHTML = 0;
}