// // Define a trait named `Instrument`
// trait Instrument {
//     fn play(&self) {
//         println!("Do-re-mi");
//     }
// }

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

// fn play_instrument(inst: &T) {
//     inst.play();
// }

// fn main() {
//     let guitar = Guitar { strings: 6 };
//     let piano = Piano { keys: 88 };
//     println!("The guitar has {} strings.", guitar.strings);
//     println!("The piano has {} keys.", piano.keys);

//     guitar.play_instrument();
//     piano.play_instrument();
// }

// Define a trait named `Instrument`
trait Instrument {
    fn play(&self) {
        println!("Do-re-mi");
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

fn play_instrument<T: Instrument>(inst: &T) {
    inst.play();
}

fn main() {
    let guitar = Guitar { strings: 6 };
    let piano = Piano { keys: 88 };
    println!("The guitar has {} strings.", guitar.strings);
    println!("The piano has {} keys.", piano.keys);

    play_instrument(&guitar);
    play_instrument(&piano);
}