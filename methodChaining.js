let username = window.prompt("enter your name: ");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();
// username = letter + extrachars;
// console.log(username);

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
