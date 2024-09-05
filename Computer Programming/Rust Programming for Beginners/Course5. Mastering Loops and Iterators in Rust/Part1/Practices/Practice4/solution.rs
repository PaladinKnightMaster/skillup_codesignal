// fn main() {
//     let powers = ["Flight", "Super Strength", "Invisibility", "Telepathy"];

//     // TODO: Create a while loop that prints each power in reverse order
// }

fn main() {
    let powers = ["Flight", "Super Strength", "Invisibility", "Telepathy"];

    // TODO: Create a while loop that prints each power in reverse order
    let mut i = powers.len();
    while i > 0 {
        println!("{}", powers[i - 1]);
        i -= 1;
    }
}