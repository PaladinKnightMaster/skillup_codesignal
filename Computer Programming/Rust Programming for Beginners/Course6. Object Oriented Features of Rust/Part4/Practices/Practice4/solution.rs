// // Define a trait named `Shape`
// trait Shape {
//     fn area(&self) -> f32;
//     fn perimeter(&self) -> f32;
// }

// // Define a struct for `Triangle`
// struct Triangle {
//     base: f32,
//     height: f32,
//     side1: f32,
//     side2: f32,
//     side3: f32,
// }

// // TODO: Implement the Shape trait for the Triangle struct

// // Define a struct for `Rectangle`
// struct Rectangle {
//     length: f32,
//     width: f32,
// }

// // TODO: Implement the Shape trait for the Rectangle struct

// fn main() {
//     let tri = Triangle { base: 10.0, height: 5.0, side1: 10.0, side2: 6.0, side3: 8.0 };
//     println!("Triangle Area: {}", tri.area()); // Expected: Triangle Area: 25.0
//     println!("Triangle Perimeter: {}", tri.perimeter()); // Expected: Triangle Perimeter: 24.0

//     let rect = Rectangle { length: 10.0, width: 5.0 };
//     println!("Rectangle Area: {}", rect.area()); // Expected: Rectangle Area: 50.0
//     println!("Rectangle Perimeter: {}", rect.perimeter()); // Expected: Rectangle Perimeter: 30.0
// }

// Define a trait named `Shape`
trait Shape {
    fn area(&self) -> f32;
    fn perimeter(&self) -> f32;
}

// Define a struct for `Triangle`
struct Triangle {
    base: f32,
    height: f32,
    side1: f32,
    side2: f32,
    side3: f32,
}

// TODO: Implement the Shape trait for the Triangle struct
impl Shape for Triangle {
    fn area(&self) -> f32 {
        0.5 * self.base * self.height
    }

    fn perimeter(&self) -> f32 {
        self.side1 + self.side2 + self.side3
    }
}
// Define a struct for `Rectangle`
struct Rectangle {
    length: f32,
    width: f32,
}

// TODO: Implement the Shape trait for the Rectangle struct
impl Shape for Rectangle {
    fn area(&self) -> f32 {
        self.length * self.width
    }

    fn perimeter(&self) -> f32 {
        2.0 * (self.length + self.width)
    }
}

fn main() {
    let tri = Triangle { base: 10.0, height: 5.0, side1: 10.0, side2: 6.0, side3: 8.0 };
    println!("Triangle Area: {}", tri.area()); // Expected: Triangle Area: 25.0
    println!("Triangle Perimeter: {}", tri.perimeter()); // Expected: Triangle Perimeter: 24.0

    let rect = Rectangle { length: 10.0, width: 5.0 };
    println!("Rectangle Area: {}", rect.area()); // Expected: Rectangle Area: 50.0
    println!("Rectangle Perimeter: {}", rect.perimeter()); // Expected: Rectangle Perimeter: 30.0
}