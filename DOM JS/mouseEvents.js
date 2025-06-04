const mybox = document.getElementById("mybox");
// function changeColor(even) {
//   even.target.style.backgroundColor = "yellow";
//   even.target.textContent = "Ouch 🥺!";
// }
// mybox.addEventListener("click", changeColor);

mybox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Ouch 🥺!";
});

// mybox.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "yellow";
//   event.target.textContent = "don't do it 😅";
// });

// mybox.addEventListener("mouseout", (event) => {
//   event.target.style.backgroundColor = "lightgreen";
//   event.target.textContent = "mouse out😊";
// });
