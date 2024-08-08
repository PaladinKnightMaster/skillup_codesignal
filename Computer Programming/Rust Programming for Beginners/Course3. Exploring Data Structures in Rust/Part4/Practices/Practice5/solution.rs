// use std::collections::HashSet;

// fn main() {
//     // TODO: Create a new HashSet for city names

//     // TODO: Add "Gotham", "Metropolis", and "Central City" to the HashSet

//     // TODO: Call the display_cities function without transferring ownership

//     // TODO: Print out the cities to confirm ownership was not transferred
// }

// // TODO: Write a function display_cities that prints out each city without taking ownership

use std::collections::HashSet;

fn main() {
    // TODO: Create a new HashSet for city names
    let mut cities: HashSet<String> = HashSet::new();
    // TODO: Add "Gotham", "Metropolis", and "Central City" to the HashSet
    cities.insert("Gotham".to_string());
    cities.insert("Metropolis".to_string());
    cities.insert("Central City".to_string());
    // TODO: Call the display_cities function without transferring ownership
    display_cities(&cities);
    // TODO: Print out the cities to confirm ownership was not transferred
    println!("{:?}", cities);
}

// TODO: Write a function display_cities that prints out each city without taking ownership
fn display_cities(cities: &HashSet<String>) {
    for city in cities {
        println!("{}", city);
    }
}
