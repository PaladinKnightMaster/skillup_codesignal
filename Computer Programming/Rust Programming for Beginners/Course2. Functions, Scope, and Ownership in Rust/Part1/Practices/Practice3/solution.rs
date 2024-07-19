/*
// TODO: Add a parameter for number of candles. What should the data type be?
fn bake_cake(cake_type: &str) {
    println!("Baking a {} cake.", cake_type);
}

fn main() {
    bake_cake("chocolate"); // Expected output: "Baking a chocolate cake with 3 candles."
}
*/
// TODO: Add a parameter for number of candles. What should the data type be?
fn bake_cake(cake_type: &str, candles: i32) {
    println!("Baking a {} cake with {} candles.", cake_type, candles);
}

fn main() {
    bake_cake("chocolate",3); // Expected output: "Baking a chocolate cake with 3 candles."
}