var obj = {
  foo: function() {
    console.log(this === obj);
  }
};

obj.foo(); // this es el propio objeto

function foo() {
  console.log(this);
}

foo(); // this es global, o window si se ejecuta en cliente
new foo(); // this es foo, al haber creado una nueva instancia