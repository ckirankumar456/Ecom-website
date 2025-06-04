function Person(name, age) {
  this.age = age;
  this.name = name;
}
const person = new Person("Ajay", 23);
console.log(person.name);
console.log(person.age);
