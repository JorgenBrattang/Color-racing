# Links
- <a href="https://github.com/JorgenBrattang/color-racing/blob/main/README.md">README.md</a>
- <a href="https://jorgenbrattang.github.io/color-racing/" title="Link to live website" rel="nofollow">View live website here!</a>

# Feature testing
## <u>Responsive test</u>
Video shows free resizing and three screens iPhone XR, iPad Air and Nest Hub Max.

![Test Responsive](assets/videos/README-videos/Testing/test-Responsive.webp)

- (It works for all sizes, and gives out an alert if you have less then 600px height to use )

![Test AlertResponse](assets/videos/README-videos/Testing/test-alertResponse.webp)


## Features within the website

### <u>Full Round</u>
![test-fullRound](assets/videos/README-videos/Testing/test-fullRound.webp)

### <u>Color pillars</u>
![colorPillars](assets/videos/README-videos/Feature/colorRacing.webp)

### <u>Rounds Blinking</u>
![roundsBlinking](assets/videos/README-videos/Feature/roundsBlinking.webp)

### <u>Blinking Hand</u>
![blinkingHand](assets/videos/README-videos/Feature/blinkingHand.webp)

### <u>Colors blinking</u>
![colorsBlinking](assets/videos/README-videos/Feature/colorsBlinking.webp)

### <u>Hand blinking to praying figure</u>
![handBlinking to praying](assets/videos/README-videos/Feature/blinkingPlay-praying.webp)

### <u>Colors racing</u>
![colorRacing](assets/videos/README-videos/Feature/colorRacing.webp)

### <u>Score changing</u>
![scoreNegative](assets/videos/README-videos/Feature/scoreNegative.webp)![scorePlus](assets/videos/README-videos/Feature/scorePlus.webp)

### <u>Reset Button</u>
![resetButton](assets/videos/README-videos/Feature/resetButton.webp)

### <u>Changing rounds</u>
![changeRounds](assets/videos/README-videos/Feature/changeRounds.webp)

### <u>High and latest Score</u>
![high-latestScore](assets/videos/README-videos/Feature/high-latestScore.webp)<br>
![lowerScore](assets/videos/README-videos/Feature/lowerScore.webp)

### <u>New Game</u>
![newGame](assets/videos/README-videos/Feature/newGame.webp)

### <u>Instructions</u>
![openInstruction](assets/videos/README-videos/Feature/openInstruction.webp)<br>
![openInstruction](assets/videos/README-videos/Feature/openInstruction-Mobile.webp)


## Bug reports
The developer encounter a number of bugs throughout the development of this game, there were hurdles to overcome but those were fixed with either help from tutors, slack community or researching the internet.

A few worth mentioning:
- When starting the race, the colors would not start onces pressed.
    - Solution the progress bar was not working properly, which gave the if statement false information.
- Using the same button twice for different purpose, this gave the developer a headache.
    - Solutions changing the ID's and using if statements to check for information given and not given.
- Resizing the window for horizontal and portrait mode, this gave an unsuspected and unsolved bug within the inspect window in Chrome. As mentioned in Unfixed Bugs within the <a href="https://github.com/JorgenBrattang/color-racing/blob/main/README.md">README.md</a>


### <u>Websites on different browsers
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


## <u>Validator Testing</u>
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
