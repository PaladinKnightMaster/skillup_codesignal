// // Defining a struct
// struct Song {
//     title: String,
//     artist: String,
//     duration: u32,
// }

// fn main() {
//     // TODO: Instantiate an instance of the Song struct with your favorite song

//     // TODO: Print out each field of the song
// }

// Defining a struct
struct Song {
    title: String,
    artist: String,
    duration: u32,
}

fn main() {
    // TODO: Instantiate an instance of the Song struct with your favorite song
    let song = Song {
        title: String::from("My favorite song"),
        artist: String::from("My favorite artist"),
        duration: 300,
    };
    // TODO: Print out each field of the song
    println!("Title: {}", song.title);
    println!("Artist: {}", song.artist);
    println!("Duration: {} seconds", song.duration);
}