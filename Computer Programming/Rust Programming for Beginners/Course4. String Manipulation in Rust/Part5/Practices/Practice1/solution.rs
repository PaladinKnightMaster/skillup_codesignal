fn main() {
    // Find
    let s = String::from("Wonder Woman, Batman, Iron Man");
    match s.find("Batman") {
        Some(index) => println!("Found 'Batman' at index: {}", index),
        None => println!("'Batman' not found")
    }

    // Contains
    if s.contains("Wonder Woman") {
        println!("The string contains 'Wonder Woman'");
    } else {
        println!("The string does not contain 'Wonder Woman'");
    }

    // Replace
    let new_s = s.replace("Iron Man", "Superman");
    println!("{}", new_s);
}