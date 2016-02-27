// export data
export var color = "red";
export let name = "Daniel";
export const magicNumber = 7;

// export function
export function sum(num1, num2) {
    return num1 + num1;
}

// export class
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// this function is private to the module
function subtract(num1, num2) {
    return num1 - num2;
}

// define a function
function multiply(num1, num2) {
    return num1 * num2;
}

// export later
export multiply;

if (flag) {
    export flag;    // syntax error
}

// rename exports
function sum(num1, num2) {
    return num1 + num2;
}

export { sum as add };

// export as default, when the module itself represents the function
export default function(num1, num2) {
    return num1 + num2;
}

// equivalent to previous example
function sum(num1, num2) {
    return num1 + num2;
}

export { sum as default };

// export as singleton
export as new Class;