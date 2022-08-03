# Color Racing
Is a game where you can race colors against other, it's a fun and a bit addictive. The project is aimed towards giving the user a fun time and for the developer to learn concepts and how to put things together.

This game is made for all ages from +3. So the game is easy to follow along, with the blinking buttons that will guide you through the game and at the same time giving you the satisfaction of goal of the game which is to try to get as high as possible score. But be warned it is a game of chance, so the more rounds that are chosen the higher the risk.

<a href="https://jorgenbrattang.github.io/Color-racing/" title="Link to live website" rel="nofollow">View live website here!</a>

![Wireframe from balsamiq](assets/images/README-images/PC-color_racing.png)

## Table of content
- [User Experience UX](#user-experience-ux)
    - [User stories](#user-stories)
    - [User feedback](#user-feedback)
- [Development](#development)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
    - [Changes during the design process](#changes-during-the-design-process)
    - [Typography](#typography)
    - [Color scheme](#color-scheme)
    - [Features](#features)
- [Testing](#testing)
    - [unfixedBugs](#unfixed-bugs)
- [Technologies used](#technologies-used)
    - [Main Language used](#main-language-used)
    - [Frameworks Libraries and Programs Used](#frameworks-libraries-and-programs-used)
- [Credits](#credits)
    - [Tutorials](#tutorials)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Author](#author)
    - [Acknowledgements](#acknowledgements)

# User experience UX

## User stories
- The game should be simple enough to play without much thought.
- The game should be satisfying and give a feel of accomplishment.
- The color scheme should be pleasing to look at.
- The game should be able to play on mobile, tablet and PC.

[Back to top](#table-of-content)

## User feedback
- Wife, the game doesn't have much intuitive game play. Where do I press now?
    - To please my wife, I put up clear instructions with flashing buttons so even my toddler at home could play the game which he enjoyed very much.
- Mom, The colors are nice... but.. I can see that some people might have an issue with this.
    - The color scheme was changed to be as good as possible, but it could still be better. But I ran out of time for that.

"Important note, include user feedback early in the development."

[Back to top](#table-of-content)

# Development
To develop this website, the developer had to think of a way colors moved and the easy answer is with gravity which could be simulated with a progressbar that goes for 10% to 100%. The user should be able to choose the number of rounds that should be played, to set the chances of getting a greater highscore. Choose their color for each round and watch it slowly make it towards the finishline. Where the colors would line up and from first to last. And give the user a score for each round. And finally a high score and latest score.

[Back to top](#table-of-content)

## Strategy
To achieve this the developer have to first learn how to make a progressbar and how to control it's movements with control, once that is achieved the developer need a way to randomize the movement of the progress bar and how to get so there is always one winner and no one with the same number. 

After that it's straight forward on just placing buttons and get them to control first, how many rounds there is to be played. After that which color to be raced and a loading phase where you have to wait until the race is over. And then start the whole thing over until the chosen number of rounds is achieved so we can get a latest score and possible a high score if that was achieved.

[Back to top](#table-of-content)

## Scope
To achieve the scope of this project the game has to have these criteria:
- Instructions how to play the game
- Intuitive design on how and where to press to progress through the game
- Feedback on when you press something, so you know you picked the right thing
- Alerts if something the user did in advance, and how to guide them to the right path
- The achievement when the user finished the game, high score and a latest score

Onces these criteria has been meet the game will function well and have achieved its purpose.

[Back to top](#table-of-content)

## Structure
First the user will arrive at the landing page which you are greeted with the instructions how to play the game, and blinking buttons where you are suppose to press to go about the game.

Each action taken will be meet with an appropriated action to progress the game.

[Back to top](#table-of-content)

## Skeleton
The skeleton was made using <a href="#" title="Link to Balsamiq website">Balsamiq</a>
<details><summary>Skeleton</summary>

![Wireframe from balsamiq](assets/images/README-images/wireframe.png)

</details>

[Back to top](#table-of-content)

## Surface
The surface was made using the skeleton, just with some better graphics. 

[Back to top](#table-of-content)

## Changes during the design process
The surface was changed a lot during the development of this project due to feedback from mentor and family, for example the game lacked a goal at first. That came to mind quite quickly after the skeleton was made and what came to be the basic code of the game. 

The game needed to have a goal, which was declared to be a high score and a latest score. To let the user see what their recent achievements had been, and a way to let the user choose the number of difficulty to gain a higher score which introduced the round selection. After those changes the user feedback needed a simpler way to go about the game which lead to flashing buttons to guide the user towards pressing the right button at the right time.

[Back to top](#table-of-content)

## Typography
For easier reading the developer chose <a href="#" title="Link to google fonts Poppins">Poppins</a> from <a href="#" title="Link to google fonts">Google Fonts</a>, and a backup of sans serif.

[Back to top](#table-of-content)

## Color scheme
The style utilizes a range of colors that contrast each other towards the background but compliments each other.

#000000<br>
![000000](assets/images/README-images/colorScheme/000000.png)<br>
#00A6ED<br>
![00A6ED](assets/images/README-images/colorScheme/00A6ED.png)<br>
#7FB800<br>
![7FB800](assets/images/README-images/colorScheme/7FB800.png)<br>
#029111<br>
![029111](assets/images/README-images/colorScheme/029111.png)<br>
#393939<br>
![393939](assets/images/README-images/colorScheme/393939.png)<br>
#f6511d<br>
![f6511d](assets/images/README-images/colorScheme/f6511d.png)<br>
#FAF7FF<br>
![FAF7FF](assets/images/README-images/colorScheme/FAF7FF.png)<br>
#FFB400<br>
![FFB400](assets/images/README-images/colorScheme/FFB400.png)<br>

[Back to top](#table-of-content)

## Features
The features holds a number of elements that will guide the user throughout the game, so it's easy to follow along. Even without the explanatory text, you can just follow the blinking lights and get a grasp on how the game works.

With that said, here are the features:

### <u>Welcome Text</u>
- The first thing that you may see is the "Welcome to Color Racing! text. Nothing special about this.

![welcomeText](assets/images/README-images/welcomeText.png)

[Back to top](#table-of-content)

### <u>Color pillars</u>
- The first thing after the welcome text you will see onces entering the site will probably be the pillars of colors. Those represents the racing colors that are help up by a standing progressbar. And onces activated these will restart at their starting line and race towards the bottom of their field.

![colorPillars](assets/videos/README-videos/Feature/colorRacing.webp)

[Back to top](#table-of-content)

### <u>Rounds Blinking</u>
- The second thing you may notice is the blinking buttons that holds numbers on them. And those are the buttons that will let you choose the amount of rounds that will be played. The higher the number chosen then greater the gain or loss.
    - These will change in opacity onces you press on one, and the one you chose will remain in the same color.

![roundsBlinking](assets/videos/README-videos/Feature/roundsBlinking.webp)

[Back to top](#table-of-content)

### <u>Blinking Hand</u>
- Onces that have been pressed, a new button will start flashing. Thats the submit button that will tell the game that the amount of rounds have been chosen, if it has not been chosen an alert will appear that will tell you that you need to choose a number of rounds before proceeding.

![blinkingHand](assets/videos/README-videos/Feature/blinkingHand.webp)

[Back to top](#table-of-content)

### <u>Colors blinking</u>
- After the choosing of rounds, the buttons will change to the racing colors so you can pick your champion. The same thing will happen to these buttons, they will flash so you know where to press next to progress the game.
    - As the rounds choosing buttons these too will change in opacity accordingly to the one pressed.

![colorsBlinking](assets/videos/README-videos/Feature/colorsBlinking.webp)<br>
![colorsBlinking](assets/videos/README-videos/Feature/colorsBlinkingPressed.webp)

[Back to top](#table-of-content)

### <u>Hand blinking to praying figure</u>
- When the user have chosen their color to be raced, they will be guided to the "Play" button which will start the race. So onces pressed this button will change into a praying figure thats grey and blinking, and the race have commenced.

![handBlinking to praying](assets/videos/README-videos/Feature/blinkingPlay-praying.webp)

[Back to top](#table-of-content)

### <u>Colors racing</u>
- The race have now commenced, and the previous mentioned progress bars that are represented by the different colors will start race towards the bottom of their field. Onces they enter the bottom of the field, the winning board to the right / bottom of the racing colors will now change accordingly to their position when finishing.
    - These will change as mentioned to the color which came first, second, third and forth.

![colorRacing](assets/videos/README-videos/Feature/colorRacing.webp)

[Back to top](#table-of-content)

### <u>Score changing</u>
- As the race is finished, you can see your score changing. If you won you will see a green flashing light that indicates that you picked the right color to win, and if it lost you will see a red flashing light.
    - This will give you points of either plus 5, or negative 3 points.

![scoreNegative](assets/videos/README-videos/Feature/scoreNegative.webp)![scorePlus](assets/videos/README-videos/Feature/scorePlus.webp)

[Back to top](#table-of-content)

### <u>Reset Button</u>
- After one round is finished, the user will be meet with the restart race button. Which will like the others start flashing, so the user knows where to press next. And onces pressed the user will need to choose a color again.
    - It will not start the whole thing over, so the amount of rounds that will be played it's not changing.

![resetButton](assets/videos/README-videos/Feature/resetButton.webp)

[Back to top](#table-of-content)

### <u>Changing rounds</u>
- Onces pressed the restart button, the rounds box will now increase with 1. So the user knows that the have progressed and know how many rounds there are left of the game.
   - Example:  1/5 to 2/5

![changeRounds](assets/videos/README-videos/Feature/changeRounds.webp)

[Back to top](#table-of-content)

### <u>High and latest Score</u>
- When the player have reached the whole amount of rounds that have been played, their score will be submitted to the "latest" scoreboard. And if their score is higher then the current highScore it will also change.
    - The latest scoreboard will flash green if it is greater than the high score and red if it is lower. Same with the high score it will do the same.

![high-latestScore](assets/videos/README-videos/Feature/high-latestScore.webp)<br>
![lowerScore](assets/videos/README-videos/Feature/lowerScore.webp)

[Back to top](#table-of-content)

### <u>New Game</u>
- Now the user has a choice, either stop playing or continue to try to reach a higher score then before. And to to that they will be meet with a new flashing button that will let them start a new game. And after it's been pressed they will be meet with the choosing of the amount of rounds and onward.

![newGame](assets/videos/README-videos/Feature/newGame.webp)

[Back to top](#table-of-content)

### <u>Instructions</u>
- If the game didn't explain it self, the user has an instructions button that will tell the basic of the game, how it works and how much that will be gain or lost when racing.
    - The text will automatically appear when entering in an landscape mode, but will only be a button to be pressed when using a portrait mode to save space. It can be closed in both modes if the user decides it to be closed.
    - The text of the button will also be changed, to utilize the space. "Instructions, press here!" to "Instructions, how to play!"

![openInstruction](assets/videos/README-videos/Feature/openInstruction.webp)

[Back to top](#table-of-content)

### <u>CopyRight</u>
- And last, you may see the copyright text at the bottom of the page. Which holds the Author of the site and the year.

![copyright](assets/images/README-images/copyright.png)

<br>

[Back to top](#table-of-content)

# Testing
To see the testing part, please follow this link: <a href="https://github.com/JorgenBrattang/Color-racing/blob/main/TESTING.md">Testing.md</a>

[Back to top](#table-of-content)

## Unfixed Bugs
- One issue that I have not found an answer to is when sometimes when working with the inspect window in chrome, it can suddenly just change the size of the screen without adding or removing code. But it will be fixed with reloading the page, so I will keep research towards getting a clear answer to this problem.

- Am I Responsive bug when using the this code, pulls the page up in the viewport. Could not find a fix for it, it works just fine when browsing normally.
```java
document.querySelector("#myDropdown").scrollIntoView({
        behavior: "smooth"
    });
```
[Back to top](#table-of-content)

# Technologies used

## Main Language Used
- HTML
- CSS
- Javascript

[Back to top](#table-of-content)

## Frameworks libraries and programs Used

- <a href="https://fonts.google.com/" title="Link to google fonts" rel="nofollow">Google Fonts</a>
    - Google fonts was used to import the font "Poppins".
- <a href="https://fontawesome.com/" title="Link to font awesome" rel="nofollow">Font awesome</a>
    - Font Awesome was used on almost all pages throughout the website to import icons (e.g. play button) for UX purposes.
- <a href="https://gitpod.io/" title="Link to gitpod" rel="nofollow">GitPod</a>
    - GitPod was used for writing code, committing, and then pushing to GitHub.
- <a href="https://github.com/" title="Link to github" rel="nofollow">Github</a>
    - GitHub was used to store the project after pushing
- <a href="https://balsamiq.com/" title="Link to balsamiq" rel="nofollow">Balsamiq</a>
    - Balsamiq was used to create the wireframes during the design phase of the project.
- <a href="https://www.freeformatter.com/html-formatter.html" title="Link to freeformatter" rel="nofollow">freeformatter</a>
    - Freeformatter was used to compressed my code to be more readable.
- <a href="https://gauger.io/fonticon/" title="Link to fonticon" rel="nofollow">Fonticon</a>
    - Fonticon was used to create a favicon.ico to the title.
- <a href="https://ezgif.com/video-to-webp/" title="Link to fonticon" rel="nofollow">EZGIFs</a>
    - EZGIFs was used to convert and crop videos for testing and features.

[Back to top](#table-of-content)

## Deployment
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into <a href="https://github.com/login" title="Link to GitHub login" rel="nofollow">GitHub</a> or <a href="(https://github.com/join)" title="Link to GitHub join" rel="nofollow">Create an account</a>.
2. Locate the <a href="https://github.com/JorgenBrattang/staying-healthy" title="Link to GitHub Repository" rel="nofollow">GitHub Repository</a>.
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the "Pages" section.
5. Under "Source" click the drop-down menu labelled "None" and select "Main".
6. Upon selection, the page will automatically refresh meaning that the website is now deployed.
7. Scroll back down to the "Pages" section to retrieve the deployed link.

[Back to top](#table-of-content)

# Credits
## Tutorials

- <a href="https://www.youtube.com/watch?v=XF1_MlZ5l6M" title="Learn JavaScript Event Listeners In 18 Minutes">Learn JavaScript Event Listeners In 18 Minutes</a>

- <a href="https://www.w3schools.com/js/default.asp" title="Learn JavaScript on w3schools">Learn JavaScript from w3schools</a>

[Back to top](#table-of-content)

## What I learned
That the developer learned from this project was the understanding of some core concepts how to read and write code, to get a better understanding on how to build up a working code by following some basic rules. Which will be most useful throughout the developers career.

[Back to top](#table-of-content)

## Continued development
To further develop this game, it would be to add more features like an online high score list. The ability to change the color scheme of the site by either choosing their own or by presets.

[Back to top](#table-of-content)

## Author
Student of Code Institute, Jörgen Brattäng

[Back to top](#table-of-content)

## Acknowledgements
I would like to acknowledge my mentor <a href="https://github.com/seunkoko" title="Link to GitHub profile" rel="nofollow">Oluwaseun Owonikoko</a> which gave my game a goal, which I did not think about. My family for helping me progress and support me, and not to forget the tutors and community of slack that helped me understand how to understand the concepts of programming JavaScript.

[Back to top](#table-of-content)
