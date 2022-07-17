/* Sets all the color that are used throughout the code */
const color_0 = '#685465'
const color_1 = '#A96C7B'
const playColor = '#00A97F'
const color_2 = '#E38C79'
const color_3 = '#FFBC6C'
const waitColor = '#C9C9C9'
const textColor = '#393939'
const resetColor = '#8685EF'
/* Selects all the buttons (<a>) in the DOM */
const button = document.querySelectorAll('.select-container > a') 
/* Selects all the class="first--box" etc (<div>) in the DOM */
const colorFinish = document.querySelectorAll('.placement-container > div > div')
/* Gets the play button and sets it to it's default Icon */
const selectPlay = document.getElementById('play')
selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>'
/* Sets a global variable for colorID, so we can reuse it outside. */
var colorID = []

addGlobalEventListener("click", '.select-container > a', e => { 
    let targetID = e.target.id
    const colorNumbers = [0,1,2,3]
    const colorSelect = 'color_' + targetID
    /* Checks if you pressed a color instead of play button */
    if(targetID != 'play') {
        /* Pushes the id of the color into an array */
        colorID.push(targetID)
        /* Takes away the current target ID from the array colorNumbers */
        colorNumbers.splice(targetID, 1)
        /* Selects every other color and change their opacity to 0.5 (not selected) */
        for (number of colorNumbers) {
            targetOthers = document.getElementById(number)
            targetOthers.style.opacity = "0.5";
        }
        /* Changes the background color of the current chosen color */
        e.target.style.cssText = 'background-color: ' + colorSelect 
    }    
    /* Checks if colorID has to many ID's within the array. */
    if (colorID.length > 1) {
        colorID.shift(); // removes the first element from an array 
    } 
    /* Checks if the colorID holds an ID or not. */
    if(colorID.length == 1) {
        if(targetID == 'play') {
            runGame()
        }
    } else {
        alert('Choose a color to race with first, then press the big green button!')
    }

    if(targetID == 'reset') {
        /* Deselects the color chosen */
        colorID = []
        const colorNumbers = [0,1,2,3]
        for (number of colorNumbers) {
            document.getElementById(number).style.opacity = "1"
        }
        document.getElementById("reset").setAttribute("id", "play")
        const buttonNumber = [0,1,2,3,'play']
        for (id of buttonNumber) {
            document.getElementById(id).style.pointerEvents = 'auto'
        }
        selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>'
        console.log(targetID)
    }
})

function runGame() {
    /* This will disable all click events on the divs */
    const buttonNumber = [0,1,2,3,'play']
    for (id of buttonNumber) {
        document.getElementById(id).style.pointerEvents = 'none'
    }
    // Create a function/loop between this ---------->>>
    /* Gets the colors from the HTML */
    const getColor_0 = document.getElementById("racer_0")
    const getColor_1 = document.getElementById("racer_1")
    const getColor_2 = document.getElementById("racer_2")
    const getColor_3 = document.getElementById("racer_3")
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
    selectPlay.innerHTML = '<i class="fa-solid fa-person-praying"></i>'
    selectPlay.style.backgroundColor = waitColor
    selectPlay.style.color = textColor

    // Creates an empty array
    const randomNumberArray = []

    do {
        // Generating random number between 35 and 85
        const randomNumber = Math.floor(Math.random() * 50) + 35
        
        // Checks if the number is included in the array, if not push it into it.
        if (!randomNumberArray.includes(randomNumber)) {
            randomNumberArray.push(randomNumber)
        }
    // create 4 numbers for the array
    } while (randomNumberArray.length < 4)
    // Create a function/loop between this ---------->>>
    /* Sets the interval of the time from the random number for each horse */
    let setColor_0 = setInterval(a, randomNumberArray[0])
    let setColor_1 = setInterval(b, randomNumberArray[1])
    let setColor_2 = setInterval(c, randomNumberArray[2])
    let setColor_3 = setInterval(d, randomNumberArray[3])
    const winnerArray = []
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function a() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_0 >= 100) {
            clearInterval(setColor_0)
            winnerArray.push(color_0)
            winnerColor(winnerArray)
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_0++
            getColor_0.style.height = colorHeight_0 + "%"
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function b() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_1 >= 100) {
            clearInterval(setColor_1)
            winnerArray.push(color_1)
            winnerColor(winnerArray)
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_1++
            getColor_1.style.height = colorHeight_1 + "%"
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function c() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_2 >= 100) {
            clearInterval(setColor_2)
            winnerArray.push(color_2)
            winnerColor(winnerArray)
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_2++
            getColor_2.style.height = colorHeight_2 + "%"
        }
    }
    /**
     * Gets the interval speed for colors and checks if its not 100% keep going.
     */
    function d() {
        /* Checks if the length of the race is finished (100%) */
        if (colorHeight_3 >= 100) {
            clearInterval(setColor_3)
            winnerArray.push(color_3)
            winnerColor(winnerArray)
        } else {
            /* if it isn't finished, keep on going. */
            colorHeight_3++
            getColor_3.style.height = colorHeight_3 + "%"
        }
    }
    // Create a function/loop between this <<<----------
}

function winnerColor(winnerArray) {
    if(winnerArray.length === 1) {
        colorFinish[0].style.cssText = 'background-color: ' + winnerArray[0]
        if(color_0 == winnerArray[0]) {
            announceWinner(0)
        }
        else if(color_1 == winnerArray[0]) {
            announceWinner(1)
        }
        else if(color_2 == winnerArray[0]) {
            announceWinner(2)
        }
        else if(color_3 == winnerArray[0]) {
            announceWinner(3)
        }
    } 
    else if (winnerArray.length === 2) {
        colorFinish[1].style.cssText = 'background-color: ' + winnerArray[1]
    }
    else if (winnerArray.length === 3) {
        colorFinish[2].style.cssText = 'background-color: ' + winnerArray[2]
    }
    else if (winnerArray.length === 4) {
        colorFinish[3].style.cssText = 'background-color: ' + winnerArray[3]

        /* This will enable click event on the div */
        document.getElementById('play').style.pointerEvents = 'auto'
        
        selectPlay.innerHTML = '<i class="fa-solid fa-rotate-left"></i>'
        selectPlay.style.backgroundColor = resetColor
        selectPlay.style.color = textColor

        /* Changes the play buttons ID to reset */
        document.getElementById("play").setAttribute("id", "reset")
    }
}

function announceWinner(winID) {
            if(winID == colorID) {
                const score = parseInt(document.querySelector(".score--box").innerHTML);
                plusScore(score);
            } else {
                const score = parseInt(document.querySelector(".score--box").innerHTML);
                minusScore(score);
            }
}

function plusScore(score) {
    score += 5;
    document.querySelector('.score--box').innerHTML = score
    return score;
}

function minusScore(score) {
    score -= 3;
    document.querySelector('.score--box').innerHTML = score
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
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}