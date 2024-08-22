// fn main() {
//   // Ownership Basics
//   let hero = String::from("Cosmo");
//   let hero_copy = hero;
//   println!("I am the original {}", hero);
//   println!("I am the cloned {}", hero_copy);
// }

fn main() {
  // Ownership Basics
  let hero = String::from("Cosmo");
  let hero_copy = hero.clone();
  println!("I am the original {}", hero);
  println!("I am the cloned {}", hero_copy);
}