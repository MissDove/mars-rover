const prompt = require('prompt-sync')({sigint: true});

// get grid size
let grid = prompt("Please provide the grid size (for example: 4 8): ");

let splitGrid = grid.split(" ");

let xSize = splitGrid[0];
let ySize = splitGrid[1];

console.log("X SIZE", xSize);
console.log("Y SIZE", ySize);


let robotPosition = prompt("Please provide robot's position and movements: ");

let userInput = robotPosition.split("(" && "," && ")" && " " );

let initialXPosition = userInput[0].replace("(", "");
let initialYPosition = userInput[1];
let initialOrientation = userInput[2].replace(")", "");
let movements = userInput[3];

console.log("INITIAL X POSITION", initialXPosition);
console.log("INITIAL Y POSITION", initialYPosition);
console.log("INITIAL ORIENTATION", initialOrientation);
console.log("MOVEMENTS", movements);

const moveRobot = (x, y, orientation, movements) => {
    let splitMovements = movements.split("").map((movement) => movement.toUpperCase());

    console.log("split movements", splitMovements);

    let xPosition = parseInt(x);
    let yPosition = parseInt(y);
    let directionFromInput = orientation.toUpperCase();

    const checkLDirection = (x, y, direction) => {
        let lArray = [];

         if (direction === "N") {
             lArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "W"
            });

        } else if (direction === "E") {
             lArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "N"
            })
        } else if (direction === "W") {
             lArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "S"
            })
        } else if (direction === "S") {
             lArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "E"
            })
        }
         console.log("L", lArray);
         return lArray;
    };

    const checkRDirection = (x, y, direction) => {
        let rArray = [];

        if (direction === "N") {
            rArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "E"
            })
        } else if (direction === "E") {
            rArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "S"
            })
        } else if (direction === "W") {
            rArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "N"
            })
        } else if (direction === "S") {
            rArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y,
                direction: directionFromInput = "W"
            })
        }
        console.log("R", rArray);
        return rArray;
    }

    const checkFDirection = (x, y, direction) => {
        let fArray = [];

        if (direction === "N") {
            fArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y + 1,
                direction: directionFromInput = "N"
            })
        } else if (direction === "E") {
            fArray.push({
                xPosition: xPosition = x + 1,
                yPosition: yPosition = y,
                direction: directionFromInput = "E"
            })
        } else if (direction === "W") {
            fArray.push({
                xPosition: xPosition = x - 1,
                yPosition: yPosition = y,
                direction: directionFromInput = "W"
            })
        } else if (direction === "S") {
            fArray.push({
                xPosition: xPosition = x,
                yPosition: yPosition = y - 1,
                direction: directionFromInput = "S"
            })
        }

        console.log("F", fArray);
        return fArray;
    }



    let allPositionsArray = [];

    splitMovements.forEach((value, ) => {
        if (value === "L") {
            allPositionsArray.push(checkLDirection(xPosition, yPosition, directionFromInput));
        } else if (value === "R") {
            allPositionsArray.push(checkRDirection(xPosition, yPosition, directionFromInput));
        } else if (value === "F") {
            allPositionsArray.push(checkFDirection(xPosition, yPosition, directionFromInput));
        }
    });


    console.log("all positions here", allPositionsArray);

    let reversed = allPositionsArray.reverse();

    console.log("REVERSED", reversed[0]);

    console.log("position", `(${reversed[0][0].xPosition} ${reversed[0][0].yPosition} ${reversed[0][0].direction})`);

    // let lastPosition = false;
    //
    // while(!lastPosition) {
    //
    // }
}

moveRobot(initialXPosition, initialYPosition, initialOrientation, movements);




