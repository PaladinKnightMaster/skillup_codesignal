// // Define a trait named `Noise`
// trait Noise {
//     fn make_noise(&self) -> &str;
// }

// // Define a struct for `Cat`
// struct Cat {
//     sound: String,
// }

// // Implement the `Noise` trait for `Cat`
// impl Cat {
//     fn make_noise(&self) -> &str {
//         &self.sound
//     }
// }

// // Define a struct for `Dog`
// struct Dog {
//     sound: String,
// }

// // Implement the `Noise` trait for `Dog`
// impl Noise for Dog {
//     fn bark(&self) -> &str {
//         &self.sound
//     }
// }

// fn main() {
//     // Create an instance of `Cat`
//     let cat = Cat { sound: String::from("Meow") };
//     println!("Cat Noise: {}", cat.make_noise()); // Prints: Cat Noise: Meow

//     // Create an instance of `Dog`
//     let dog = Dog { sound: String::from("Woof") };
//     println!("Dog Noise: {}", dog.make_noise()); // Prints: Dog Noise: Woof
// }

// Define a trait named `Noise`
trait Noise {
    fn make_noise(&self) -> &str;
}

// Define a struct for `Cat`
struct Cat {
    sound: String,
}

// Implement the `Noise` trait for `Cat`
impl Noise for Cat {
    fn make_noise(&self) -> &str {
        &self.sound
    }
}

// Define a struct for `Dog`
struct Dog {
    sound: String,
}

// Implement the `Noise` trait for `Dog`
impl Noise for Dog {
    fn make_noise(&self) -> &str {
        &self.sound
    }
}

fn main() {
    // Create an instance of `Cat`
    let cat = Cat { sound: String::from("Meow") };
    println!("Cat Noise: {}", cat.make_noise()); // Prints: Cat Noise: Meow

    // Create an instance of `Dog`
    let dog = Dog { sound: String::from("Woof") };
    println!("Dog Noise: {}", dog.make_noise()); // Prints: Dog Noise: Woof
}