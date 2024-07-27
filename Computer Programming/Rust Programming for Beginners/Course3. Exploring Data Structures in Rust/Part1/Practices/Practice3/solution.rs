/*
fn main() {
    let ages = (18, 21, 45);
    // TODO: Access the first element of the `ages` tuple and assign it to `first_age` using dot notation
    let first_age = ____;
    // TODO: Access the third element of the `ages` tuple and assign it to `last_age` using dot notation
    let last_age = ____;

    println!("First age: {}", first_age);
    println!("Last age: {}", last_age);
}
*/

fn main() {
    let ages = (18, 21, 45);
    // TODO: Access the first element of the `ages` tuple and assign it to `first_age` using dot notation
    let first_age = ages.0;
    // TODO: Access the third element of the `ages` tuple and assign it to `last_age` using dot notation
    let last_age = ages.2;

    println!("First age: {}", first_age);
    println!("Last age: {}", last_age);
}