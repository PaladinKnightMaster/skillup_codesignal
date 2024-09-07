// fn main() {
//   // For loop with range
//   println!("Iterating over a range");
//   for power in 3..8 {
//       println!("Superhero power level: {}", power);
//   }

//   // For loop with range in reverse
//   println!("Iterating in reverse");
//   for power in (3..8).________() {
//       println!("Superhero power level in reverse: {}", power);
//   }

//   // Using `step_by` to iterate
//   println!("Power levels with a step size of 3");
//   for power in (1..10).________(3) {
//       println!("{}", power);
//   }

//   // Using `step_by` in reverse iteration
//   println!("Power levels in reverse with a step size of 3");
//   for power in (1..10).________().________(3) {
//       println!("{}", power);
//   }
// }

fn main() {
  // For loop with range
  println!("Iterating over a range");
  for power in 3..8 {
      println!("Superhero power level: {}", power);
  }

  // For loop with range in reverse
  println!("Iterating in reverse");
  for power in (3..8).rev() {
      println!("Superhero power level in reverse: {}", power);
  }

  // Using `step_by` to iterate
  println!("Power levels with a step size of 3");
  for power in (1..10).step_by(3) {
      println!("{}", power);
  }

  // Using `step_by` in reverse iteration
  println!("Power levels in reverse with a step size of 3");
  for power in (1..10).rev().step_by(3) {
      println!("{}", power);
  }
}