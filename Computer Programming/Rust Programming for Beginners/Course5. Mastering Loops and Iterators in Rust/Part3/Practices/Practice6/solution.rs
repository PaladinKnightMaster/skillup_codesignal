// fn main() {
//     let characters = ["Superman", "Lex Luthor", "Wonder Woman", "Cheetah", "Flash", "Reverse Flash"];

//     // TODO: Use a while loop to iterate over the array and print if the character is a hero (even index) or a villain (odd index)
// }

fn main() {
    let characters = ["Superman", "Lex Luthor", "Wonder Woman", "Cheetah", "Flash", "Reverse Flash"];

    // TODO: Use a while loop to iterate over the array and print if the character is a hero (even index) or a villain (odd index)

    let mut i = 0;
    while i < characters.len() {
        if i % 2 == 0 {
            println!("Hero: {}", characters[i]);
        } else {
            println!("Villain: {}", characters[i]);
        }
        i += 1;
    }
}