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