// struct Movie {
//   title: String,
//   director: String,
//   // TODO: Add duration field with type u32
// }

// fn main() {
//   // TODO: Instantiate the struct with a duration
//   let movie = Movie {
//       title: String::from("Rust Cinematography"),
//       director: String::from("Cosmo"),
//   };

//   // Accessing fields
//   println!("Title: {}", movie.title);
//   println!("Director: {}", movie.director);
//   // TODO: Access and print the duration field
// }

struct Movie {
  title: String,
  director: String,
  // TODO: Add duration field with type u32
  duration: u32
}

fn main() {
  // TODO: Instantiate the struct with a duration
  let movie = Movie {
      title: String::from("Rust Cinematography"),
      director: String::from("Cosmo"),
      duration: 120
  };

  // Accessing fields
  println!("Title: {}", movie.title);
  println!("Director: {}", movie.director);
  // TODO: Access and print the duration field
  println!("Duration: {}", movie.duration);
}