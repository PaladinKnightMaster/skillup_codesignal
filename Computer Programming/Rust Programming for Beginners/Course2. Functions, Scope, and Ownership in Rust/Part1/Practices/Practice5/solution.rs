/*
fn calculate_total_price(item_count: i32, price_per_item: i32) -> i32 {
    // TODO: Implement the calculation for the total price using item_count and price_per_item
}

fn main() {
    let pies_count = 3;
    let price_per_pie = 15;
    // TODO: Call your function here to calculate the total price for pies, given the quantity and price per pie.
    println!("Total price for pies: ${}", pies_price);
}
*/
fn calculate_total_price(item_count: i32, price_per_item: i32) -> i32 {
    // TODO: Implement the calculation for the total price using item_count and price_per_item
    return item_count * price_per_item;
}

fn main() {
    let pies_count = 3;
    let price_per_pie = 15;
    // TODO: Call your function here to calculate the total price for pies, given the quantity and price per pie.
    let pies_price = calculate_total_price(pies_count, price_per_pie);
    println!("Total price for pies: ${}", pies_price);
}
