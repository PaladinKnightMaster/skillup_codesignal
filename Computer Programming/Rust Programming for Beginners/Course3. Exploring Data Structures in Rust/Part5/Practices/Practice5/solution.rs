// use std::collections::HashMap;

// fn main() {
//     // TODO: Create a mutable HashMap named `movie_ratings` that maps &str to i32
//     // TODO: Insert some movie titles with their ratings into the HashMap

//     // TODO: Call the show_ratings function without transferring ownership
//     // TODO: Print the HashMap to confirm ownership was not transferred
// }

// // TODO: Write a function show_ratings that prints out each movie and rating without taking ownership


use std::collections::HashMap;

fn main() {
    // TODO: Create a mutable HashMap named `movie_ratings` that maps &str to i32
    // TODO: Insert some movie titles with their ratings into the HashMap

    let mut movie_ratings = HashMap::new();
    movie_ratings.insert("Inception", 9);
    movie_ratings.insert("Interstellar", 8);
    movie_ratings.insert("The Prestige", 8);

    println!("Movie Ratings: {:?}", movie_ratings);

    // TODO: Call the show_ratings function without transferring ownership
    show_ratings(&movie_ratings);
    // TODO: Print the HashMap to confirm ownership was not transferred
    println!("Movie Ratings: {:?}", movie_ratings);
}

// TODO: Write a function show_ratings that prints out each movie and rating without taking ownership
fn show_ratings(movie_ratings: &HashMap<&str, i32>) {
    for (movie, rating) in movie_ratings {
        println!("{}: {}", movie, rating);
    }
}
