// fn main() {
//     let names = ["Batman", "Joker", "Spiderman", "Venom", "Ironman", "Thanos"];

//     // TODO: Write a for loop that skips printing the name of villains using continue
//     // Note: Villains are located at odd indices in the array

// }

fn main() {
    let names = ["Batman", "Joker", "Spiderman", "Venom", "Ironman", "Thanos"];

    // TODO: Write a for loop that skips printing the name of villains using continue
    // Note: Villains are located at odd indices in the array

    for (i, name) in names.iter().enumerate() {
        if i % 2 == 0 {
            continue;
        }
        println!("{}", name);
    }
}