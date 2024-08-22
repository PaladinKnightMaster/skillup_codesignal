// fn main() {
//     let hero_quote = String::from("I am Iron Man.");
//     // TODO: Call your function to get the quote length and store it in a variable named quote_length
//     let quote_length = get_quote_length(&hero_quote);
//     println!("The length of '{}' is {}", hero_quote, quote_length);

// }

// // TODO: Create a function called get_quote_length that returns the length of a String


fn main() {
    let hero_quote = String::from("I am Iron Man.");
    // TODO: Call your function to get the quote length and store it in a variable named quote_length
    let quote_length = get_quote_length(&hero_quote);
    println!("The length of '{}' is {}", hero_quote, quote_length);

}

// TODO: Create a function called get_quote_length that returns the length of a String
fn get_quote_length(text: &String) -> usize {
    text.len()
}