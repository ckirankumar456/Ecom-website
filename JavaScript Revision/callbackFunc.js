// function greet(name) {
//   console.log(`hello ${name}`);
// }
// function UserInput(callback) {
//   const name = "kiran";
//   callback(name);
// }
// UserInput(greet);

// console.log("start");
// setTimeout(() => {
//   console.log("this is the callback inside setTimeout");
// }, 3000);
// console.log("end");

// function fetchData(callback) {
//   console.log("fetching data...");
//   setTimeout(() => {
//     const data = { name: "kiran", age: 23 };
//     callback(data);
//   }, 3000);
// }
// function displayData(data) {
//   console.log(`user name : ${data.name}, age : ${data.age}`);
// }
// fetchData(displayData);

function first(callback) {
  setTimeout(() => {
    console.log("first task completed");
    callback();
  }, 1000);
}
function second(callback) {
  setTimeout(() => {
    console.log("second task completed");
    callback();
  }, 3000);
}
function third(callback) {
  setTimeout(() => {
    console.log("third task completed");
  }, 1000);
}

first(() => {
  second(() => {
    third();
  });
});
