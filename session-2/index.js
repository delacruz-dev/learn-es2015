function drawCircle({radius = 30, coords = { x: 0, y: 0}} = {}) {
    console.log(radius, coords);
    // draw the circle
};

drawCircle(); // radius: 30, coords.x: 0, coords.y: 0 }
drawCircle({radius: 10}); // radius: 10, coords.x: 0, coords.y: 0 }
drawCircle({coords: {y: 10, x: 30}, radius: 10}); // radius: 10, coords.x: 30, coords.y: 10 }