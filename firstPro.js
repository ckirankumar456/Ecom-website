const myBox = document.getElementById("myBox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", (event) => {
  event.target.backgroundImage = "animal1.jpg";
});
