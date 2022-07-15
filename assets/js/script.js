const color_0 = '#685465'
const color_1 = '#A96C7B'
const playColor = '#00A97F'
const color_3 = '#E38C79'
const color_4 = '#FFBC6C'
const waitColor = '#C9C9C9'
const backColor = '#393939'

/* Gets all the buttons from DOM */
// const button = document.querySelectorAll('button') 


const button = document.querySelectorAll('.select-container > a') 
const selectPlay = document.getElementById('play')
selectPlay.innerHTML = '<i class="fa-solid fa-play"></i>'

addGlobalEventListener("click", '.select-container > a', e => { 
    let targetID = e.target.id
    let numbers = [0,1,2,3]

    /* If the targetID is true, do that. Otherwise take away the ID from the array. */
    if(targetID == 'play') {
        selectPlay.innerHTML = '<i class="fa-solid fa-person-praying"></i>'
        selectPlay.style.backgroundColor = waitColor
        selectPlay.style.color = backColor
    } else {
        numbers.splice(targetID, 1)
    }
    console.log('Your id is: ' + targetID)
    

    /* Gets the right color from the targetID */
    let color = 'color_' + targetID
        e.target.style.backgroundColor = color

    /* If it isn't the play button, change the colors of the others. */
    if(targetID != 'play') {
        for (number of numbers) {
            targetOthers = document.getElementById(number)
            targetOthers.style.opacity = "0.5";
        }
        e.target.style.cssText = 'background-color: ' + color
    }

    
})

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