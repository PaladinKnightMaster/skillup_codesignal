fn main() {
    let book_title = String::from("Rust Programming for Beginners");
    let book_title = create_book_title(book_title); // Ownership transferred here
    println!("The book's title is: {}", book_title); // Ownership is used here
}

fn create_book_title(title: String) -> String {
    title // Ownership is returned to the main function
}