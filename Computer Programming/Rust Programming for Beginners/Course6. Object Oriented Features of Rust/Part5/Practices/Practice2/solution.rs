// // TODO: Define a trait named `Instrument` with a default implementation for the play method

// // Define a struct for Guitar
// struct Guitar {
//     strings: u32,
// }

// // Define a struct for Piano
// struct Piano {
//     keys: u32,
// }

// // Implement the Instrument trait for Guitar
// impl Instrument for Guitar {
//     fn play(&self) {
//         println!("Strum!");
//     }
// }

// // Implement the Instrument trait for Piano
// impl Instrument for Piano {

// }

// fn main() {
//     let guitar = Guitar { strings: 6 };
//     let piano = Piano { keys: 88 };
//     println!("The guitar has {} strings.", guitar.strings);
//     println!("The piano has {} keys.", piano.keys);

//     guitar.play();
//     piano.play();
// }

// TODO: Define a trait named `Instrument` with a default implementation for the play method
trait Instrument {
    fn play(&self) {
        println!("Do-re-mi!");
    }
}

// Define a struct for Guitar
struct Guitar {
    strings: u32,
}

// Define a struct for Piano
struct Piano {
    keys: u32,
}

// Implement the Instrument trait for Guitar
impl Instrument for Guitar {
    fn play(&self) {
        println!("Strum!");
    }
}

// Implement the Instrument trait for Piano
impl Instrument for Piano {
}

fn main() {
    let guitar = Guitar { strings: 6 };
    let piano = Piano { keys: 88 };
    println!("The guitar has {} strings.", guitar.strings);
    println!("The piano has {} keys.", piano.keys);

    guitar.play();
    piano.play();
}