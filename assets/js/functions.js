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

/* Toggles the instructions to show and hide */
addGlobalEventListener("click", ".instruction-container > button", (buttonEvent) => {
    toggleInstructions();
});

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
 * Reset the buttons, so you can click them again.
 */
function resetButtons() {
    const buttonNumber = [0, 1, 2, 3, "play"];
    for (let id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = "auto";
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
 * Makes the instruction's text and button change color
 */
function toggleInstructions() {
    // Toggle the instructions open and close
    document.querySelector("#myDropdown").classList.toggle("show");
    const btn = document.querySelector(".dropContent--btn");

    if (btn.innerHTML === "Instructions, press here!") {
        btn.innerHTML = "Instructions how to play!";
        btn.style.cssText = 'font-weight: 400; color: ' + whiteColor + '; background-color: ' + blackColor + ';'
    } else {
        btn.innerHTML = "Instructions, press here!";
        btn.style.cssText = 'font-weight: 600; color: black; background-color: ' + playColor + ';'
    }
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