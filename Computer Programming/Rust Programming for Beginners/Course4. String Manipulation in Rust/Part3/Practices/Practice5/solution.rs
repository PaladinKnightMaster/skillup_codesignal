// fn main() {
//     let mut title = String::from("Wonder");
//     // TODO: Call your function
//     println!("{}", title); // Expected: Wonder Woman
// }

// // TODO: Create a function that adds " Woman" to an input String


fn main() {
    let mut title = String::from("Wonder");
    // TODO: Call your function
    add_woman(&mut title);
    println!("{}", title); // Expected: Wonder Woman
}

// TODO: Create a function that adds " Woman" to an input String
fn add_woman(title: &mut String) {
    title.push_str(" Woman");
}