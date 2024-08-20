// fn main() {
//   let greeting = String::from("Hello ");
//   greeting.push_str("Rust ");
//   println!("{}", greeting); // Expected: Hello Rust

//   let world = String::from("world!");
//   greeting.push_str(world);
//   println!("{}", greeting); // Expected: Hello Rust world!

//   // String Concatenation: +
//   let hello = String::from("Hello, ");
//   let rust = "Rust ";
//   let explorer = String::from("Explorer!");
//   let greeting = hello + rust + explorer;
//   println!("{}", greeting); // Expected: Hello, Rust Explorer!
// }

fn main() {
  let mut greeting = String::from("Hello ");
  greeting.push_str("Rust ");
  println!("{}", greeting); // Expected: Hello Rust

  let world = String::from("world!");
  greeting.push_str(&world);
  println!("{}", greeting); // Expected: Hello Rust world!

  // String Concatenation: +
  let hello = String::from("Hello, ");
  let rust = "Rust ";
  let explorer = String::from("Explorer!");
  let greeting = hello + &rust + &explorer;
  println!("{}", greeting); // Expected: Hello, Rust Explorer!
}