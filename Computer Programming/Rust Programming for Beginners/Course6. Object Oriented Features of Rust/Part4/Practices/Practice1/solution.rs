// Define a trait named `Area`
trait Area {
    fn area(&self) -> f32;
}

// Define a struct for `Rectangle`
struct Rectangle {
    width: f32,
    height: f32,
}

// Implement the `Area` trait for `Rectangle`
impl Area for Rectangle {
    fn area(&self) -> f32 {
        self.width * self.height
    }
}

// Define a struct for `Circle`
struct Circle {
    radius: f32,
}

// Implement the `Area` trait for `Circle`
impl Area for Circle {
    fn area(&self) -> f32 {
        3.14159 * self.radius * self.radius
    }
}

fn main() {
    // Create an instance of `Rectangle`
    let rect = Rectangle { width: 10.0, height: 20.0 };
    println!("Rectangle Area: {}", rect.area()); // Prints: Rectangle Area: 200.0

    // Create an instance of `Circle`
    let circ = Circle { radius: 5.0 };
    println!("Circle Area: {}", circ.area()); // Prints: Circle Area: 78.53975
}