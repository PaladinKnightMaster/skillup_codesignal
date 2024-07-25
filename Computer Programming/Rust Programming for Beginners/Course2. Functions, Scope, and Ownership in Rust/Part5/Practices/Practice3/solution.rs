/*
fn main() {
    let mut books = String::from("The Rust Book, Rust Programming, Programming in Rust");
    manage_books(books);
    println!("Updated books: {}", books);
}

fn manage_books(book_list: String) {
    book_list.push_str(", The Art of Rust");
}
*/

fn main() {
    let mut books = String::from("The Rust Book, Rust Programming, Programming in Rust");
    manage_books(&mut books);
    println!("Updated books: {}", books);
}

fn manage_books(book_list: &mut String) {
    book_list.push_str(", The Art of Rust");
}