let username;
document.getElementById("mysubmit").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("myh1").textContent = "hello " + username;
  console.log(username);
};
