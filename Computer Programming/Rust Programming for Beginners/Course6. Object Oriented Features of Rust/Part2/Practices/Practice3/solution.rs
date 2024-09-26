// struct Product {
//     name: String,
//     price: f32,
//     quantity: u32,
// }

// impl Product {

//     // TODO: Implement a method called total_value that returns the total value of the product as a f32.

//     // TODO: Add a method named update_quantity that takes in a quantity (u32) and updates the quantity field

//     // Associated function (constructor)
//     fn new(name: String, price: f32, quantity: u32) -> Product {
//         Product { name: name, price: price, quantity: quantity }
//     }
// }

// fn main() {
//     // Create an instance using the associated function
//     let mut prod = Product::new(String::from("Laptop"), 999.99, 10);

//     // Call methods on the struct
//     println!("Total value: ${}", prod.total_value()); // Expected: Total value: $9999.9
//     prod.update_quantity(15);
//     println!("New total value: ${}", prod.total_value()); // Expected: New total value: $14999.85
// }

struct Product {
    name: String,
    price: f32,
    quantity: u32,
}

impl Product {

    // TODO: Implement a method called total_value that returns the total value of the product as a f32.
    fn total_value(&self) -> f32 {
        self.price * self.quantity as f32
    }
    // TODO: Add a method named update_quantity that takes in a quantity (u32) and updates the quantity field
    fn update_quantity(&mut self, new_quantity: u32) {
        self.quantity = new_quantity;
    }
    // Associated function (constructor)
    fn new(name: String, price: f32, quantity: u32) -> Product {
        Product { name: name, price: price, quantity: quantity }
    }
}

fn main() {
    // Create an instance using the associated function
    let mut prod = Product::new(String::from("Laptop"), 999.99, 10);

    // Call methods on the struct
    println!("Total value: ${}", prod.total_value()); // Expected: Total value: $9999.9
    prod.update_quantity(15);
    println!("New total value: ${}", prod.total_value()); // Expected: New total value: $14999.85
}