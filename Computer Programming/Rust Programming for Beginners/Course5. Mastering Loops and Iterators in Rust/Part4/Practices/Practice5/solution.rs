// fn main() {
//     let speech = "With great power...";

//     // TODO: Iterae over the speech to print each character with its index

// }

fn main() {
    let speech = "With great power...";

    // TODO: Iterae over the speech to print each character with its index
    for (index, ch) in speech.chars().enumerate() {
        println!("Index: {}, Char: {}", index, ch);
    }
}