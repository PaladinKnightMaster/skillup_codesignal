let inventory = new Map();

inventory.set('milk', 50);
inventory.set('bread', 30);

console.log(inventory.get('milk'));
inventory.delete('bread');
console.log(inventory.size);