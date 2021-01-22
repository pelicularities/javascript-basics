let user = {
  name: "John",
  age: 30,
};

console.log(Object.entries(user));
const countProperties = user => Object.entries(user).length;

console.log(countProperties(user)); // 2

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(Object.values(salaries));
const sumSalaries = salaries => Object.values(salaries).reduce((acc, val) => acc + val);

console.log(sumSalaries(salaries)); // 650
