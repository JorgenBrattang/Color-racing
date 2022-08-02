/* Sets all the color that are used throughout the code */
const color_0 = "#F6511D";
const color_1 = "#FFB400";
const playColor = "#029111";
const color_2 = "#00A6ED";
const color_3 = "#7FB800";
const blackColor = "#393939";
const resetColor = "#8685EF";
const whiteColor = "#FAF7FF";
/* Selects all the buttons (<a>) in the DOM */
const button = document.querySelectorAll(".select-container > a");
/* Selects all the class="first--box" (<div>) in the DOM */
const colorFinish = document.querySelectorAll(".placement-container > div > div");

const selectPlay = document.querySelector("#play");
selectPlay.innerHTML = '<i class="fa-regular fa-hand"></i>';
const currentRound = document.getElementById("currentRound");
const selectedRounds = document.getElementById("selectedRounds");
const scoreBox = document.querySelector(".score--box");
const highScoreBox = document.querySelector(".high-score--box");
const latestScoreBox = document.querySelector(".latest-score--box");

var colorID = null;
var limitRounds = null;
var roundChosen = null;
var highScore = [];
var colorScheme = [color_0, color_1, color_2, color_3];

/* Disables the entire document's option to select text */
const disableSelect = (e) => {
    return false;
};
document.onselectstart = disableSelect;
document.onmousedown = disableSelect;

if (window.matchMedia("(orientation: landscape)").matches) {
    toggleInstructions();
    if(document.documentElement.clientHeight <= 600){
        alert('You are using a screen height is low, might I suggest using portrait / vertical view?');
    }
}

setAllBaseColors();

/**
 * Sets all the base Colors of the game
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
document.querySelector(".dropContent--btn").style.color = whiteColor;
// Checks if the user has landscape or portrait view, and changes the color accordingly.
if (window.matchMedia("(orientation: landscape)").matches) {
    document.querySelector(".dropContent--btn").style.backgroundColor = blackColor;
} else {
    document.querySelector(".dropContent--btn").style.backgroundColor = playColor;
}
document.querySelector("footer").style.color = whiteColor;
}

resetColorRounds();


addGlobalEventListener("click", ".select-container > a", (aEvent) => {
    const targetID = aEvent.target.id;
    const limitRoundsArray = [2, 5, 10, 15];
    const colorNumbers = [0, 1, 2, 3];
    const colorSelect = "color_" + targetID;

    /* IF no round have been chosen, do this! */
    if (roundChosen == null) {
        if (targetID != "play") {
            limitRounds = limitRoundsArray[targetID];
            /* Takes away the current target ID from the array colorNumbers */
            colorNumbers.splice(targetID, 1);
            /* Selects every other color and change their opacity to 0.5 (not selected) */
            for (number of colorNumbers) {
                targetOthers = document.getElementById(number)
                targetOthers.style.opacity = "0.5";
            }
            /* Changes the background color of the current chosen color */
            aEvent.target.style.cssText = 'background-color:' + playColor + '; opacity: 1;';
            selectedRounds.innerHTML = limitRounds;

            selectBtn = document.querySelector(".play-button--btn")
            selectBtn.style.backgroundColor = playColor;

            colorBlinkingNone();
        }

        if (limitRounds != null) {
            if (targetID == "play") {
                /* Sets the color to racing select */
                document.querySelector(".color-0--select").style.backgroundColor = color_0;
                document.querySelector(".color-1--select").style.backgroundColor = color_1;
                document.querySelector(".color-2--select").style.backgroundColor = color_2;
                document.querySelector(".color-3--select").style.backgroundColor = color_3;

                selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
                roundChosen = true;

                /* Sets all the colors back to 100% opacity */
                const colorNumbers = [0, 1, 2, 3];
                for (number of colorNumbers) {
                    changeNumber = document.getElementById(number);
                    changeNumber.style.opacity = "1";
                    changeNumber.innerHTML = "";
                    colorFinish[number].style.cssText = "background-color: white";
                }

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
            for (number of colorNumbers) {
                targetOthers = document.getElementById(number);
                targetOthers.style.opacity = "0.5";
            }
            /* Changes the background color of the current chosen color */
            aEvent.target.style.cssText = `opacity: 1;`;
            aEvent.target.style.cssText = "background-color: " + colorScheme[colorID];

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
            resetGame();
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

/* Toggles the instructions to show and hide */
addGlobalEventListener("click", ".instruction-container > button", (buttonEvent) => {
    toggleInstructions();
});

/**
 * This will reset the game, so you can play a new round
 */
function resetGame() {
    /* Deselects the color chosen */
    colorID = null;

    /* Sets all the colors back to 100% opacity */
    const colorNumbers = [0, 1, 2, 3];
    for (number of colorNumbers) {
        document.getElementById(number).style.opacity = "1";
        colorFinish[number].style.cssText = "background-color: white";
    }

    /* Sets the reset button back to ID of play */
    document.getElementById("reset").setAttribute("id", "play");

    /* Reset the buttons, so you can click them */
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "auto";
    }

    /* Sets the icon on Play button */
    selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>';

    const rounds = parseInt(currentRound.innerHTML);
    plusRounds(rounds);

    /* Takes away the animation from score box */

    scoreBox.style.animation = "none";
}

/**
 * Sets the background color of the buttons to be ROUNDS color
 */
function resetColorRounds() {
    const color1 = document.querySelector(".color-0--select");
    color1.style.backgroundColor = playColor;
    color1.style.animation = "selection 1000ms infinite";

    const color2 = document.querySelector(".color-1--select");
    color2.style.backgroundColor = playColor;
    color2.style.animation = "selection 1000ms infinite";

    const color3 = document.querySelector(".color-2--select");
    color3.style.backgroundColor = playColor;
    color3.style.animation = "selection 1000ms infinite";

    const color4 = document.querySelector(".color-3--select");
    color4.style.backgroundColor = playColor;
    color4.style.animation = "selection 1000ms infinite";

    const selectBtn = document.querySelector(".play-button--btn");
    selectBtn.style.backgroundColor = blackColor;
}

/**
 * Sets the background color of the buttons to be RACING color
 */
function resetColorRaces() {
    const color1 = document.querySelector(".color-0--select");
    color1.style.backgroundColor = color_0;

    const color2 = document.querySelector(".color-1--select");
    color2.style.backgroundColor = color_1;

    const color3 = document.querySelector(".color-2--select");
    color3.style.backgroundColor = color_2;

    const color4 = document.querySelector(".color-3--select");
    color4.style.backgroundColor = color_3;
}

/**
 * Sets the blinking on all buttons except PlayButton
 */
function colorBlinkingActive() {
    const color1 = document.querySelector(".color-0--select");
    color1.style.animation = "selection 1000ms infinite";

    const color2 = document.querySelector(".color-1--select");
    color2.style.animation = "selection 1000ms infinite";

    const color3 = document.querySelector(".color-2--select");
    color3.style.animation = "selection 1000ms infinite";

    const color4 = document.querySelector(".color-3--select");
    color4.style.animation = "selection 1000ms infinite";

    const selectBtn = document.querySelector(".play-button--btn");
    selectBtn.style.backgroundColor = blackColor;
    selectBtn.style.animation = "none";
}

/**
 * Sets blinking to PlayButton except for color/round buttons
 */
function colorBlinkingNone() {
    const color1 = document.querySelector(".color-0--select");
    color1.style.animation = "none";

    const color2 = document.querySelector(".color-1--select");
    color2.style.animation = "none";

    const color3 = document.querySelector(".color-2--select");
    color3.style.animation = "none";

    const color4 = document.querySelector(".color-3--select");
    color4.style.animation = "none";

    const selectBtn = document.querySelector(".play-button--btn");
    selectBtn.style.backgroundColor = playColor;
    selectBtn.style.animation = "selection 1000ms infinite";
}

/**
 * This will start a new game, by resetting everything (like reloading page)
 */
function newGame(limitRoundsArray) {
    resetColorRounds();

    /* Resets the rounds innerHTML to base value */
    const roundReset = [0, 1, 2, 3];
    for (round of roundReset) {
        changeNumber = document.getElementById(round);
        changeNumber.innerHTML = `${limitRoundsArray[round]}`;
    }

    roundChosen = null;

    /* Deselects the color chosen */
    colorID = null;

    /* Sets all the colors back to 100% opacity */
    const colorNumbers = [0, 1, 2, 3];
    for (number of colorNumbers) {
        document.getElementById(number).style.opacity = "1";
        colorFinish[number].style.cssText = "background-color: white";
    }

    /* Sets the reset button back to ID of play */
    document.getElementById("newGame").setAttribute("id", "play");

    /* Reset the buttons, so you can click them */
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "auto";
    }

    /* Sets the icon on Hand button */
    selectPlay.innerHTML = '<i class="fa-regular fa-hand"></i>';

    /* Resets the score */
    currentRound.innerHTML = 1;
    scoreBox.innerHTML = 0;
}

/**
 * This will start the process of the game.
 */
function runGame() {
    /* This will disable all click events on the divs */
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "none";
    }
    // Create a function/loop between this ---------->>>
    /* Gets the colors from the HTML */
    const getColor_0 = document.getElementById("racer_0");
    const getColor_1 = document.getElementById("racer_1");
    const getColor_2 = document.getElementById("racer_2");
    const getColor_3 = document.getElementById("racer_3");
    /* Lets the colorHeight to be 10% of 100%, so you can see where your colors starts */
    let colorHeight_0 = 10;
    getColor_0.style.height = colorHeight_0 + "%";
    let colorHeight_1 = 10;
    getColor_1.style.height = colorHeight_1 + "%";
    let colorHeight_2 = 10;
    getColor_2.style.height = colorHeight_2 + "%";
    let colorHeight_3 = 10;
    getColor_3.style.height = colorHeight_3 + "%";
    // Create a function/loop between this <<<----------
    /* Adds the praying person icon and changes the play button color */
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
    // Create a function/loop between this ---------->>>
    /* Sets the interval of the time from the random number for each horse */
    let setColor_0 = setInterval(a, randomNumberArray[0]);
    let setColor_1 = setInterval(b, randomNumberArray[1]);
    let setColor_2 = setInterval(c, randomNumberArray[2]);
    let setColor_3 = setInterval(d, randomNumberArray[3]);
    const winnerArray = [];
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function a() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_0 >= 100) {
            clearInterval(setColor_0);
            winnerArray.push(color_0);
            winnerColor(winnerArray);
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_0++;
            getColor_0.style.height = colorHeight_0 + "%";
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function b() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_1 >= 100) {
            clearInterval(setColor_1);
            winnerArray.push(color_1);
            winnerColor(winnerArray);
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_1++;
            getColor_1.style.height = colorHeight_1 + "%";
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function c() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_2 >= 100) {
            clearInterval(setColor_2);
            winnerArray.push(color_2);
            winnerColor(winnerArray);
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_2++;
            getColor_2.style.height = colorHeight_2 + "%";
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function d() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_3 >= 100) {
            clearInterval(setColor_3);
            winnerArray.push(color_3);
            winnerColor(winnerArray);
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_3++;
            getColor_3.style.height = colorHeight_3 + "%";
        }
    }
    // Create a function/loop between this <<<----------
}

/**
 * Makes the instruction's text and button change color
 */
function toggleInstructions() {
    /* Toggle the instructions open and close */
    document.querySelector("#myDropdown").classList.toggle("show");
    const btn = document.querySelector(".dropContent--btn");
    /* Toggle the button's color with CSS .buttonColor */
    btn.classList.toggle("buttonColor");
    if (btn.innerHTML === "Instructions, press here!") {
        btn.innerHTML = "Instructions how to play!";
        btn.style.backgroundColor = blackColor;
    } else {
        btn.innerHTML = "Instructions, press here!";
        btn.style.backgroundColor = playColor;
    }
    document.querySelector("#myDropdown").scrollIntoView({
        behavior: "smooth",
    });
}

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

        /* This will enable click event on the div */
        document.getElementById("play").style.pointerEvents = "auto";

        selectPlay.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
        selectPlay.style.backgroundColor = playColor;
        selectPlay.style.color = whiteColor;

        /* Changes the play buttons ID to reset */
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
        /* Sets the reset button back to ID of play */
        document.getElementById("reset").setAttribute("id", "newGame");

        /* NewGame button */
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
