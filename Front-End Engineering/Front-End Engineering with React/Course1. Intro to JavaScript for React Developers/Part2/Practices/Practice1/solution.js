let isPlanet = false, hasRings = true;
let message = isPlanet && hasRings ? 'This is a ringed planet.' : 'This is not a planet or it has no rings.';
document.getElementById('spaceMessage').textContent = message;