const values = [1, 2, 3, 4];

console.log(values);
console.log(...values);

function f(x, y=12){
  return x+y;
}

console.log(f(3)); // 15

function fx(x, ...y){
  return x + y.length;
}
console.log(fx(3, "hello", true)); // 5

function fs(x, y, z) {
  return x + y + z;
}
console.log(fs(...[1, 2, 3])); // 6
