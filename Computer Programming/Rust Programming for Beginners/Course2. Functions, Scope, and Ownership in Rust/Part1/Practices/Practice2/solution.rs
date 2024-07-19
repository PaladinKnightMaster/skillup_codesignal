/*
fn add_batches(batch1: i32, batch2: i32) -> i32 {
  // TODO: Return the average number of cakes
  batch1 + batch2
}

fn main() {
  let total_cakes = add_batches(10, 20); // Represents the total number of cakes from two batches
  println!("The total number of cakes is: {}", total_cakes);
}
*/
fn add_batches(batch1: i32, batch2: i32) -> i32 {
    // TODO: Return the average number of cakes
    return (batch1 + batch2) / 2;
}

fn main() {
    let avg_cakes = add_batches(10, 20); // Represents the total number of cakes from two batches
    println!("The average number of cakes is: {}", avg_cakes);
}