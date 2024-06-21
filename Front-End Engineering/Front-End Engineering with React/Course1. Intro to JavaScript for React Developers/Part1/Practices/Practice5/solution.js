/*
// TODO: Declare an array with 'Car', 'Truck', 'Bike' as vehicle types

// TODO: Use array destructuring to separate the first vehicle from the others

// TODO: Use the spread operator to add a 'Spaceship' to the array of other vehicles

// Display the updated list of vehicles in the fleet on UI
// You should get 'Truck', 'Bike', and 'Spaceship' there
document.getElementById('fleet-info').textContent = `The expanded vehicle fleet: ${expandedVehicles.join(', ')}.`;
*/
// Declare an array with 'Car', 'Truck', 'Bike' as vehicle types
const vehicles = ['Car', 'Truck', 'Bike'];

// Use array destructuring to separate the first vehicle from the others
const [firstVehicle, ...otherVehicles] = vehicles;

// Use the spread operator to add a 'Spaceship' to the array of other vehicles
const expandedVehicles = [...otherVehicles, 'Spaceship'];

// Display the updated list of vehicles in the fleet on UI
// You should get 'Truck', 'Bike', and 'Spaceship' there
document.getElementById('fleet-info').textContent = `The expanded vehicle fleet: ${expandedVehicles.join(', ')}.`;
