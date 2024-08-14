// function getTotalQuantity(inventory) {
//     // implement this
// }

// let inventory = new Map();
// inventory.set("Apples", 50);
// inventory.set("Bananas", 100);
// inventory.set("Oranges", 75);

// console.log(getTotalQuantity(inventory)); // It will log 225

function getTotalQuantity(inventory) {
    // implement this
    let total = 0;
    for (const [_, value] of inventory) {
        total += value;
    }
    return total;
}

let inventory = new Map();
inventory.set("Apples", 50);
inventory.set("Bananas", 100);
inventory.set("Oranges", 75);

console.log(getTotalQuantity(inventory)); // It will log 225