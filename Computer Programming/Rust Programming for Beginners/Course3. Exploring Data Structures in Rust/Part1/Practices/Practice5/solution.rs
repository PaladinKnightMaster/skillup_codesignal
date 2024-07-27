/*
fn main() {
    let superhero_stats = (String::from("Superman"), 100);
    let (name, power_level) = superhero_stats;

    println!("Superhero name: {}", superhero_stats.0);
    println!("Power level: {}", superhero_stats.1);
}
*/

fn main() {
    let superhero_stats = (String::from("Superman"), 100);

    println!("Superhero name: {}", superhero_stats.0);
    println!("Power level: {}", superhero_stats.1);

    // If needed, you can still destructure after using the tuple.
    let (name, power_level) = superhero_stats;

    // You can now use name and power_level separately.
    println!("Superhero name after destructuring: {}", name);
    println!("Power level after destructuring: {}", power_level);
}
