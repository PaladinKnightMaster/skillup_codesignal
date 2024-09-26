// // Define a struct
// struct Circle {
//   radius: f32,
// }

// // Implement methods for the struct
// impl Circle {

//   // Method to calculate the circumference
//   fn circumference(&self) -> f32 {
//       2.0 * 3.14159 * self.radius
//   }

//   // Method to change the radius of the circle
//   fn change_radius(self, radius: f32) {
//       self.radius = radius;
//   }

//   // Associated function (constructor)
//   fn new(radius: f32) -> Circle {
//       Circle { radius: radius }
//   }
// }

// fn main() {
//   // Create an instance using the associated function
//   let circ = Circle(15.0);

//   // Call methods on the struct
//   println!("Circumference: {}", circ.circumference());
//   circ.change_radius(10.0);
//   println!("New Circumference: {}", circ.circumference());
// }


// Define a struct
struct Circle {
  radius: f32,
}

// Implement methods for the struct
impl Circle {

  // Method to calculate the circumference
  fn circumference(&self) -> f32 {
      2.0 * 3.14159 * self.radius
  }

  // Method to change the radius of the circle
  fn change_radius(&mut self, radius: f32) {
      self.radius = radius;
  }

  // Associated function (constructor)
  fn new(radius: f32) -> Circle {
      Circle { radius: radius }
  }
}

fn main() {
  // Create an instance using the associated function
  let mut circ = Circle::new(15.0);

  // Call methods on the struct
  println!("Circumference: {}", circ.circumference());
  circ.change_radius(10.0);
  println!("New Circumference: {}", circ.circumference());
}