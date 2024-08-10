// let fruitInventory = new Map();

// // TODO: Add oranges to the inventory with a quantity of 150

// // TODO: Add lemons to the inventory with a quantity of 80

// // TODO: Update the quantity of oranges after a customer buys 20

// // TODO: Log the updated quantity of oranges to the console

let fruitInventory = new Map();

// TODO: Add oranges to the inventory with a quantity of 150
fruitInventory.set('oranges', 150);
// TODO: Add lemons to the inventory with a quantity of 80
fruitInventory.set('lemons', 80);
// TODO: Update the quantity of oranges after a customer buys 20
fruitInventory.set('oranges', fruitInventory.get('oranges') - 20);
// TODO: Log the updated quantity of oranges to the console
console.log(fruitInventory.get('oranges'))