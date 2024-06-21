// JavaScript code demonstrating ES6 destructuring and the spread operator for object updates

// Vehicle object before the update
const vehicle = { type: 'car', wheels: 4, color: 'blue' };

// Destructuring the object to extract color and rest of the properties
const { color, ...rest } = vehicle;

// Creating a new object with the spread operator to include all original properties except color
const updatedVehicle = { ...rest, color: 'red' };

document.getElementById('vehicle-info').textContent = `Updated Car: ${updatedVehicle.color}, Wheels: ${updatedVehicle.wheels}`;