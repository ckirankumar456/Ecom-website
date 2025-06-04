const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");
mysubmit.onclick = function () {
  if (mycheckbox.checked) {
    subresult.textContent = "you are subscribed";
  } else {
    subresult.textContent = "your not subscribed";
  }
  if (visaBtn.checked) {
    paymentresult.textContent = "your paying with visa";
  } else if (mastercardBtn.checked) {
    paymentresult.textContent = "your paying with master card ";
  } else if (paypalBtn.checked) {
    paymentresult.textContent = "you are paying with paypal";
  } else {
    paymentresult.textContent = "you select a payment type";
  }
};
