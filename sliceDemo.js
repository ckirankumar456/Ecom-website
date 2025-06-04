const email = "kirankumar123@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));
console.log(username);
console.log(extension);

/*let username = window.prompt("enter user name");
username = username
  .trim()
  .charAt(0)
  .toUpperCase()
  .username.trim.slice(1)
  .toLowercase();
console.log(username);*/
