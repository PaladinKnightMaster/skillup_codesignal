/*
fn main() {
    let books_counted: i32 = 17;
    let magazines_counted: i32 = 3;
    let research_papers_found: bool = false;

    // TODO: Calculate the total number of items in our library.
    let total_items = /* your code here */;
    println!("Total items in the library: {}", total_items);

    // TODO: Use a logical AND operation to check if:
    println!("Found more than 15 books and research papers: {}", /* your code here */);
}
*/
fn main() {
    let books_counted: i32 = 17;
    let magazines_counted: i32 = 3;
    let research_papers_found: bool = false;

    // TODO: Calculate the total number of items in our library.
    let total_items = books_counted + magazines_counted /* your code here */;
    println!("Total items in the library: {}", total_items);

    // TODO: Use a logical AND operation to check if:
    println!("Found more than 15 books and research papers: {}", books_counted > 15 && research_papers_found /* your code here */);
}