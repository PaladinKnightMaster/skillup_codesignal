use std::collections::HashMap;

fn main() {
    // Ownership for HashMap
    let book = String::from("Harry Potter");
    let mut book_map = HashMap::from([("book1", book), ("book2", String::from("Lord of the Rings"))]);
    // println!("{}", book); Causes an error since `book` transferred ownership to `book_map`

    // Hashmaps as function parameters
    let mut book_hashmap = HashMap::new();
    book_hashmap.insert("book3", "Percy Jackson");
    book_hashmap.insert("book4", "Game of Thrones");
    display_book_reference(&book_hashmap);
    println!("After display_book_reference: {:?}", book_hashmap);

    transfer_book_ownership(book_hashmap);
    // println!("After transfer_book_ownership: {:?}", book_hashmap); Causes error
}

fn display_book_reference(map: &HashMap<&str, &str>) {
    println!("Books in map: {:?}", map);
}

fn transfer_book_ownership(map: HashMap<&str, &str>) {
    println!("Transferred books: {:?}", map);
}