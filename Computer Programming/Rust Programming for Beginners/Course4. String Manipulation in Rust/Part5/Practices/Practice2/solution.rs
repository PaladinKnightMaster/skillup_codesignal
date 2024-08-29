// fn main() {
//   // Check for substring presence
//   let heroes = String::from("Superman, Batman, Wonder Woman");
//   if heroes.in("Superman") {
//       println!("The string contains 'Superman'");
//   } else {
//       println!("The string does not contain 'Superman'");
//   }
// }

fn main() {
  // Check for substring presence
  let heroes = String::from("Superman, Batman, Wonder Woman");
  if heroes.contains("Superman") {
      println!("The string contains 'Superman'");
  } else {
      println!("The string does not contain 'Superman'");
  }
}