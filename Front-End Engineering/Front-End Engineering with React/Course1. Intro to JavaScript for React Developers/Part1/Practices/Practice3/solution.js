/*
// JavaScript code with a logic error for array destructuring

// An array of speeds for a spacecraft in km/h
const spacecraftSpeeds = [75000, 90000, 130000, 150000, 170000];

// Using array destructuring to grab only some speeds
// Bug: Incorrectly structured array destructuring
const [firstSpeed, temp, secondSpeed] = spacecraftSpeeds;

// Intent: Update the DOM to show the first two speeds of the spacecraft
document.getElementById('speed-info').textContent = `The first two speeds of the spacecraft are ${firstSpeed} km/h and ${secondSpeed} km/h.`;
*/
// JavaScript code with a logic error for array destructuring

// An array of speeds for a spacecraft in km/h
const spacecraftSpeeds = [75000, 90000, 130000, 150000, 170000];

// Using array destructuring to grab only some speeds
// Bug: Incorrectly structured array destructuring
const [firstSpeed, secondSpeed, ...temp] = spacecraftSpeeds;

// Intent: Update the DOM to show the first two speeds of the spacecraft
document.getElementById('speed-info').textContent = `The first two speeds of the spacecraft are ${firstSpeed} km/h and ${secondSpeed} km/h.`;