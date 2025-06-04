const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const packageData = document.getElementById("PackageData");
const updateData = document.getElementById("updateData");
const todayData = document.getElementById("todayData");
const remainData = document.getElementById("remainData");
function updateclock() {
  const now = new Date();
  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timestring = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  document.getElementById("clock").textContent = timestring;
}
updateclock();
setInterval(updateclock, 1000);
packageData.textContent = data;
todayData.textContent = 1.5 + " GB";
const addData = (remainData.textContent = 1500 - 780 + " MB");
updateData.textContent = addData;
