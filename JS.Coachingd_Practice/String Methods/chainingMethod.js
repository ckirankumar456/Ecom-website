let username = prompt("enter user name: ");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extrachars = username.slice(1);
username = letter + extrachars;
console.log(username);
