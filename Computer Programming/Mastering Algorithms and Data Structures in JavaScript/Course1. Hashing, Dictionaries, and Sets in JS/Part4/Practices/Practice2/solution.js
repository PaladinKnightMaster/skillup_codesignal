// let inventory = new Map();

// // Add items with prices
// inventory.set('milk', 1.99);
// inventory.set('bread', 2.49);

// // Update price of bread
// inventory.set('bread', 2.29);

// // TODO: Remove 'milk' from the inventory

// // Check existence of 'bread'
// console.log(inventory.has('bread')); // Outputs: true

let inventory = new Map();

// Add items with prices
inventory.set('milk', 1.99);
inventory.set('bread', 2.49);

// Update price of bread
inventory.set('bread', 2.29);

// TODO: Remove 'milk' from the inventory
inventory.delete('milk');

// Check existence of 'bread'
console.log(inventory.has('bread')); // Outputs: true