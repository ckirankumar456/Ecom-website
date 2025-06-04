// let username = " ";
// while (username === " " || username === null) {
//   username = window.prompt("enter any number: ");
// }
// console.log(`hello ${username}`);

let loggedin = false;
let myusername = "kiran kumar";
let mypassword = "kiran123";

while (!loggedin) {
  let username = window.prompt("enter username : ");
  let password = window.prompt("enter password: ");

  if (username === myusername && password === mypassword) {
    console.log("your logged in!");
  } else {
    console.log("invalid credenstial please again");
  }
}
