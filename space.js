const marsCost = 4000;
const moonCost = 5000;
// take tickets amounth
function handleQuantity(planet, operator) {
  let inputText = document.getElementById(planet + "-input").value;
  let quantity = parseInt(inputText);

  if (operator == "plus") {
    quantity += 1;
  } else {
    if (quantity > 0) {
      quantity = quantity - 1;
    }
  }

  //   inputText dia set korle hoi na keno?
  document.getElementById(planet + "-input").value = quantity;
  //   update total cost or both planet
  if (planet == "mars") {
    var marsTotal = quantity;
    calculateJourney("mars", marsTotal);
  } else {
    var moonTotal = quantity;
    calculateJourney("moon", moonTotal);
  }
  updateTotalCost();
}
// calculate journey
function calculateJourney(planet, total) {
  if (planet == "mars") {
    const totalMarsCost = marsCost * total;
    document.getElementById("mars-total").innerText = totalMarsCost;
  } else {
    const totalMoonsAmount = moonCost * total;
    document.getElementById("moon-total").innerText = totalMoonsAmount;
  }
}
//  update total Cost
function updateTotalCost() {
  const moonTotal = document.getElementById("moon-total").innerText;
  const marsTotal = document.getElementById("mars-total").innerText;
  const total = parseFloat(moonTotal) + parseFloat(marsTotal);
  document.getElementById("total-cost").innerText = total;
}
