# Links
- <a href="https://github.com/JorgenBrattang/color-racing/blob/main/README.md">README.md</a>
- <a href="https://jorgenbrattang.github.io/color-racing/" title="Link to live website" rel="nofollow">View live website here!</a>

# Table of content
- <strong>[Feature testing](#feature-testing)</strong>
    - [Responsive test](#responsive-test)
    - [Features within the website](#features-within-the-website)
        - [Full round](#full-round)
        - [Color pillars](#color-pillars)
        - [Rounds blinking](#rounds-blinking)
        - [Blinking hand](#blinking-hand)
        - [Colors blinking](#colors-blinking)
        - [Hand blinking to praying figure](#hand-blinking-to-praying-figure)
        - [Colors racing](#colors-racing)
        - [Score changing](#score-changing)
        - [Reset Button](#reset-button)
        - [Changing rounds](#changing-rounds)
        - [High and latest Score](#high-and-latest-score)
        - [New Game](#new-game)
        - [Instructions](#instructions)
- [LightHouse report](#lighthouse-report)
- [Bug reports](#bug-reports)
- [Websites on different browsers](#websites-on-different-browsers)
- [Validator testing](#validator-testing)

# Feature testing
## Responsive test
Video shows free resizing and three screens iPhone XR, iPad Air and Nest Hub Max.

![Test Responsive](assets/videos/README-videos/Testing/test-Responsive.webp)

<u>It works for all sizes, and gives out an alert if you have less then 600px height to use.</u>

![Test AlertResponse](assets/videos/README-videos/Testing/test-alertResponse.webp)

[Back to top](#table-of-content)

## Features within the website

### Full round
![test-fullRound](assets/videos/README-videos/Testing/test-fullRound.webp)

### Color pillars
![colorPillars](assets/videos/README-videos/Feature/colorRacing.webp)

### Rounds blinking
![roundsBlinking](assets/videos/README-videos/Feature/roundsBlinking.webp)

### Blinking hand
![blinkingHand](assets/videos/README-videos/Feature/blinkingHand.webp)

### Colors blinking
![colorsBlinking](assets/videos/README-videos/Feature/colorsBlinking.webp)

### Hand blinking to praying figure
![handBlinking to praying](assets/videos/README-videos/Feature/blinkingPlay-praying.webp)

### Colors racing
![colorRacing](assets/videos/README-videos/Feature/colorRacing.webp)

### Score changing
![scoreNegative](assets/videos/README-videos/Feature/scoreNegative.webp)![scorePlus](assets/videos/README-videos/Feature/scorePlus.webp)

### Reset Button
![resetButton](assets/videos/README-videos/Feature/resetButton.webp)

### Changing rounds
![changeRounds](assets/videos/README-videos/Feature/changeRounds.webp)

### High and latest Score
![high-latestScore](assets/videos/README-videos/Feature/high-latestScore.webp)<br>
![lowerScore](assets/videos/README-videos/Feature/lowerScore.webp)

### New Game
![newGame](assets/videos/README-videos/Feature/newGame.webp)

### Instructions
![openInstruction](assets/videos/README-videos/Feature/openInstruction.webp)<br>
![openInstruction](assets/videos/README-videos/Feature/openInstruction-Mobile.webp)


## LightHouse report
![lightHouseReport](assets//images/TESTING-images/lightHouseReport.png)

To explain why I didn't get 100 on Accessibility, is that I sacrificed that for UX. As you can see here, I had this made like this:

```
<a href="#" ...>
```
Thats because if I did not I would not get the same feedback from when hovering the buttons, it didn't feel right for the user and I could't fix that in time for the project to finish. Will research it in the future to so how to fix it.

![lightHouseWarning](assets//images/TESTING-images/lightHouseWarning.png)

[Back to top](#table-of-content)

## Bug reports
The developer encounter a number of bugs throughout the development of this game, there were hurdles to overcome but those were fixed with either help from tutors, slack community or researching the internet.

A few worth mentioning:
- When starting the race, the colors would not start onces pressed.
    - Solution the progress bar was not working properly, which gave the if statement false information.
- Using the same button twice for different purpose, this gave the developer a headache.
    - Solutions changing the ID's and using if statements to check for information given and not given.
- Resizing the window for horizontal and portrait mode, this gave an unsuspected and unsolved bug within the inspect window in Chrome. As mentioned in Unfixed Bugs within the <a href="https://github.com/JorgenBrattang/color-racing/blob/main/README.md">README.md</a>

[Back to top](#table-of-content)

## Websites on different browsers
Testing were done on Opera, Firefox and Chrome. The game works as intended.

- Issue was found on firefox, landscape mode was using 100% instead of a smaller window, implemented this to fix it.

```
@-moz-document url-prefix() {
    main {
        width: 800px;
    }
}
```

![portrait Window](assets//images/README-images/diffrent_browsers_portrait.png)

![landscape Window](assets//images/README-images/diffrent_browsers_landscape.png)

[Back to top](#table-of-content)

## Validator Testing
Ran through all the code and no errors were found.
    
**HTML**
- No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)

![HTML validator](assets/videos/README-videos/Validator/HTML-validator.webp)


**CSS**
- No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)    

<u>CSS Portrait Validator</u>

![CSS Portrait Validator](assets/videos/README-videos/Validator/CSS-Validator-portrait.webp)

<u>CSS Landscape Validator</u>

![CSS Landscape Validator](assets/videos/README-videos/Validator/CSS-Validator-landscape.webp)

**JavaScript**
- Ask if these are relevant [JS Hint](https://jshint.com/)    

[Back to top](#table-of-content)