const echo = text => text;
console.log(echo('Hello World!'));

const expand = (rectangle) => {
    rectangle.x += 10;
    rectangle.y +=20;
    return rectangle;
};

var rectangle = { x: 1, y: 2 };
console.log(expand(rectangle));