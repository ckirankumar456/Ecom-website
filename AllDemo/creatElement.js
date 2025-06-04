const newH1 = document.createElement("h1");
newH1.textContent = "Kiran Kumar";
// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box2").append(newH1);
// document.getElementById("box1").prepend(newH1);
// newH1.style.textAlign = "center";
// newH1.style.color = "blue";

/*const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
newH1.style.textAlign = "center";
newH1.style.color = "blue";
*/

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);
newH1.style.color = "green";
newH1.style.textAlign = "center";
