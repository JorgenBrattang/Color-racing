const color_0 = '#685465'
const color_1 = '#A96C7B'
const playColor = '#00A97F'
const color_3 = '#E38C79'
const color_4 = '#FFBC6C'
const waitColor = '#C9C9C9'
const backColor = '#393939'

/* Selects all the buttons (<a>) in the DOM */
const button = document.querySelectorAll('.select-container > a') 

/* Gets the play button and sets it to it's default Icon */
const selectPlay = document.getElementById('play')
selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>'

/* Gets the horses from the HTML */
const getColor_0 = document.getElementById("racer_0")

/* Lets the horseWidth to be 1% of 100%, so you can see where your horse starts */
let colorHeight_0 = 10;
getColor_0.style.height = colorHeight_0 + "%";

var colorID = []

addGlobalEventListener("click", '.select-container > a', e => { 
    let targetID = e.target.id
    const numbers = [0,1,2,3]
    const color = 'color_' + targetID
    e.target.style.backgroundColor = color    
    

    if(targetID != 'play') {
        colorID.push(targetID)
        numbers.splice(targetID, 1)
        for (number of numbers) {
            targetOthers = document.getElementById(number)
            targetOthers.style.opacity = "0.5";
        }
        e.target.style.cssText = 'background-color: ' + color 
        console.log('inside if statement colorID = ' + colorID)
    }    

    if (colorID.length > 1) {
        colorID.shift(); // removes the first element from an array 
    }

    if(targetID == 'play') {
        console.log("You pressed Play")
        console.log('outside if statement colorID = ' + colorID)
    }

})

function runGame() {
        selectPlay.innerHTML = '<i class="fa-solid fa-person-praying"></i>'
        selectPlay.style.backgroundColor = waitColor
        selectPlay.style.color = backColor

        /* Sets the interval of the time from the random number for each horse */
        let setColor_0 = setInterval(a, 50);

        /**
         * Gets the interval speed for Brown horse and if its not 100% keep going.
         */
        function a() {
            /* Checks if the length of the race is finished (100%) */
            if (colorHeight_0 >= 100) {
                clearInterval(setColor_0);
            } else {
                /* if it isn't finished, keep on going. */
                colorHeight_0++;
                getColor_0.style.height = colorHeight_0 + "%";
            }
        }
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