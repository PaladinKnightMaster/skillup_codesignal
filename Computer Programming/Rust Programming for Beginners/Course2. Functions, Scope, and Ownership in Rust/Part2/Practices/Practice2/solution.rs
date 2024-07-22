/*
fn main() {
    let version = 1; // `version` is in scope for the entire function

    // TODO: Shadow the `version` variable by incrementing it and then print the new version in one line

}
*/
fn main() {
  let version = 1; // `version` is in scope for the entire function

  // TODO: Shadow the `version` variable by incrementing it and then print the new version in one line
  let version = version + 1;
  println!("The new version is {}", version);
}