// fn main() {
//     // Find
//     let s = String::from("Spider-Man, Hulk, Thor");

//     // TODO: Use the find method to locate the position of "Hulk"
//     match _____ {
//         _____ => println!("Found 'Hulk' at index: {}", index),
//         _____ => println!("'Hulk' not found")
//     }
// }

fn main() {
    // Find
    let s = String::from("Spider-Man, Hulk, Thor");

    // TODO: Use the find method to locate the position of "Hulk"
    match s.find("Hulk") {
        Some(index) => println!("Found 'Hulk' at index: {}", index),
        None => println!("'Hulk' not found")
    }
}