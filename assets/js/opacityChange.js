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