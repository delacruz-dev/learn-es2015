var a = 'I am global';

function foo(){
  var b = 'I am local';
  console.log('Does a exist in local scope?', !!a);
  console.log('Does b exist in local scope?', !!b);

  if(true){
    var c = 'I am a statement variable';
  }

  console.log('Does c exist outside the statement?', !!c);

  for(var d=0; d<10; d++){
    // ...
  }

  console.log('Does d exist outside the loop?', !!d);
}

foo();
console.log('Does a exist in global scope?', !!a);
// console.log('Does b exist in global scope?', !!b);
// console.log('Does c exist in global scope?', !!c);
