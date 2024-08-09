// use std::collections::HashMap;

// fn main() {
//     // Create a new hashmap
//     let mut hero_map: HashMap<&str, &str> = HashMap::new();

//     // Add elements
//     // TODO: Add "Thor" with the power "Thunder God"
//     // TODO: Add "Iron Man" with the power "Genius Inventor"
//     // TODO: Add "Hulk" with the power "Strength"

//     // Access values
//     // TODO: Access the power of "Iron Man" and store it in a variable
//     // TODO: Print the power of Iron Man using the variable
// }

use std::collections::HashMap;

fn main() {
    // Create a new hashmap
    let mut hero_map: HashMap<&str, &str> = HashMap::new();

    // Add elements
    // TODO: Add "Thor" with the power "Thunder God"
    // TODO: Add "Iron Man" with the power "Genius Inventor"
    // TODO: Add "Hulk" with the power "Strength"
    hero_map.insert("Thor", "Thunder God");
    hero_map.insert("Iron Man", "Genius Inventor");
    hero_map.insert("Hulk", "Strength");

    // Access values
    // TODO: Access the power of "Iron Man" and store it in a variable
    // TODO: Print the power of Iron Man using the variable

    let power = hero_map.get("Iron Man");
    println!("Iron Man's power: {:?}", power);
}