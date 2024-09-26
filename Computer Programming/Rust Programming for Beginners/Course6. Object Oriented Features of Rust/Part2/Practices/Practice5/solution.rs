// // TODO: Define a struct named GameCharacter with fields `name` (String) and `level` (i32)

// // TODO: Implement methods for the struct

//     // TODO: Implement a method named `attack`
//         // The method takes a parameter named move_power (i32) and returns an i32
//         // The return value is the level * move_power

//     // TODO: Implement a method named `level_up` that increases the character's level by 1

//     // TODO: Implement an associated function named `new` that creates a new GameCharacter with `name` and `level`


//     fn main() {
//         // TODO: Create an instance named `character` using the associated function `new`

//         // TODO: Print the name of the game character

//         // TODO: Call the `attack` method and print the result

//         // TODO: Level up the character using the `level_up` method

//         // TODO: Call the `attack` method again and print the result
//     }

// TODO: Define a struct named GameCharacter with fields `name` (String) and `level` (i32)
struct GameCharacter {
    name: String,
    level: i32
}

// TODO: Implement methods for the struct
impl GameCharacter {
    // TODO: Implement a method named `attack`
        // The method takes a parameter named move_power (i32) and returns an i32
        // The return value is the level * move_power
    fn attack(&self, move_power: i32) -> i32 {
        self.level * move_power
    }
    // TODO: Implement a method named `level_up` that increases the character's level by 1
    fn level_up(&mut self) {
        self.level += 1
    }
    // TODO: Implement an associated function named `new` that creates a new GameCharacter with `name` and `level`
    fn new(name: String, level: i32) -> GameCharacter {
        GameCharacter { name: name, level: level }
    }
}

fn main() {
    // TODO: Create an instance named `character` using the associated function `new`
    let mut character = GameCharacter::new(String::from("Link"), 1);
    // TODO: Print the name of the game character
    println!("Name: {}", character.name);
    // TODO: Call the `attack` method and print the result
    println!("Attack: {}", character.attack(5));
    // TODO: Level up the character using the `level_up` method
    character.level_up();
    // TODO: Call the `attack` method again and print the result
    println!("Attack: {}", character.attack(5));
}