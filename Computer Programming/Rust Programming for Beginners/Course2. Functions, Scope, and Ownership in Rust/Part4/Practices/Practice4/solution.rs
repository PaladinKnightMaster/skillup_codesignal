/*
fn main() {
    let is_available = String::from("true"); // Hint: Should this variable be a copy or non-copy data type?
    let in_stock = is_available;
    println!("Book status: Available - {}, In stock: - {}", is_available, in_stock);
}
*/

fn main() {
    let is_available = true; // Hint: Should this variable be a copy or non-copy data type?
    let in_stock = is_available;
    println!("Book status: Available - {}, In stock: - {}", is_available, in_stock);
}