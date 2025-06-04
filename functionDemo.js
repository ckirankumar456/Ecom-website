function isvalidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}
console.log(isvalidEmail("kirankumar223@gmail.com"));
