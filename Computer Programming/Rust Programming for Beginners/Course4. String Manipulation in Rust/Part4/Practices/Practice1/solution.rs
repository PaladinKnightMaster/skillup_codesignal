fn main() {
    let hero = "Iron Dude";
    let hero_name = hero.to_string();
    println!("Superhero as String: {}", hero_name);  // Prints: "Superhero as String: Iron Dude"

    let shout = String::from("Heroes, assemble!");
    let command = shout.as_str();
    println!("Command as string literal: {}", command);  // Prints: "Command as string literal: Heroes, assemble!"

    let power = 100;
    let power_str = power.to_string();
    println!("Power Level as String: {}", power_str);  // Prints: "Power Level as String: 100"

    let parsed_power: i32 = power_str.parse().unwrap();
    println!("Power Level as int: {}", parsed_power);  // Prints: "Power Level as int: 100"
}