function rollDice() {
  const numberOfDice = document.getElementById("numberOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const values = [];
  for (let i = 0; i <= numberOfDice; i++) {
    const value = Math.floor(Math.random() * 6 + 1);
    values.push(value);
  }
  diceResult.textContent = "dice: " + values.join(",");
}
