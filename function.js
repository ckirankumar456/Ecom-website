/*function happy(username, age) {
  console.log("happy birthday dear", username);
  console.log("you are " + age + " years old");
}
happy("kiran", 21);
*/

/*function isvalidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isvalidEmail("kiran@fake.com"));*/

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
const total = sum(1, 2, 3, 4, 5);
console.log("you are total is", total);
