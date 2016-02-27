import { identifier1, identifier2 } from "module";

// import just one
import { sum } from "example";
console.log(sum(1, 2));     // 3
sum = 1;        // error

// import multiple
import { sum, multiply, magicNumber } from "example";
console.log(sum(1, magicNumber));   // 8
console.log(multiply(1, 2));        // 2

// import everything
import * as example from "example";
console.log(example.sum(1,
        example.magicNumber));          // 8
console.log(example.multiply(1, 2));    // 2

// rename imports
import { add as sum } from "example";
console.log(typeof add);            // "undefined"
console.log(sum(1, 2));             // 3

// import the default
import sum from "example";

console.log(sum(1, 2));     // 3