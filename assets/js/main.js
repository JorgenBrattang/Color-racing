// Sets all the color that are used throughout the code
const color_0 = "#F6511D";
const color_1 = "#FFB400";
const playColor = "#029111";
const color_2 = "#00A6ED";
const color_3 = "#7FB800";
const blackColor = "#393939";
const whiteColor = "#FAF7FF";
// Selects all the class="first--box" (<div>) in the DOM
const colorFinish = document.querySelectorAll(".placement-container > div > div");

const selectPlay = document.querySelector("#play");
selectPlay.innerHTML = '<i class="fa-regular fa-hand"></i>';
const currentRound = document.getElementById("currentRound");
const selectedRounds = document.getElementById("selectedRounds");
const scoreBox = document.querySelector(".score--box");
const highScoreBox = document.querySelector(".high-score--box");
const latestScoreBox = document.querySelector(".latest-score--box");

// Declares the global variables
var colorID = null;
var limitRounds = null;
var roundChosen = null;
var highScore = [];
var colorScheme = [color_0, color_1, color_2, color_3];

// Disables the entire document's option to select text
const disableSelect = (e) => {
    return false;
};
document.onselectstart = disableSelect;
document.onmousedown = disableSelect;


windowLandscapeCheck();
setAllBaseColors();
resetColorRounds();

addGlobalEventListener("click", ".select-container > a", (aEvent) => {
    let targetID = aEvent.target.id;
    const limitRoundsArray = [2, 5, 10, 15];
    let colorNumbers = [0, 1, 2, 3];

    /* IF no round have been chosen, do this! */
    if (roundChosen == null) {
        if (targetID != "play") {
            /* Gets the number of rounds from array with the targetID */
            limitRounds = limitRoundsArray[targetID];

            /* Takes away the current target ID from the array colorNumbers */
            colorNumbers.splice(targetID, 1);

            notSelectedOpacity(colorNumbers);
            
            /* Changes the background color of the current chosen color */
            aEvent.target.style.cssText = 'background-color:' + playColor + '; opacity: 1;';
            selectedRounds.innerHTML = limitRounds;

            let selectBtn = document.querySelector(".play-button--btn");
            selectBtn.style.backgroundColor = playColor;

            colorBlinkingNone();
        }

        if (limitRounds != null) {
            if (targetID == "play") {
                setButtonsForPlayID();
                resetColorOpacity(colorNumbers);
                colorBlinkingActive();
            }
        } else {
            alert("Choose the amount of rounds first!");
        }
    } else if (roundChosen == true) {
    /* IF a round have been chosen, do this! */
        /* Checks if you pressed a color instead of play button */
        if (targetID != "play") {
            resetColorRaces();
            colorID = targetID;
            
            /* Takes away the current target ID from the array colorNumbers */
            colorNumbers.splice(targetID, 1);
            /* Selects every other color and change their opacity to 0.5 (not selected) */
            for (let number of colorNumbers) {
                let targetOthers = document.getElementById(number);
                targetOthers.style.opacity = "0.5";
            }

            /* Changes the background color of the current chosen color */
            aEvent.target.style.cssText = `opacity: 1;`;
            aEvent.target.style.cssText = "box-shadow: inset -2px -2px 0px 5px rgba(0, 0, 0, 0.75); background-color: " + colorScheme[colorID];

            colorBlinkingNone();
        }

        /* Checks if the colorID holds an ID or not. */
        if (colorID != null) {
            if (targetID == "play") {
                runGame(limitRounds);
            }
        } else {
            alert("Choose a color to race with first, then press the big green button!");
        }

        if (targetID == "reset") {
            resetGame(colorNumbers);
            colorBlinkingActive();
            resetColorRaces();
        }

        if (targetID == "newGame") {
            newGame(limitRoundsArray);
            colorBlinkingActive();
            limitRounds = null;
        }
    }
});

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

/**
 * - Sets the basic background color to the buttons.
 * - Play button changes icon to Play
 * - And RoundChosen is equal to true
 */
function setButtonsForPlayID() {
    const colorID_0 = document.querySelector(".color-0--select");
    const colorID_1 = document.querySelector(".color-1--select");
    const colorID_2 = document.querySelector(".color-2--select");
    const colorID_3 = document.querySelector(".color-3--select");
    colorID_0.style.backgroundColor = color_0;
    colorID_1.style.backgroundColor = color_1;
    colorID_2.style.backgroundColor = color_2;
    colorID_3.style.backgroundColor = color_3;

    selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    roundChosen = true;
}

/**
 * Checks if the orientation is landscape, if so checks the height.
 * If lower then 600px, give an alert to change view to portrait
 */
 function windowLandscapeCheck() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        toggleInstructions();
        if(document.documentElement.clientHeight <= 600){
            alert('You are using a screen height is low, might I suggest using portrait / vertical view?');
        }
    }
}

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

/**
 * Changes all the color numbers expect the one chosen, and changes the rest to 50% opacity
 * @param {*} colorNumbers - Gets this array from global
 */
 function notSelectedOpacity(colorNumbers) {
    /* Selects every other color and change their opacity to 0.5 (not selected) */
    for (let number of colorNumbers) {
        let targetOthers = document.getElementById(number);
        targetOthers.style.opacity = "0.5";
    }
}

/**
 * Changes all the color numbers back to 100% opacity
 * @param {*} colorNumbers - Gets this array from global
 */
 function fullSelectedOpacity() {
    /* Sets all the colors back to 100% opacity */
    colorNumbers = [0, 1, 2, 3];
    for (let number of colorNumbers) {
        document.getElementById(number).style.opacity = "1";
        colorFinish[number].style.cssText = "background-color: white";
    }
}

/**
 * - Sets all the colors back to 100% opacity
 * - Sets the placements to base color (white)
 */
 function resetColorOpacity(colorNumbers) {
    colorNumbers = [0, 1, 2, 3];
    for (let number of colorNumbers) {
        let changeNumber = document.getElementById(number);
        changeNumber.style.opacity = "1";
        changeNumber.innerHTML = "";
        // Resets the placements back to base color (white)
        colorFinish[number].style.cssText = "background-color: white;";
    }
}

/**
 * Sets the background color of the buttons to be ROUNDS color
 * And adds an flashing animation
 */
 function resetColorRounds() {
    const colorID_0 = document.querySelector(".color-0--select");
    const colorID_1 = document.querySelector(".color-1--select");
    const colorID_2 = document.querySelector(".color-2--select");
    const colorID_3 = document.querySelector(".color-3--select");
    const selectBtn = document.querySelector(".play-button--btn");
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
    const colorID_0 = document.querySelector(".color-0--select");
    const colorID_1 = document.querySelector(".color-1--select");
    const colorID_2 = document.querySelector(".color-2--select");
    const colorID_3 = document.querySelector(".color-3--select");
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

/**
 * Limits the amount of rounds to be played
 * @param {*} rounds - Amount of rounds that you want to play
 * @param {*} score - This is your score count
 */
 function maxRounds(rounds, score) {
    if (rounds == limitRounds) {
        // Checks if the score is higher then the highScore and if it is, the win animation activates
        if (score > highScore) {
            highScore.push(score);
            highScoreBox.innerHTML = score;
            highScoreBox.style.animation = "glowingWin 250ms 3";
            latestScoreBox.style.animation = "glowingWin 250ms 3";
        }
        latestScoreBox.innerHTML = score;
        // Checks if the score is less then the highScore and if it is, the loss animation activates
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

/**
 * This will start the process of the game.
 */
 function runGame() {
    // This will disable all click events on the divs
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (let id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "none";
    }

    // Gets the colors from the HTML
        const getColor_0 = document.getElementById("racer_0");
        const getColor_1 = document.getElementById("racer_1");
        const getColor_2 = document.getElementById("racer_2");
        const getColor_3 = document.getElementById("racer_3");

    // Lets the colorHeight to be 10% of 100%, so you can see where your colors starts
    let colorHeight_0 = 10;
    getColor_0.style.height = colorHeight_0 + "%";
    let colorHeight_1 = 10;
    getColor_1.style.height = colorHeight_1 + "%";
    let colorHeight_2 = 10;
    getColor_2.style.height = colorHeight_2 + "%";
    let colorHeight_3 = 10;
    getColor_3.style.height = colorHeight_3 + "%";

    // Adds the praying person icon and changes the play button color
    selectPlay.innerHTML = '<i class="fa-solid fa-person-praying"></i>';
    selectPlay.style.backgroundColor = blackColor;
    selectPlay.style.color = whiteColor;

    // Creates an empty array
    const randomNumberArray = [];

    do {
        // Generating random number
        const randomNumber = Math.floor(Math.random() * 10) + 15;

        // Checks if the number is included in the array, if not push it into it.
        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber);
        }
        // create 4 numbers for the array
    } while (randomNumberArray.length < 4);

    // Sets the interval of the time from the random number for each horse
    let setColor_0 = setInterval(a, randomNumberArray[0]);
    let setColor_1 = setInterval(b, randomNumberArray[1]);
    let setColor_2 = setInterval(c, randomNumberArray[2]);
    let setColor_3 = setInterval(d, randomNumberArray[3]);
    const winnerArray = [];

    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function a() {
        // Checks if the length of the race is finished (100%)
        if (colorHeight_0 >= 100) {
            clearInterval(setColor_0);
            winnerArray.push(color_0);
            winnerColor(winnerArray);
        } else {
            // If it isn't finished, keep on going.
            colorHeight_0++;
            getColor_0.style.height = colorHeight_0 + "%";
        }
    }

    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function b() {
        // Checks if the length of the race is finished (100%)
        if (colorHeight_1 >= 100) {
            clearInterval(setColor_1);
            winnerArray.push(color_1);
            winnerColor(winnerArray);
        } else {
            // If it isn't finished, keep on going.
            colorHeight_1++;
            getColor_1.style.height = colorHeight_1 + "%";
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function c() {
        // Checks if the length of the race is finished (100%)
        if (colorHeight_2 >= 100) {
            clearInterval(setColor_2);
            winnerArray.push(color_2);
            winnerColor(winnerArray);
        } else {
            // If it isn't finished, keep on going.
            colorHeight_2++;
            getColor_2.style.height = colorHeight_2 + "%";
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function d() {
        // Checks if the length of the race is finished (100%)
        if (colorHeight_3 >= 100) {
            clearInterval(setColor_3);
            winnerArray.push(color_3);
            winnerColor(winnerArray);
        } else {
            // if it isn't finished, keep on going.
            colorHeight_3++;
            getColor_3.style.height = colorHeight_3 + "%";
        }
    }
}

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

/**
 * Sets the blinking on all buttons except PlayButton
 */
 function colorBlinkingActive() {
    const colorID_0 = document.querySelector(".color-0--select");
    const colorID_1 = document.querySelector(".color-1--select");
    const colorID_2 = document.querySelector(".color-2--select");
    const colorID_3 = document.querySelector(".color-3--select");
    const selectBtn = document.querySelector(".play-button--btn");
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
    const colorID_0 = document.querySelector(".color-0--select");
    const colorID_1 = document.querySelector(".color-1--select");
    const colorID_2 = document.querySelector(".color-2--select");
    const colorID_3 = document.querySelector(".color-3--select");
    const selectBtn = document.querySelector(".play-button--btn");
    colorID_0.style.animation = "none";
    colorID_1.style.animation = "none";
    colorID_2.style.animation = "none";
    colorID_3.style.animation = "none";
    selectBtn.style.backgroundColor = playColor;
    selectBtn.style.animation = "selection 1000ms infinite";
}

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