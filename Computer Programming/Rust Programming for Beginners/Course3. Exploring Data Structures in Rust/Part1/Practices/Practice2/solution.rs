fn main() {
  let movie_ratings = ("Inception", 9.1, 132);
  println!("Initial movie ratings: {:?}", movie_ratings);

  update_rating(&movie_ratings);
  println!("After update_rating: {:?}", movie_ratings);  // Should remain unchanged ("Inception", 9.1, 132)

  let mut mutable_movie_ratings = ("The Matrix", 8.7, 136);
  modify_rating(&mut mutable_movie_ratings);
  println!("After modify_rating: {:?}", mutable_movie_ratings);  // Should reflect changes ("The Matrix", 9.7, 146)

  let ratings = (7.5, 9.3);
  compare_ratings(ratings);
  println!("After compare_ratings: {:?}", ratings);  // Should remain unchanged (7.5, 9.3)

  let non_copy_tuple = (8.4, String::from("Batman"));
  change_non_copy_tuple(non_copy_tuple);
  // println!("After change_non_copy_tuple: {:?}", non_copy_tuple);  // Uncommenting this will throw an error due to ownership
}

fn update_rating(tuple: &(&str, f64, i32)) {
  println!("Rating before: ({}, {}, {})", tuple.0, tuple.1, tuple.2);
}

// Passing a mutable reference
fn modify_rating(tuple: &mut (&str, f64, i32)) {
  tuple.1 += 1.0;
  tuple.2 += 10;
}

fn compare_ratings(tuple: (f64, f64)) {
  println!("Comparing ratings: ({}, {})", tuple.0, tuple.1);
}

fn change_non_copy_tuple(tuple: (f64, String)) {
  println!("Changing non-copy tuple: ({}, {})", tuple.0, tuple.1);
}