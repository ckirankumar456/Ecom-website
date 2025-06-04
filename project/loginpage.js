const phonenumber = document.getElementById("phonenumber");
const email_id = document.getElementById("email_id");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const forgotpassword = document.getElementById("forgotpassword");
function validate() {
  if (username.length == 0 || username == "") {
    const username = document.getElementById("username");
    username.textContent = "please check your name";
  }
}
