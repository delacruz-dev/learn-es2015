const values = [1, 2, 3, 4];

console.log(values);
console.log(...values);

function f(x, y=12){
  return x+y;
}

console.log(f(3)); // 15

function f(x, ...y){
  return x + y.length;
}
console.log(f(3, "hello", true)); // 5

function f(x, y, z) {
  return x + y + z;
}
console.log(f(...[1, 2, 3])); // 6