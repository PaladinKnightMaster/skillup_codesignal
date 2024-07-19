/*
// TODO: Define a function to calculate the area of a field.
// This function should accept 2 arguments for length and width and return the calculated area as a float.

fn main() {
    // TODO: Call your function with values for length and width and print the result
}
*/
// TODO: Define a function to calculate the area of a field.
// This function should accept 2 arguments for length and width and return the calculated area as a float.

fn calculate_area(length: f32, width: f32) -> f32 {
    return length * width;
}

fn main() {
    // TODO: Call your function with values for length and width and print the result
    let area = calculate_area(10.0, 5.0);
    println!("The area of the field is: {}", area);
}