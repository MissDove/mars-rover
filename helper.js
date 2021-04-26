// some code to help me understand the behaviour of robots

 const directions = {
     N: {
         L: "W",
         R: "E",
         F: (x, y) => {
             return {
                 x: x,
                 y: y + 1
             }
         }
     },
     E: {
         L: "N",
         R: "S",
         F: (x, y) => {
             return {
                 x: x + 1,
                 y: y
             }
         }
     },
     W: {
         L: "S",
         R: "N",
         F: (x, y) => {
             return {
                 x: x - 1,
                 y: y
             }
         }
     },
     S: {
         L: "E",
         R: "W",
         F: (x, y) => {
             return {
                 x: x,
                 y: y -1
             }
         }
     }
 }
