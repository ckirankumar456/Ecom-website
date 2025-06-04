document.title = "my Website";
document.body.style.backgroundColor = "blue";
console.dir(document);

const usernmame = " kiran kumar";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += usernmame === "" ? "guest" : usernmame;
