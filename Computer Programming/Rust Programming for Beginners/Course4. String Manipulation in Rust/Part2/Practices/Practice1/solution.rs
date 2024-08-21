fn main() {
    // String Concatenation: push_str
    let mut greeting = String::from("Hello");
    greeting.push_str(" Rust");
    println!("{}", greeting); // Prints: Hello Rust

    let world = String::from(" world!");
    greeting.push_str(&world); // Added reference to make it a valid push_str
    println!("{}", greeting); // Prints: Hello Rust world!

    // String Concatenation: +
    let hello = String::from("Hello, ");
    let rust = "Rust ";
    let explorer = String::from("Explorer!");
    let greeting = hello + &rust + &explorer;
    println!("{}", greeting); // Prints: Hello, Rust Explorer!
    // println!("{}", hello); // Error: `hello` no longer owns "Hello, "

    // Length
    let s1 = String::from("Hello, world!");
    let s2 = "Hello, Explorer!";
    println!("The length of s1 is: {}", s1.len()); // Prints: The length of s1 is: 13
    println!("The length of s2 is: {}", s2.len()); // Prints: The length of s2 is: 16
}