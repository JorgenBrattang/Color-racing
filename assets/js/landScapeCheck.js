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