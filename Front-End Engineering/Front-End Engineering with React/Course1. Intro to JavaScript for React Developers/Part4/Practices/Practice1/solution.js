let orbitCount = 0;
let planetStatus = document.getElementById("planetStatus");

let orbitInterval = setInterval(() => {
  orbitCount++;
  planetStatus.textContent = `The planet has completed ${orbitCount} orbits!`;

  // Stop the planet after 5 orbits
  if (orbitCount >= 5) {
    clearInterval(orbitInterval);
    planetStatus.textContent = `The planet has stopped after ${orbitCount} orbits.`;
  }
}, 1000);