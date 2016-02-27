var colors = [ 'red', 'green', 'blue' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Iterating over an array
const iterable = [1, 2, 3];

for (let value of iterable) {
  console.log(value);
}

// Iterating over a string
const abc = "ABC";

for (let character of abc) {
  console.log(character);
}

// Any kind of object impllementing the following pattern
let countdown = {
  count: 10,
  [Symbol.iterator]() {
    return {
      next() {
        const value = this.count--;
        const done = this.count <= 0;

        return {
          value: this.count,
          done
        };
      }
    }
  }
};

// console.log(countdown.next()); // { value: 5, done: false }
// console.log(countdown.next()); // { value: 4, done: false }
// console.log(countdown.next()); // { value: 3, done: false }
// console.log(countdown.next()); // { value: 2, done: false }
// console.log(countdown.next()); // { value: 1, done: true }
// console.log(countdown.next()); // { value: 0, done: true }

for(let value of countdown) {
 console.log(`${value}...`);
}
