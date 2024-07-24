/*
fn main() {
    let book_title = String::from("The Little Prince");
    // TODO: Transfer the ownership of book_title to a function that logs the book's title
}

fn library_log_book(title: String) {
    // TODO: Implement the body to print the title of the book as "A new book added: [book_title]"
}
*/

fn main() {
  let book_title = String::from("The Little Prince");
  // TODO: Transfer the ownership of book_title to a function that logs the book's title

  library_log_book(book_title);
}

fn library_log_book(title: String) {
  // TODO: Implement the body to print the title of the book as "A new book added: [book_title]"

  println!("A new book added: {}", title);
}