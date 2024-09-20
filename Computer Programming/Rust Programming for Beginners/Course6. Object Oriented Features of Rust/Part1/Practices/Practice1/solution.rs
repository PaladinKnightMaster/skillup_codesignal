// Defining a struct
struct Book {
    title: String,
    author: String,
    pages: u32,
}

fn main() {
    // Instantiate a struct
    let book1 = Book {
        title: String::from("Rust Programming"),
        author: String::from("John Doe"),
        pages: 250,
    };

    // Accessing fields
    println!("Title: {}", book1.title); // Prints: Title: Rust Programming
    println!("Author: {}", book1.author); // Prints: Author: John Doe
    println!("Pages: {}", book1.pages); // Prints: Pages: 250

    // Mutating Struct Field
    let mut book2 = Book {
        title: String::from("Rust for Beginners"),
        author: String::from("John Doe"),
        pages: 300,
    };

    book2.author = String::from("Cosmo");
    println!("Book 2 Author: {}", book2.author); // Prints: Book 2 Author: Cosmo
}