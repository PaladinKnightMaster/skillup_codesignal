// // TODO: Define a trait named `Character` with a required method `strength` and a default method `print_details`

// // TODO: Define a struct for Warrior with a field `base_strength` of type u32

// // TODO: Define a struct for Mage with fields `level` of type u32 and `strength_per_level` of type u32

// // TODO: Implement the Character trait for Warrior, providing an implementation for the `strength` method. The Warrior struct should use the default `print_details` method.

// // TODO: Implement the Character trait for Mage, providing an implementation for the `strength` method
// // TODO: Override the `print_details` method for the Mage struct to print a custom message

// // TODO: Write a generic function get_strength that takes any type implementing the Character trait and calls the `strength` method

// fn main() {
//     // TODO: Create an instance of Warrior with a `base_strength` of 100
//     // TODO: Create an instance of Mage with `level` of 20 and `strength_per_level` of 5

//     // TODO: Call the `print_details` method for both Warrior and Mage
//     // TODO: Use the `get_strength` function to print out the strengths of Warrior and Mage
// }

// TODO: Define a trait named `Character` with a required method `strength` and a default method `print_details`
trait Character {
    fn strength(&self) -> u32;
    fn print_details(&self) {
        println!("Strength: {}", self.strength());
    }
}
// TODO: Define a struct for Warrior with a field `base_strength` of type u32
struct Warrior {
    base_strength: u32,
}
// TODO: Define a struct for Mage with fields `level` of type u32 and `strength_per_level` of type u32
struct Mage {
    level: u32,
    strength_per_level: u32,
}
// TODO: Implement the Character trait for Warrior, providing an implementation for the `strength` method. The Warrior struct should use the default `print_details` method.
impl Character for Warrior {
    fn strength(&self) -> u32 {
        self.base_strength
    }
}
// TODO: Implement the Character trait for Mage, providing an implementation for the `strength` method
// TODO: Override the `print_details` method for the Mage struct to print a custom message
impl Character for Mage {
    fn strength(&self) -> u32 {
        self.level * self.strength_per_level
    }
    fn print_details(&self) {
        println!("Level: {}", self.level);
        println!("Strength: {}", self.strength());
    }
}
// TODO: Write a generic function get_strength that takes any type implementing the Character trait and calls the `strength` method
fn get_strength<T: Character>(item: &T) -> u32 {
    item.strength()
}

fn main() {
    // TODO: Create an instance of Warrior with a `base_strength` of 100
    let warrior = Warrior { base_strength: 100 };
    // TODO: Create an instance of Mage with `level` of 20 and `strength_per_level` of 5
    let mage = Mage { level: 20, strength_per_level: 5 };
    // TODO: Call the `print_details` method for both Warrior and Mage
    warrior.print_details();
    mage.print_details();
    // TODO: Use the `get_strength` function to print out the strengths of Warrior and Mage
    println!("Warrior strength: {}", get_strength(&warrior));
    println!("Mage strength: {}", get_strength(&mage));
}