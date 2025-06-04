/*let username = "";
while (username === "" || username === null) {
  username = window.prompt("enter your name");
}
console.log("hello " + username);*/

let loggedin = true;
let username;
let password;
while (!loggedin) {
  username = window.prompt("enter user name");
  password = window.prompt("enter user password");
  if (username === "myusername" && password === "mypassword") {
    loggedin = true;
    console.log("you are logged in");
  } else {
    console.log("invalid credantial please again");
  }
}
