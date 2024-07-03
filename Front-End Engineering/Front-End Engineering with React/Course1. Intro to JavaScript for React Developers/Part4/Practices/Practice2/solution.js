/*
let spinCount = 0;
let spinStatus = document.getElementById("spinStatus");

// Start the cosmos spinning every 3 seconds
let spinInterval = setInterval(() => {
  spinCount++;
  spinStatus.textContent = `The cosmos has spun ${spinCount} times!`;

  // Stop spinning after 3 spins
  if (spinCount >= 3) {
    clearInterval(spinInterval);
    spinStatus.textContent = `The cosmos has stopped spinning after ${spinCount} spins.`;
  }
}, 3000);
*/
let spinCount = 0;
let spinStatus = document.getElementById("spinStatus");

// Start the cosmos spinning every 3 seconds
let spinInterval = setInterval(() => {
  spinCount++;
  spinStatus.textContent = `The cosmos has spun ${spinCount} times!`;

  // Stop spinning after 3 spins
  if (spinCount >= 3) {
    clearInterval(spinInterval);
    spinStatus.textContent = `The cosmos has stopped spinning after ${spinCount} spins.`;
  }
}, 2000);