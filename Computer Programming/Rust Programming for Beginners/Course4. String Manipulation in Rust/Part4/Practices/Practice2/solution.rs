// fn main() {
//   let hero = "Iron Man";
//   let hero_name = hero.as_str();
//   println!("Superhero as String: {}", hero_name);

//   let shout = String::from("Avengers, assemble!");
//   let command = shout.to_string();
//   println!("Command as string literal: {}", command);

//   let power = "100";

//   let parsed_power: i32 = power.parse();
//   println!("Power Level as int: {}", parsed_power);
// }

fn main() {
  let hero = "Iron Man";
  let hero_name = hero.to_string();
  println!("Superhero as String: {}", hero_name);

  let shout = String::from("Avengers, assemble!");
  let command = shout.as_str();
  println!("Command as string literal: {}", command);

  let power = "100";

  let parsed_power: i32 = power.parse().unwrap();
  println!("Power Level as int: {}", parsed_power);
}