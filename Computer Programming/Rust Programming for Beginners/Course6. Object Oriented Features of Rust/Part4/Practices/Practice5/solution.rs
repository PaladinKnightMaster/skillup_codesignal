// // TODO: Define a CharacterStats trait


// // Define a struct for `Warrior`
// struct Warrior {
//     strength: u32,
//     weapon_damage: u32,
//     health: u32,
// }

// // TODO: Implement the `CharacterStats` trait for `Warrior`


// // Define a struct for `Mage`
// struct Mage {
//     magic_power: u32,
//     staff_damage: u32,
//     health: u32,
// }

// // TODO: Implement the `CharacterStats` trait for `Mage`

// fn main() {
//     // Create an instance of `Warrior`
//     let mut warrior = Warrior { strength: 50, weapon_damage: 30, health: 100 };
//     println!("Warrior Attack Power: {}", warrior.attack_power()); // Expected: Warrior Attack Power: 80
//     warrior.take_damage(40);
//     println!("Warrior Health after damage: {}", warrior.health); // Expected: Warrior Health after damage: 60

//     // Create an instance of `Mage`
//     let mut mage = Mage { magic_power: 70, staff_damage: 20, health: 80 };
//     println!("Mage Attack Power: {}", mage.attack_power()); // Expected: Mage Attack Power: 90
//     mage.take_damage(30);
//     println!("Mage Health after damage: {}", mage.health); // Expected: Mage Health after damage: 50
//     println!("Mage Attack Power after damage: {}", mage.magic_power); // Expected: Mage Attack Power after damage: 80
// }

// Define a CharacterStats trait
trait CharacterStats {
    fn attack_power(&self) -> u32;
    fn take_damage(&mut self, damage: u32);
}

// Define a struct for `Warrior`
struct Warrior {
    strength: u32,
    weapon_damage: u32,
    health: u32,
}

// Implement the `CharacterStats` trait for `Warrior`
impl CharacterStats for Warrior {
    fn attack_power(&self) -> u32 {
        self.strength + self.weapon_damage
    }

    fn take_damage(&mut self, damage: u32) {
        if self.health > damage {
            self.health -= damage;
        } else {
            self.health = 0;
        }
    }
}

// Define a struct for `Mage`
struct Mage {
    magic_power: u32,
    staff_damage: u32,
    health: u32,
}

// Implement the `CharacterStats` trait for `Mage`
impl CharacterStats for Mage {
    fn attack_power(&self) -> u32 {
        self.magic_power + self.staff_damage
    }

    fn take_damage(&mut self, damage: u32) {
        if self.health > damage {
            self.health -= damage;
        } else {
            self.health = 0;
        }
        self.magic_power += 10; // Mage absorbs power when taking damage
    }
}

fn main() {
    // Create an instance of `Warrior`
    let mut warrior = Warrior { strength: 50, weapon_damage: 30, health: 100 };
    println!("Warrior Attack Power: {}", warrior.attack_power()); // Expected: Warrior Attack Power: 80
    warrior.take_damage(40);
    println!("Warrior Health after damage: {}", warrior.health); // Expected: Warrior Health after damage: 60

    // Create an instance of `Mage`
    let mut mage = Mage { magic_power: 70, staff_damage: 20, health: 80 };
    println!("Mage Attack Power: {}", mage.attack_power()); // Expected: Mage Attack Power: 90
    mage.take_damage(30);
    println!("Mage Health after damage: {}", mage.health); // Expected: Mage Health after damage: 50
    println!("Mage Magic Power after damage: {}", mage.magic_power); // Expected: Mage Magic Power after damage: 80
}
