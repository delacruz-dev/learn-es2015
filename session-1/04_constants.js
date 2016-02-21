const THIRTEEN = 13;
console.log(THIRTEEN);

// THIRTEEN = 14; // will fail, number is a read-only

// const PI;
// PI = 3.1416; // will also fail, as the value must be assigned in the declaration.

const USER = {
  name: 'Daniel',
  surname: 'de la Cruz',
  age: 32
};

USER.name = 'Joan'; // works, as we are modifying a property, but the object remains intact
USER.age = 'treinta y dos'; // modifying a property type also works
// USER = 'Daniel de la Cruz'; // fails, since the const type can't be modifyied

console.log(USER);
