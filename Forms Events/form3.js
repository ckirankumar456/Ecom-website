const username = document.getElementById("username");
const output = document.getElementById("output");

username.addEventListener("input", function () {
  output.textContent = username.value;
});
