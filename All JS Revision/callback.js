namePrint(displayName, "kiran", "kumar");
function namePrint(callback, firstName, lastName) {
  let fullName = firstName + lastName;
  return callback(fullName);
}
function displayName(fullName) {
  console.log(fullName);
}
