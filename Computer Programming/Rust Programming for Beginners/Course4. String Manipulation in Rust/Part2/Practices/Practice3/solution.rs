// fn main() {
//     let mut intro = String::from("Hi, ");
//     // TODO: Using push_str, append the string literal "there"
//     println!("{}", intro); // Expected: Hi, there

//     let rustacean = String::from("Rustacean!");
//     // TODO: Using push_str, append rustacean to intro
//     println!("{}", intro); // Expected: Hi, there Rustacean!
//     // TODO: Print the length of intro

//     let beginning = String::from("Hello ");
//     let middle = "dear ";
//     let ending = String::from("friend.");
//     // TODO: Combine strings using +
//     let welcome = _______;
//     println!("{}", welcome); // Expected: Hello dear friend.
//     // TODO: Print the length of welcome
// }

fn main() {
    let mut intro = String::from("Hi, ");
    // TODO: Using push_str, append the string literal "there"
    intro.push_str("there");
    println!("{}", intro); // Expected: Hi, there

    let rustacean = String::from("Rustacean!");
    // TODO: Using push_str, append rustacean to intro
    intro.push_str(&rustacean);
    println!("{}", intro); // Expected: Hi, there Rustacean!
    // TODO: Print the length of intro
    println!("{}", intro.len());

    let beginning = String::from("Hello ");
    let middle = "dear ";
    let ending = String::from("friend.");
    // TODO: Combine strings using +
    let welcome = beginning + &middle + &ending;
    println!("{}", welcome); // Expected: Hello dear friend.
    // TODO: Print the length of welcome
    println!("{}", welcome.len());
}