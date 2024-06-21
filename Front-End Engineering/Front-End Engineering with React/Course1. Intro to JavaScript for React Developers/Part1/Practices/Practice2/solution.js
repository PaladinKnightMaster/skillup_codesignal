/*
// JavaScript code to demonstrate destructuring and the spread operator

// Object representing a flyer
const flyer = { type: 'drone', propellers: 4, maxSpeed: '60km/h' };

// Destructure the object to extract maxSpeed and other properties
const { maxSpeed, ...remainingSpecs } = flyer;

// Combine remaining specs with updated speed using spread operator
const updatedFlyer = { ...remainingSpecs, maxSpeed: '80km/h' };

// Display the updated flyer specs in the UI
document.getElementById('flyer-info').textContent = `Updated Drone: Speed: ${updatedFlyer.maxSpeed}, Propellers: ${updatedFlyer.propellers}`;
*/
// JavaScript code to demonstrate destructuring and the spread operator

// Object representing a flyer
const flyer = { type: 'drone', propellers: 4, maxSpeed: '60km/h' };

// Destructure the object to extract maxSpeed and other properties
const { maxSpeed, ...remainingSpecs } = flyer;

// Combine remaining specs with updated speed using spread operator
const updatedFlyer = { ...remainingSpecs, maxSpeed: '120km/h' };

// Display the updated flyer specs in the UI
document.getElementById('flyer-info').textContent = `Updated Drone: Speed: ${updatedFlyer.maxSpeed}, Propellers: ${updatedFlyer.propellers}`;