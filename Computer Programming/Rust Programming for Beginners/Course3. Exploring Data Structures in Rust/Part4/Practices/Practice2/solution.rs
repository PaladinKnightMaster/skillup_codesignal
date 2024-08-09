// use std::collections::HashSet;

// fn main() {
//     // Ownership for HashSet
//     let movie = String::from("Justice League");
//     let mut movie_set = HashSet::from([movie, String::from("Aquaman")]);
//     // println!("{}", movie); Causes an error since `movie` transferred ownership to `movie_set`

//     // Hashsets as function parameters
//     let mut movie_hashset = HashSet::new();
//     movie_hashset.insert("Shazam");
//     movie_hashset.insert("Batman v Superman");
//     display_movie_reference(&movie_hashset);
//     println!("After display_movie_reference: {:?}", movie_hashset);

//     transfer_movie_ownership(movie_hashset);
//     // println!("After transfer_movie_ownership: {:?}", movie_hashset); Causes error
// }

// fn display_movie_reference(set: &HashSet<&str>) {
//     println!("Movies in set: {:?}", set);
// }

// fn transfer_movie_ownership(set: HashSet<&str>) {
//     println!("Transferred movies: {:?}", set);
// }

use std::collections::HashSet;

fn main() {
    // Ownership for HashSet
    let movie = String::from("Justice League");
    let mut movie_set = HashSet::from([movie, String::from("Aquaman")]);
    // println!("{}", movie); Causes an error since `movie` transferred ownership to `movie_set`

    // Hashsets as function parameters
    let mut movie_hashset = HashSet::new();
    movie_hashset.insert("Shazam");
    movie_hashset.insert("Batman v Superman");
    display_movie_reference(&movie_hashset);
    println!("After display_movie_reference: {:?}", movie_hashset);

    transfer_movie_ownership(movie_hashset);
    // println!("After transfer_movie_ownership: {:?}", movie_hashset); Causes error
}

fn display_movie_reference(set: &HashSet<&str>) {
    println!("Movies in set: {:?}", set);
}

fn transfer_movie_ownership(set: HashSet<&str>) {
    println!("Transferred movies: {:?}", set);
}