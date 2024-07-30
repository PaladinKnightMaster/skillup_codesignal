// fn main() {
//     let superhero_stats = [String::from("Superman"), String::from("100")];
//     let name = superhero_stats[0]; // Hint: Can we move ownership of non-copy data in arrays?
//     let power_level = superhero_stats[1]; // Hint: Can we move ownership of non-copy data in arrays?

//     println!("Superhero name: {}", superhero_stats[0]);
//     println!("Power level: {}", superhero_stats[1]);
// }

fn main() {
    let superhero_stats = [String::from("Superman"), String::from("100")];
    let name = &superhero_stats[0]; // Hint: Can we move ownership of non-copy data in arrays?
    let power_level = &superhero_stats[1]; // Hint: Can we move ownership of non-copy data in arrays?

    println!("Superhero name: {}", name);
    println!("Power level: {}", power_level);
}