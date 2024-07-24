/*
// TODO: Define a function `lend_book` that takes ownership of a book and prints a message "{Book title} is being read by a friend". It should then return ownership.


fn main() {
    // TODO: Create a `String` variable with a book title.

    // TODO: Pass ownership of the book to `lend_book` and retrieve it back.

    // TODO: Print a message "My friend has finished reading {Book title}"
}
*/

// TODO: Define a function `lend_book` that takes ownership of a book and prints a message "{Book title} is being read by a friend". It should then return ownership.
fn lend_book(book_title: String) -> String {
    println!("{} is being read by a friend", book_title);
    book_title
}

fn main() {
    // TODO: Create a `String` variable with a book title.

    let book_title = String::from("The Little Prince");

    // TODO: Pass ownership of the book to `lend_book` and retrieve it back.

    let book_title = lend_book(book_title);

    // TODO: Print a message "My friend has finished reading {Book title}"

    println!("My friend has finished reading {}", book_title);
}