/*
fn main() {
    let mut book_title = String::from("Rust Book");
    borrow_book(&book_title);
    // TODO: properly call the function to update the book title
    println!("Updated book title: {}", book_title);
}

fn borrow_book(title: &String) {
    println!("Borrowing book: {}", title);
}

fn update_book_title(title: &mut String) {
    // TODO: Implement the function to update the book title
}
*/

fn main() {
  let mut book_title = String::from("Rust Book");
  borrow_book(&book_title);
  // TODO: properly call the function to update the book title
  update_book_title(&mut book_title);
  println!("Updated book title: {}", book_title);
}

fn borrow_book(title: &String) {
  println!("Borrowing book: {}", title);
}

fn update_book_title(title: &mut String) {
  // TODO: Implement the function to update the book title
  title.push_str(" - Updated");
}