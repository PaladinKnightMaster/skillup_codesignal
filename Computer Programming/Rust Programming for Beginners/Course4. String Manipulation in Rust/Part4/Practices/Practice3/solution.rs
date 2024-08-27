// fn main() {
//     let message = String::from("WELCOME BACK, HERO!");
//     // TODO: Convert the string `message` to all lowercase
//     println!("{}", lower_message);  // Expected: "welcome back, hero!"

//     let greeting = String::from("welcome to the team!");
//     // TODO: Convert the string `greeting` to all uppercase
//     println!("{}", upper_greeting);  // Expected: "WELCOME TO THE TEAM!"

//     let announcement = String::from("   New mission assigned!   ");
//     // TODO: Remove all whitespace from the string
//     println!("'{}'", trimmed_announcement);  // Expected: "'New mission assigned!'"
// }

fn main() {
    let message = String::from("WELCOME BACK, HERO!");
    // TODO: Convert the string `message` to all lowercase
    let lower_message = message.to_lowercase();
    println!("{}", lower_message);  // Expected: "welcome back, hero!"

    let greeting = String::from("welcome to the team!");
    // TODO: Convert the string `greeting` to all uppercase
    let upper_greeting = greeting.to_uppercase();
    println!("{}", upper_greeting);  // Expected: "WELCOME TO THE TEAM!"

    let announcement = String::from("   New mission assigned!   ");
    // TODO: Remove all whitespace from the string
    let trimmed_announcement = announcement.trim();
    println!("'{}'", trimmed_announcement);  // Expected: "'New mission assigned!'"
}