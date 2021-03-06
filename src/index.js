const prompt = require('prompt-sync')({sigint: true});

// get grid size
let grid = prompt("Please provide the grid size (for example: 4 8): ");

let splitGrid = grid.split(" ");

let xSize = splitGrid[0];
let ySize = splitGrid[1];

// get robot position and movements
let robotPosition = prompt("Please provide robot's position and movements: ");

let userInput = robotPosition.split("(" && "," && ")" && " " );

let initialXPosition = userInput[0].replace("(", "");
let initialYPosition = userInput[1];
let initialOrientation = userInput[2].replace(")", "").toUpperCase();
let movements = userInput[3];


// function to move robot
const moveRobot = (xGrid, yGrid, x, y, orientation, movements) => {
    let splitMovements = movements.split("").map((movement) => movement.toUpperCase());

    let xPosition = parseInt(x);
    let yPosition = parseInt(y);
    let directionFromInput = orientation.toUpperCase();

    let directionArray = [{xPosition: parseInt(initialXPosition), yPosition: parseInt(initialYPosition), direction: initialOrientation}];

    // function to rotate robot to the left by 90 degrees
    const checkLDirection = (x, y, direction) => {
         if (direction === "N") {
             directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "W"
            });

        } else if (direction === "E") {
             directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "N"
            })
        } else if (direction === "W") {
             directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "S"
            })
        } else if (direction === "S") {
             directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "E"
            })
        }
         console.log("1", directionArray);
         return directionArray;
    };

    // function to rotate robot to the right by 90 degress
    const checkRDirection = (x, y, direction) => {
        if (direction === "N") {
            directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "E"
            })
        } else if (direction === "E") {
            directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "S"
            })
        } else if (direction === "W") {
            directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "N"
            })
        } else if (direction === "S") {
            directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "W"
            })
        }
        console.log("2", directionArray);
        return directionArray;
    }

    // function to move robot forward by one
    const checkFDirection = (x, y, direction) => {
        if (direction === "N") {
            directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y + 1,
                direction: directionFromInput = "N"
            })
        } else if (direction === "E") {
            directionArray.push({
                xPosition: xPosition = x + 1,
                yPosition: yPosition = y,
                direction: directionFromInput = "E"
            })
        } else if (direction === "W") {
            directionArray.push({
                xPosition: xPosition = x - 1,
                yPosition: yPosition = y,
                direction: directionFromInput = "W"
            })
        } else if (direction === "S") {
            directionArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y - 1,
                direction: directionFromInput = "S"
            })
        }
        console.log("3", directionArray);
        return directionArray;
    }

    splitMovements.forEach((value, ) => {
        if (value === "L") {
            checkLDirection(xPosition, yPosition, directionFromInput);
        } else if (value === "R") {
            checkRDirection(xPosition, yPosition, directionFromInput);
        } else if (value === "F") {
            checkFDirection(xPosition, yPosition, directionFromInput);
        }
    });

    console.log("All array", directionArray);

    // reversing array to check for the last position
    let reversed = directionArray.reverse()

    // getting the last position
    let firstReversed = reversed.shift();

    let isLost = false;

    // checking if last position is within grid or not
    if ((firstReversed.xPosition < 0 || firstReversed.xPosition > xGrid) || (firstReversed.yPosition < 0 || firstReversed.yPosition > yGrid) ) {
        isLost = true;
    } else if ((firstReversed.xPosition >= 0 && firstReversed.xPosition <= xGrid) && (firstReversed.yPosition >= 0 && firstReversed.yPosition <= yGrid)) {
        isLost = false
    }

    // if last position is not within grid, looking for the last position that was within grid
    if (!isLost) {
        console.log(`(${firstReversed.xPosition}, ${firstReversed.yPosition}, ${firstReversed.direction})`)
    } else {
        const lastPosition = reversed.find((value) =>
            ((value.xPosition >= 0 && value.xPosition <= xGrid) && (value.yPosition >= 0 && value.yPosition <= yGrid))
        )
        console.log(`(${lastPosition.xPosition}, ${lastPosition.yPosition}, ${lastPosition.direction}) LOST`);
    }
}

moveRobot(xSize, ySize, initialXPosition, initialYPosition, initialOrientation, movements);

module.exports = { moveRobot }
