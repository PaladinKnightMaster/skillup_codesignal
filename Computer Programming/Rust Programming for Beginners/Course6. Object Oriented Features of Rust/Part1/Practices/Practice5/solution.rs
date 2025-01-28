// // TODO: Define a struct named Movie with fields: title, director, and duration

// fn main() {
//     // TODO: Instantiate a Movie struct with title as "The Rust Awakens", director as "Jane Doe", and duration as 150

//     // TODO: Access and print each field of the instance

//     // TODO: Change the director to "Cosmo Skywalker"

//     // TODO: Print the updated director field
// }

// TODO: Define a struct named Movie with fields: title, director, and duration
struct Movie {
    title: String,
    director: String,
    duration: u32
}

fn main() {
    // TODO: Instantiate a Movie struct with title as "The Rust Awakens", director as "Jane Doe", and duration as 150
    let mut movie = Movie {
        title: String::from("The Rust Awakens"),
        director: String::from("Jane Doe"),
        duration: 150
    };
    // TODO: Access and print each field of the instance
    println!("Title: {}", movie.title);
    println!("Director: {}", movie.director);
    println!("Duration: {}", movie.duration);
    // TODO: Change the director to "Cosmo Skywalker"
    movie.director = String::from("Cosmo Skywalker");
    // TODO: Print the updated director field
    println!("Director: {}", movie.director);
}