/*
fn main() {
    // Scenario: Determining if the submarine is within a safe operating depth
    let max_safe_depth = 300; // maximum safe operating depth in meters
    let submarine_depth = 350; // current submarine depth in meters

    // TODO: Create a new boolean variable "is_too_deep_for_operation" and update the print statement accordingly
    let within_safe_depth = submarine_depth <= max_safe_depth;
    println!("Is the submarine within a safe operating depth? {}", within_safe_depth);
}
*/
fn main() {
    // Scenario: Determining if the submarine is within a safe operating depth
    let max_safe_depth = 300; // maximum safe operating depth in meters
    let submarine_depth = 350; // current submarine depth in meters

    // TODO: Create a new boolean variable "is_too_deep_for_operation" and update the print statement accordingly
    let is_too_deep_for_operation = submarine_depth > max_safe_depth;
    println!("Is the submarine within a safe operating depth? {}", !is_too_deep_for_operation);
}