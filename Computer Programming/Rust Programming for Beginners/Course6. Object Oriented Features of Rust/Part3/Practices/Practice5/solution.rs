// // TODO: Create a module named game

// // TODO: Create a struct named GameCharacter with public field "name" (String), public field "health" (u32), and private field "inventory" (u32)

// // TODO: Add a constructor that returns a GameCharacter instance

// // TODO: Create a public add_item method that takes in a quantity (u32)
//     // If adding the quantity to inventory exceeds 50, print "Inventory Full"
//     // If there is room in the inventory, add quantity to the inventory field

// // TODO: Create a public get_inventory method that returns the current inventory


// fn main() {
//     // TODO: Create an instance of GameCharacter with name "Cosmo", health 100, and inventory 0

//     // TODO: Change the character name to Hero and print the updated name

//     // TODO: Print the current inventory

//     // TODO: Call add_item, ensuring that inventory size does not exceed 50

//     // TODO: Print the current inventory

//     // TODO: Call add_item with a quantity that exceeds the inventory limit

//     // TODO: Print the characters current health

//     // TODO: The character takes 10 damage. Update the characters health accordingly

//     // TODO: Print the new health

// }

// Create a module named game
mod game {
    // Create a struct named GameCharacter with public fields "name" and "health", and a private field "inventory"
    pub struct GameCharacter {
        pub name: String,
        pub health: u32,
        inventory: u32,
    }

    // Implement methods for GameCharacter
    impl GameCharacter {
        // Constructor to create a new GameCharacter instance
        pub fn new(name: String, health: u32) -> GameCharacter {
            GameCharacter {
                name,
                health,
                inventory: 0, // Start with an empty inventory
            }
        }

        // Public method to add items to the inventory
        pub fn add_item(&mut self, quantity: u32) {
            if self.inventory + quantity > 50 {
                println!("Inventory Full");
            } else {
                self.inventory += quantity;
                println!("Added {} items to inventory.", quantity);
            }
        }

        // Public method to get the current inventory
        pub fn get_inventory(&self) -> u32 {
            self.inventory
        }
    }
}

fn main() {
    // Create an instance of GameCharacter with name "Cosmo", health 100, and inventory 0
    let mut character = game::GameCharacter::new(String::from("Cosmo"), 100);

    // Change the character name to Hero and print the updated name
    character.name = String::from("Hero");
    println!("Character name: {}", character.name);

    // Print the current inventory
    println!("Current inventory: {}", character.get_inventory());

    // Call add_item, ensuring that inventory size does not exceed 50
    character.add_item(20);

    // Print the current inventory
    println!("Current inventory after adding items: {}", character.get_inventory());

    // Call add_item with a quantity that exceeds the inventory limit
    character.add_item(40);

    // Print the character's current health
    println!("Character's health: {}", character.health);

    // The character takes 10 damage. Update the character's health accordingly
    character.health -= 10;

    // Print the new health
    println!("Character's new health: {}", character.health);
}
