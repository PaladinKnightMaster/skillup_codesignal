// fn main() {
//   let vector_with_copy = vec![1, 2, 3, 4];

//   // Copy data
//   let first_elem_copy = vector_with_copy[0];
//   println!("first_elem_copy: {}", first_elem_copy); // Prints: first_elem_copy: 1
//   println!("vector_with_copy: {:?}", vector_with_copy); // Prints: vector_with_copy: [1, 2, 3, 4]

//   // Non-copy data
//   let vector_with_non_copy = vec![String::from("Hello"), String::from("World")];
//   let first_elem_non_copy = &vector_with_non_copy[0];
//   println!("first_elem_non_copy: {}", first_elem_non_copy); // Prints: first_elem_non_copy: Hello

//   // Ownership Transfer
//   let copied_vector = vector_with_copy; // Ownership moved to copied_vector
//   // println!("vector_with_copy: {:?}", vector_with_copy); Causes an error
// }

fn main() {
  let vector_with_copy = vec![1, 2, 3, 4];

  // Copy data
  let first_elem_copy = vector_with_copy[0];
  println!("first_elem_copy: {}", first_elem_copy); // Prints: first_elem_copy: 1
  println!("vector_with_copy: {:?}", vector_with_copy); // Prints: vector_with_copy: [1, 2, 3, 4]

  // Non-copy data
  let vector_with_non_copy = vec![String::from("Hello"), String::from("World")];
  let first_elem_non_copy = &vector_with_non_copy[0];
  println!("first_elem_non_copy: {}", first_elem_non_copy); // Prints: first_elem_non_copy: Hello

  // Ownership Transfer
  let copied_vector = vector_with_copy; // Ownership moved to copied_vector
  // println!("vector_with_copy: {:?}", vector_with_copy); Causes an error
  println!("copied_vector: {:?}", copied_vector); // Prints: copied_vector: [1, 2, 3, 4]
}