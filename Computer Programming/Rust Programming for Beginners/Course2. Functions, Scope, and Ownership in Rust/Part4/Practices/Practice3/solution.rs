/*
fn main() {
    let book1 = String::from("Rust Programming for Beginners");
    let book2 = check_title(book1); // Transfer ownership from book1 to book2

    println!("Book Title: {}", book1); // Hint: What variable owns the actual value?
}

fn check_title(book_title: String) -> String {
    book_title
}
*/

fn main() {
    let book1 = String::from("Rust Programming for Beginners");
    let book2 = check_title(book1); // Transfer ownership from book1 to book2

    println!("Book Title: {}", book2); // Hint: What variable owns the actual value?
}

fn check_title(book_title: String) -> String {
    book_title
}