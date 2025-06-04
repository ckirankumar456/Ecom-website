//   extract values from objects

const person1 = {
  firstName: "kiran",
  lastName: "kumar",
  age: 22,
  job: "programmer",
};
const person2 = {
  firstName: "patric",
  lastName: "star",
  age: 34,
};
//const { firstName, lastName } = person1;
//console.log(firstName);
function limitDetailes(...Person) {
  console.log(...Person);
}
limitDetailes(person1);
