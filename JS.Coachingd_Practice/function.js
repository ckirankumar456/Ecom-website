// function happyBirthDay(username, age) {
//   console.log(`happy birthday dear ${username}`);
//   console.log(`you are ${age} year old`);
// }
// happyBirthDay("kiran kumar", 23);

// function isValidEmail(email) {
//   if (email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isValidEmail("bro@fake.com"));

//    recursion using normal functions  //

function recursion(value) {
  if (value == 0) {
    return 1;
  } else {
    return value * recursion(value - 1);
  }
}
let value = 5;
let result = recursion(value);
console.log(`factorial of ${value} = ${result}`);
