// // Define a trait named `Playable`
// trait Playable {
//     fn play(&self);
//     fn get_type(&self);
// }

// // Define a struct for Game
// struct Game {
//     name: String,
// }

// // Define a struct for Piano
// struct Song {
//     name: String,
// }

// // Implement the Playable trait for Game
// impl Playable for Game {
//     fn play(&self) {
//         println!("Playing {}", self.name);
//     }

//     fn get_type(&self) {
//         println!("Playing a game");
//     }
// }

// // Implement the Playable trait for Piano
// impl Playable for Song {
//     fn play(&self)  {
//         println!("Playing {}", self.name);
//     }

//     fn get_type(&self) {
//         println!("Playing a song");
//     }
// }

// // TODO: Create a get_summary function that accepts a reference to a struct that implements the Playable trait. This method should call the structs get_type and play methods.

// fn main() {
//     let game = Game { name: String::from("Pacman")};
//     let song = Song { name: String::from("YMCA" )};

//     // TODO: Call get_summary on game and song


// }

// Define a trait named `Playable`
trait Playable {
    fn play(&self);
    fn get_type(&self);
}

// Define a struct for Game
struct Game {
    name: String,
}

// Define a struct for Piano
struct Song {
    name: String,
}

// Implement the Playable trait for Game
impl Playable for Game {
    fn play(&self) {
        println!("Playing {}", self.name);
    }

    fn get_type(&self) {
        println!("Playing a game");
    }
}

// Implement the Playable trait for Piano
impl Playable for Song {
    fn play(&self)  {
        println!("Playing {}", self.name);
    }

    fn get_type(&self) {
        println!("Playing a song");
    }
}

// TODO: Create a get_summary function that accepts a reference to a struct that implements the Playable trait. This method should call the structs get_type and play methods.
fn get_summary<T: Playable>(item: &T) {
    item.get_type();
    item.play();
}

fn main() {
    let game = Game { name: String::from("Pacman")};
    let song = Song { name: String::from("YMCA" )};

    // TODO: Call get_summary on game and song
    get_summary(&game);
    get_summary(&song);

}