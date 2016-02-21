let a = 'I am global';

function foo(){
  let b = 'I am local';
  console.log('Does a exist in local scope?', typeof a !== 'undefined');
  console.log('Does b exist in local scope?', typeof b !== 'undefined');

  if(true){
    let c = 'I am a statement variable';
  }

  console.log('Does c exist outside the statement?', typeof c !== 'undefined');

  for(let d=0; d<10; d++){
    // ...
  }

  console.log('Does d exist outside the loop?', typeof d !== 'undefined');
}

foo();
console.log('Does a exist in global scope?', typeof a !== 'undefined');
console.log('Does b exist in global scope?', typeof b !== 'undefined');
console.log('Does c exist in global scope?', typeof c !== 'undefined');
console.log('Does c exist in global scope?', typeof d !== 'undefined');
