var object = { one: 1, two: 2 };
var {one, two} = object;

function suma({a, b} = {}) {
  return a + b;
};

var a = 2;
var b = 3;
console.log(suma({a, b}));

function drawCircle({radius = 30, coords = { x: 0, y: 0}} = {}) {
    console.log(radius, coords);
    // draw the circle
};

drawCircle(); // radius: 30, coords.x: 0, coords.y: 0 }
drawCircle({radius: 10}); // radius: 10, coords.x: 0, coords.y: 0 }
drawCircle({coords: {y: 10, x: 30}, radius: 10}); // radius: 10, coords.x: 30, coords.y: 10 }