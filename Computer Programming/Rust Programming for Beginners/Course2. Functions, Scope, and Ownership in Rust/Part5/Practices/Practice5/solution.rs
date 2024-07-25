/*
// TODO: Write a function that takes a reference to a String and prints it

fn main() {
    // TODO: Create a new String variable named book_title
    // TODO: Borrow the book_title using the function
    // TODO: Print the book_title to show that ownership is retained
}
*/

// TODO: Write a function that takes a reference to a String and prints it
fn print_title(title: &String) {
    println!("{}", title);
}

fn main() {
    // TODO: Create a new String variable named book_title
    let book_title = String::from("The Art of Rust");
    // TODO: Borrow the book_title using the function
    print_title(&book_title);
    // TODO: Print the book_title to show that ownership is retained
    println!("{}", book_title);
}