// fn main() {
//     let powers = ["Flight", "Super Strength", "Invisibility", "Telepathy"];

//     // TODO: Create a for loop that prints each power in reverse order
// }

fn main() {
    let powers = ["Flight", "Super Strength", "Invisibility", "Telepathy"];

    // TODO: Create a for loop that prints each power in reverse order
    for i in (0..powers.len()).rev() {
        println!("{}", powers[i]);
    }
}