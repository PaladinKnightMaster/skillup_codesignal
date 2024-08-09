// use std::collections::HashSet;

// fn main() {
//     // Create new HashSet
//     let mut superhero_set: HashSet<&str> = HashSet::new();

//     // TODO: Add values "Iron Man," "Thor," and "Black Widow" to the HashSet

//     // TODO: Remove "Thor" from the HashSet

//     // TODO: Check for membership of "Iron Man" and "Thor" and print the results

//     // TODO: Print the length of the HashSet

//     // TODO: Check if the HashSet is empty and print the result
// }

use std::collections::HashSet;

fn main() {
    // Create new HashSet
    let mut superhero_set: HashSet<&str> = HashSet::new();

    // TODO: Add values "Iron Man," "Thor," and "Black Widow" to the HashSet
    superhero_set.insert("Iron Man");
    superhero_set.insert("Thor");
    superhero_set.insert("Black Widow");
    // TODO: Remove "Thor" from the HashSet
    superhero_set.remove("Thor");
    // TODO: Check for membership of "Iron Man" and "Thor" and print the results
    let has_iron_man = superhero_set.contains("Iron Man");
    let has_thor = superhero_set.contains("Thor");
    println!("Iron Man present: {}. Thor present: {}", has_iron_man, has_thor);
    // TODO: Print the length of the HashSet
    println!("Length of the HashSet: {}", superhero_set.len());
    // TODO: Check if the HashSet is empty and print the result
    let is_empty = superhero_set.is_empty();
    println!("Is the HashSet empty? {}", is_empty);
}