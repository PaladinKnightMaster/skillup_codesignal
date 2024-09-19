// fn main() {
//     let aliases = ["Peter", "Tony", "Bruce"];

//     // TODO: Iterate through the aliases
//     // TODO: For each alias, print it character by character
// }

fn main() {
    let aliases = ["Peter", "Tony", "Bruce"];

    // TODO: Iterate through the aliases
    // TODO: For each alias, print it character by character
    for alias in aliases {
        for ch in alias.chars() {
            print!("{}", ch);
        }
        println!();
    }
}