use std::collections::HashMap;

fn main() {
    // Create a new hashmap
    let mut superhero_powers: HashMap<&str, &str> = HashMap::new();

    // Add elements
    superhero_powers.insert("Superman", "Super Strength");
    superhero_powers.insert("Batman", "High Intelligence");
    superhero_powers.insert("Flash", "Super Speed");

    // Access values
    let power = superhero_powers.get("Batman");
    println!("Batman's power: {:?}", power);

    // Remove elements
    superhero_powers.remove("Batman");

    // Modify an element
    if let Some(entry) = superhero_powers.get_mut("Flash") {
        *entry = "Time Travel";
    }

    // Check if key exists
    let has_superman = superhero_powers.contains_key(&"Superman");
    let has_batman = superhero_powers.contains_key(&"Batman");
    println!("Contains Superman: {}, Contains Batman: {}", has_superman, has_batman);
}