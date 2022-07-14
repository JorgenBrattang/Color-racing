const color_0 = '#685465';
const color_1 = '#A96C7B';
const playColor = '#00A97F';
const color_3 = '#E38C79';
const color_4 = '#FFBC6C';
const hoverColor = '#C9C9C9';
const selectColor = '#393939';

const button = document.querySelectorAll('button') 

addGlobalEventListener("click", "button", e => {
    let targetID = e.target.id
    let numbers = [0,1,2,3]

    console.log(targetID)

    if(targetID == 'play') {
        alert('You hit play!')
    } else {
        numbers.splice(targetID, 1)
    }
    console.log('Your id is: ' + targetID)
    

    /* Gets the right color from the targetID */
    // let color = 'color_' + targetID
    // console.log(color)
    // e.target.style.backgroundColor = selectColor

    console.log(numbers)

    if(targetID != 'play') {
        for (number of numbers) {
            console.log(number)
            targetOthers = document.getElementById(number)
            targetOthers.style.backgroundColor = selectColor
        }
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