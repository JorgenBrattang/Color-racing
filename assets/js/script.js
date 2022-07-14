const color1 = '#685465';
const color2 = '#A96C7B';
const color3 = '#E38C79';
const color4 = '#FFBC6C';
const playColor = '#00A97F';
const hoverColor = '#C9C9C9';
const selectColor = '#393939';

const button = document.querySelectorAll('button')

addGlobalEventListener("click", "button", e => {
    console.log(e)
    console.log(e.target)
    e.target.style.backgroundColor = 'red';
})

/**
 * Type: "click" 
 * 
 * selector: "button"
 * 
 * callback: e =>
 * 
 * Then you can call the e with:
 * 
 * console.log(e)
 * 
 * To Check what you need to change.
 * 
 * Example: 
 * 
 * e.target.style.backgroundColor = 'red';
 */
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}

