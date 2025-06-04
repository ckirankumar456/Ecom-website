const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentResult = document.getElementById("paymentResult");
mysubmit.onclick = function () {
  if (mycheckbox.checked) {
    subresult.textContent = "you are subscribed";
  } else {
    subresult.textContent = "you are not subscribed";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "you are paying with visa";
  } else if (mastercardBtn.checked) {
    paymentResult.textContent = "you are paying with master card";
  } else if (paypalBtn.checked) {
    paymentResult.textContent = "you are paying with paypal";
  } else {
    paymentResult.textContent = "you must select a payment type";
  }
};
