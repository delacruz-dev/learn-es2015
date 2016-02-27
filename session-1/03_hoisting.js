(function() {
  console.log(x); // x existe, pero su valor no está asignado, 
                  // así que imprime undefined
  if(true) {
    var x = 'hola mundo';
  }
  console.log(x); // la variable es global a la función, 
                  // así que imprime el valor asignado en el if
})();

// Hoisting:
function foo() {
  bar();
  var x = 1;
}

// se convierte en:
function foo(){
  var x;
  bar();
  x = 1;
}

// 
var x = 'Hello World';

(function foo(){
  console.log(x);
  var x = 'New Value';
  console.log(x);
})();

var x = 'Hello World';

(function foo(){
 var x;
 console.log( x );
 x = 'New Value';
 console.log( x );
})();