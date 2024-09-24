// struct Album {
//     title: String,
//     artist: String,
//     tracks: u32,
// }

// fn main() {
//     let album1 = Album {
//         title: String::from("The Rust Era"),
//         artist: String::from("Cosmo Groove"),
//         tracks: 10,
//     };

//     let album2 = album1;

//     println!("Title: {}", album1.title); // Expected: Title: The Rust Era

//     let album_artist = album2.artist;

//     println!("Album artist: {}", album2.artist); // Expected: Album artist: Cosmo Groove

//     let album3 = album2;

//     println!("Number of tracks: {}", album3.tracks); // Expected: Number of tracks: 10
// }

struct Album {
    title: String,
    artist: String,
    tracks: u32,
}

fn main() {
    let album1 = Album {
        title: String::from("The Rust Era"),
        artist: String::from("Cosmo Groove"),
        tracks: 10,
    };

    let album2 = &album1; // Modified to borrow album1

    println!("Title: {}", album1.title); // Works because album1 is still valid (borrowed)

    let album_artist = &album2.artist; // Modified to borrow artist

    println!("Album artist: {}", album_artist); // Use the borrowed reference

    let album3 = album2; // album3 is a reference to album1

    println!("Number of tracks: {}", album3.tracks); // Works because u32 is Copy
}
