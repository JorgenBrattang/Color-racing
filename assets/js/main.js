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