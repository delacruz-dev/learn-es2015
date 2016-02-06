const tag = (strings, args) => {
  return strings.map(s => 
    s.split('').map(s => `${s}.`).join(''))
  .join('');
}

console.log(tag`Hello, World!`);