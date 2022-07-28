# Color Racing
Is where you can get race different colors to see who is the fastest, it's a fun way to just have something to do while you wait for something or just want to have a bit of fun.

<a href="https://jorgenbrattang.github.io/Color-racing/" title="Link to live website" rel="nofollow">View live website here!</a>

## Table of contents

# Overview

# UX

## Development
The development of this website started with getting a feel for how that could manage to get colors to race each other, and the logical thing was gravity simulated with a progressbar that goes for 10% to 100%. And for the user to be able to choose which color to race with, and how many tries to try to get it the highest score possible.

## Strategy
To achieve this the developer have to first learn how to do a progressbar and how to control it's movements with control, once that is achieved the developer need a way to randomize the movement of the progress bar and how to get so there is always one winner and no one with the same number. 

After that it's straight forward on just placing buttons and get them to control first, how many rounds there is to be played. After that which color to be raced and a loading phase where you have to wait until the race is over. And then start the whole thing over until the chosen number of rounds is achieved so we can get a latest score and possible a high score if that was achieved.

## Scope
To achieve the scope of this project the game has to have these criteria:
- Instructions how to play the game
- Intuitive design on how and where to press to progress through the game
- Feedback on when you press something, so you know you picked the right thing
- Alerts if something the user did in advance, and how to guide them to the right path
- The achievement when the user finished the game, high score and a latest score

Onces these criteria has been meet the game will function well and have achieved the purpose.

## Structure
First the user will arrive at the landing page which you are greeted with the instructions how to play the game, and blinking buttons where you are suppose to press to go about the game.

Each action taken will be meet with an appropriated action to progress the game.


## Skeleton
The skeleton was made using <a href="#" title="Link to Balsamiq website">Balsamiq</a>
<details><summary>Skeleton</summary>

![Wireframe from balsamiq](assets/images/README-images/wireframe.png)

</details>

## Surface
The surface was made using the skeleton, just with some better graphics. 

## Changes during the design process
The surface was changed a lot during the development of this project due to feedback from mentor and family, for example the game lacked a goal at first. That came to mind quite quickly after the skeleton was made and what came to be the basic coding of the game. 

The game needed to have a goal, which was declared to be a high score and a latest score. To let the user see what their recent achievements had been, and a way to let the user choose the number of difficulty to gain a higher score which introduced the round selection. After those changes the user feedback needed a simpler way to go about the game which lead to flashing buttons to guide the user towards pressing the right button at the right time.

## Typography
For easier reading the developer chose <a href="#" title="Link to google fonts Poppins">Poppins</a> from <a href="#" title="Link to google fonts">Google Fonts</a>, and a backup of sans serif.

## Color Scheme
The style utilizes a range of colors that contrast each other towards the background but compliments each other.
<p style="padding: 10px; background-color: #685465">#685465<p>
<p style="padding: 10px; background-color: #A96C7B">#A96C7B<p>
<p style="padding: 10px; background-color: #E38C79">#E38C79<p>
<p style="padding: 10px; background-color: #FFBC6C">#FFBC6C<p>
<p style="padding: 10px; background-color: #00A97F">#00A97F<p>
<p style="padding: 10px; background-color: #8685EF">#8685EF<p>
<p style="padding: 10px; background-color: #FAF7FF; color: black">#FAF7FF<p>
<p style="padding: 10px; background-color: #C9C9C9">#C9C9C9<p>
<p style="padding: 10px; background-color: #393939">#393939<p>

## Features
The features holds a number of elements that will guide the user throughout the game, so it's easy to follow along. Even without the explanatory text, you can just follow the blinking lights and get a grasp on how the game works.

With that said, here are the features:
- The first thing you will see onces entering the site will probably be the pillars of colors. Those represents the racing colors that are help up by a standing progressbar. And onces activated these will restart at their starting line and race towards the bottom of their field.

(GIF OF COLOR PILLARS)

- The second thing you may notice is the blinking buttons that holds numbers on them. And those are the buttons that will let you choose the amount of rounds that will be played. The higher the number chosen then greater the gain or loss.
    - These will change in opacity onces you press on one, and the one you chose will remain in the same color.

(GIF OF ROUND BUTTONS BLINKING)

- Onces that have been pressed, a new button will start flashing. Thats the submit button that will tell the game that the amount of rounds have been chosen, if it has not been chosen an alert will appear that will tell you that you need to choose a number of rounds before proceeding.

(GIF OF HAND BUTTON BLINKING)

- After the choosing of rounds, the buttons will change to the racing colors so you can pick your champion. The same thing will happen to these buttons, they will flash so you know where to press next to progress the game.
    - As the rounds choosing buttons these too will change in opacity accordingly to the one pressed.

(GIF OF COLOR BUTTONS BLINKING)

- When the user have chosen their color to be raced, they will be guided to the "Play" button which will start the race. So onces pressed this button will change into a praying figure thats grey and blinking, and the race have commenced.

(GIF OF PLAY BUTTON CHANGING TO THE PRAYING FIGURE)

- The race have now commenced, and the previous mentioned progress bars that are represented by the different colors will start race towards the bottom of their field. Onces they enter the bottom of the field, the winning board to the right / bottom of the racing colors will now change accordingly to their position when finishing.
    - These will change as mentioned to the color which came first, second, third and forth.

(GIF OF ONE RACE WITH THE WINNING BOARD CHANGING)

- As the race is finished, you can see your score changing. If you won you will see a green flashing light that indicates that you picked the right color to win, and if it lost you will see a red flashing light.
    - This will give you points of either plus 5, or negative 3 points.





## Testing

## Unfixed bugs

## Technologies used

## Main Language Used

## Frameworks, Libraries & Programs Used

## Deployment

# Credits

## What I learned

## Continued development

## Tutorials / used code

- Learn JavaScript Event Listeners In 18 Minutes
    - https://www.youtube.com/watch?v=XF1_MlZ5l6M

## Author

## Acknowledgements
