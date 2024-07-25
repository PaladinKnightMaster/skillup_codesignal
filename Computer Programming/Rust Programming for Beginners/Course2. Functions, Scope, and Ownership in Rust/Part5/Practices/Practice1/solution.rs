fn main() {
    let book_title = String::from("Rust Programming Basics");

    borrow_book(&book_title);  // Borrow the title without transferring ownership
    println!("The library still owns: {}", book_title);  // Ownership of book_title remains with the library

    let mut mutable_title = String::from("Learn ");
    edit_title(&mut mutable_title);  // Mutably borrow to modify the title
    println!("Updated title: {}", mutable_title); // The modified title
}

fn borrow_book(title: &String) {
    println!("Currently borrowed: {}", title);  // Just borrowing, nothing modified
}

fn edit_title(title: &mut String) {
    title.push_str("Rust Programming");  // Modify the title by appending to it
}