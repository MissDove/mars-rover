const { moveRobot } = require('./index');


test("moveRobot function", () => {

        let xGrid = 4;
        let yGrid = 8;
        let x = 2;
        let y = 3;
        let direction = "E";
        let movements = "LFRFF";


        expect(moveRobot(xGrid, yGrid, x, y, direction, movements)).toBe("(4, 4, E)");

});