const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = parseInt(document.getElementById("value1").value);
  const b = parseInt(document.getElementById("value2").value);
  let c = a + b;
  alert("sum : " + c);
});
