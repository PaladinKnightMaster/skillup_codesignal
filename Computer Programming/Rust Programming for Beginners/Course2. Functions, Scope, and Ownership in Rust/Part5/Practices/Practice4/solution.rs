/*
fn main() {
    let book_title = get_book_title();
    println!("{}", book_title);
}

fn get_book_title() -> &String {
    let book = String::from("Rust Book");
    &book
}
*/

fn main() {
    let book_title = get_book_title();
    println!("{}", book_title);
}

fn get_book_title() -> String {
    let book = String::from("Rust Book");
    book
}