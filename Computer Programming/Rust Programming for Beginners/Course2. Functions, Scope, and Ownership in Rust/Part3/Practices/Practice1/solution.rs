fn buy_apples(apple_count: &mut i32, apples_bought: i32) {
    *apple_count += apples_bought;
}

fn main() {
    let mut my_apple_count = 5; // Starting with 5 apples
    let shopping_cart = &mut my_apple_count;
    buy_apples(shopping_cart, 10); // Buying 10 more apples
    println!("I had {} apples; now I have {}!", 5, my_apple_count);
}