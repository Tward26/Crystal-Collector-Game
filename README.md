# Crystal Collectors Game

*Simple jQuery browser based game*

## Purpose:
Using the jQuery library, this simple browser based games takes on click-events and selects specific html elements and updates them dynamically without requiring refreshes. This game demonstrates some of the benefits of using jquery over plain javascript.

## How it works:
This app makes use of the Math.random and Math.floor methods to generate random numbers between 2 specified points for both the random target number and the random number assigned to each crystal. I made a reset function for generating and assigning these numbers initially and for reseting the game after the win or loss condition is met. An on click event handler is attached to each crystal and by targeting its color value from html it adds the associated random value to the total based on which crystal was clicked. Simple counters were used to track wins and losses.

## How to use:
There are four crystals displayed as buttons on the page. The player is given a random number at the start of the game between 19 and 120. When the player clicks on a crystal, it will add a specific amount of points to the player's total score. Crystals are assigned a random value between 1 and 12 and eachs crystal value is unknown until they are clicked and the points are added to the total. The object of the game is to make your score match that of the random number given at the start of the game. If the number is exceeded, you lose and the game starts over. Each time the game restarts the random number is different as are the values assigned to each crystal. A counter is present on the right to track number of wins and losses.

## Contributors:
This project is maintained and contributed to solely by myself, Tyler Ward.

