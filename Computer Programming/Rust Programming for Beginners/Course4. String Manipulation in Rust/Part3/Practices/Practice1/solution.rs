fn main() {
    // Functions: Transferring Ownership
    let villain = String::from("Joker");
    takes_control(villain); // villain is moved here and can no longer be used
    // println!("{}", villain); // Error

    // Functions: Passing References
    let hero_quote = String::from("With great power...");
    let quote_len = get_length(&hero_quote);
    println!("The length of the quote {} is {}", hero_quote, quote_len);

    // Functions: Passing Mutable References
    let mut hero_title = String::from("Super");
    add_word(&mut hero_title);
    println!("{}", hero_title); // Prints: Super Hero
}

fn takes_control(character: String) {
    println!("Taking control of: {}", character);
}

fn get_length(text: &String) -> usize {
    text.len()
}

fn add_word(word: &mut String) {
    let addition = " Hero";
    word.push_str(addition);
}