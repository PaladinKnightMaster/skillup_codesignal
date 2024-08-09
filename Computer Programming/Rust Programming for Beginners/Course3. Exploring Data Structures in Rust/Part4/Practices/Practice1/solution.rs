use std::collections::HashSet;

fn main() {
    // Create new HashSet
    let mut superhero_set: HashSet<&str> = HashSet::new();

    // Add superheroes to HashSet
    superhero_set.insert("Superman");
    superhero_set.insert("Batman");
    superhero_set.insert("Wonder Woman");

    // Remove a superhero from HashSet
    superhero_set.remove("Batman");

    // Check membership in HashSet
    let has_superman = superhero_set.contains("Superman");
    let has_batman = superhero_set.contains("Batman");
    println!("HashSet has Superman: {}, has Batman: {}", has_superman, has_batman);

    // len(), is_empty()
    println!("Length of HashSet: {}", superhero_set.len());
    println!("Is HashSet empty: {}", superhero_set.is_empty());
}