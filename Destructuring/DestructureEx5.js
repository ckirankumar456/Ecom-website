//   Destructure in function parameter
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
function displayPerson({ firstName, lastName, age, job }) {
  console.log("name " + firstName, lastName);
  console.log("age " + age);
}
displayPerson(person1);
