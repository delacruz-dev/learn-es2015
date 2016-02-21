const worker = {
  id: 1337,
  name: 'John',
  surname: 'Woo',
  age: 35,
  job: 'UI designer'
};

const f = function({worker} = {}){
  return {
    ...worker,
    fullName: `Mr./Mrs. ${worker.surname}, ${worker.name}`,
    age: `${worker.age} years old`
  };
};

console.log(f({worker}));