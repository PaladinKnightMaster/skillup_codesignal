let inventory = new Set(); // Keeps track of unique items

inventory.add("diamond necklace");
inventory.add("gold watch");
inventory.add("pearl earrings");

console.log(inventory.has("diamond necklace")); // Should log 'true'