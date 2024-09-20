// // Defining the struct
// struct Movie {
//     title: String,
//     director: String,
// }

// fn main() {
//     // Instantiating the struct
//     let movie = Movie {
//         title: String::from("Inception"),
//         director: String::from("Christopher Nolan"),
//         length: 100,
//     };

//     // Modifying a field
//     movie[length] = 148;

//     // Accessing fields
//     println!("Title: {}", movie.name); // Expected: Title: Inception
//     println!("Director: {}", movie.director); // Expected: Director: Christopher Nolan
//     println!("Duration: {} minutes", movie.length); // Expected: Duration: 148 minutes
// }

// Defining the struct
struct Movie {
    title: String,
    director: String,
    length: u32,
}

fn main() {
    // Instantiating the struct
    let mut movie = Movie {
        title: String::from("Inception"),
        director: String::from("Christopher Nolan"),
        length: 100,
    };

    // Modifying a field
    movie.length = 148;

    // Accessing fields
    println!("Title: {}", movie.title); // Expected: Title: Inception
    println!("Director: {}", movie.director); // Expected: Director: Christopher Nolan
    println!("Duration: {} minutes", movie.length); // Expected: Duration: 148 minutes
}