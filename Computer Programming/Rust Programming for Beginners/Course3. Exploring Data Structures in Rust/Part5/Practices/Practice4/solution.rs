// use std::collections::HashMap;

// fn main() {
//     let mut hero_scores: HashMap<&str, i32> = HashMap::new();

//     hero_scores.insert("Iron Man", 85);
//     hero_scores.insert("Captain America", 90);

//     // Change elements
//     if let Some(entry) = hero_scores.get_mut("Captain America") {
//         entry = 95;
//     }

//     // Access values
//     let score = hero_scores.get(&"Captain America");
//     println!("Captain America's score: {:?}", score);
// }

use std::collections::HashMap;

fn main() {
    let mut hero_scores: HashMap<&str, i32> = HashMap::new();

    hero_scores.insert("Iron Man", 85);
    hero_scores.insert("Captain America", 90);

    // Change elements
    if let Some(entry) = hero_scores.get_mut("Captain America") {
        *entry = 95; // Update the value
    }

    // Access values
    let score = hero_scores.get("Captain America");
    println!("Captain America's score: {:?}", score);
}
