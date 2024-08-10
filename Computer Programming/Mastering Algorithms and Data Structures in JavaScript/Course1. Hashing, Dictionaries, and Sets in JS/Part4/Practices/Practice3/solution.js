// let inventory = new Map();

// // Initialize inventory
// inventory.set('milk', 50);      // Adds 'milk' with quantity 50 to the inventory
// // TODO: Add a new item named 'bread' and its quantity to the inventory
// // TODO: print the quantity of milk
// // TODO: Print the total number of items in the inventory
// inventory.delete('bread');           // Removes 'bread' from the inventory
// // TODO: Print the total number of items in the inventory again

let inventory = new Map();

// Initialize inventory
inventory.set('milk', 50);      // Adds 'milk' with quantity 50 to the inventory
// TODO: Add a new item named 'bread' and its quantity to the inventory
inventory.set('bread', 30);
// TODO: print the quantity of milk
console.log(inventory.get('milk'));
// TODO: Print the total number of items in the inventory
console.log(inventory.size);
inventory.delete('bread');           // Removes 'bread' from the inventory
// TODO: Print the total number of items in the inventory again
console.log(inventory.size);