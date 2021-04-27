## The problem - Mars Rover

Write a program that takes in commands and moves one or more robots around Mars.
* The world should be modelled as a grid with size m x n
* Your program should read the input, update the robots, and print out the final states
of the robots
* Each robot has a position (x, y), and an orientation (N, E, S, W)
* Each robot can move forward one space (F), rotate left by 90 degrees (L), or rotate
right by 90 degrees (R)
* If a robot moves off the grid, it is marked as ‘lost’ and its last valid grid position and
orientation is recorded
* Going from x->x+1 is in the easterly direction,andy->y+1 is in the northerly
direction. i.e. (0, 0) represents the south-west corner of the grid

The input takes the form:
* 4 8
* (2, 3, E) LFRFF
* (0, 2, N) FFLFRFF

The first line of the input ‘4 8’ specifies the size of the grid. The subsequent lines each
represent the initial state and commands for a single robot. (0, 2, N) specifies the initial
state of the form (x, y, orientation). FFLFRFF represents the sequence of movement commands for the robot.

The output should take the form:
* (4, 4, E)
* (0, 4, W) LOST

Each line represents the final position and orientation of the robots of the form (x, y, orientation) and optionally whether the robot was lost.

Another example for the input:
* 4 8
* (2, 3, N) FLLFR
* (1, 0, S) FFRLF

The output would be:
* (2, 3, W)
* (1, 0, S) LOST


## How to run the program

* Git clone this repo
* Make sure you have npm and node installed on your machine 
* In the root of the project run `npm install` to install all the necessary dependencies
* In the root of the project run `node index.js` to run the app and just follow the instructions


## Next steps
* Write tests (including edge cases)
* Refactor `moveRobot()` function to take position and movements of more than one robot
* Add validation for inputs