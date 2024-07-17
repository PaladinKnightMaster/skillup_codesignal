/*
fn main() {
    let rainfall = 4; // Rainfall amount on a scale from 0 to 5

    // Using a match expression to handle actions depending on rainfall level
    match rainfall {
        0 => println!("No umbrella needed, clear skies!"),
        1 => println!("Slight chance of drizzle, carry a pocket umbrella maybe."),
        2 => println!("Moderate rain, don't forget your umbrella!"),
        3 => println!("Heavy rain, make sure to wear waterproof gear!")
    }
}
*/
fn main() {
    let rainfall = 4; // Rainfall amount on a scale from 0 to 5

    // Using a match expression to handle actions depending on rainfall level
    match rainfall {
        0 => println!("No umbrella needed, clear skies!"),
        1 => println!("Slight chance of drizzle, carry a pocket umbrella maybe."),
        2 => println!("Moderate rain, don't forget your umbrella!"),
        3 => println!("Heavy rain, make sure to wear waterproof gear!"),
        _ => println!("Invalid rainfall amount.")
    }
}