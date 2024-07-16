/*
fn main() {
    // Constant with temperature as a string
    let temperature_string = "23.5";

    // TODO: Convert the temperature_string to a floating-point number and assign it to a variable

    // Print the temperature in Celsius
    println!("The temperature is {} degrees Celsius.", temperature);
}
*/
fn main() {
    // Constant with temperature as a string
    let temperature_string = "23.5";

    // TODO: Convert the temperature_string to a floating-point number and assign it to a variable
    let temperature: f64 = temperature_string.parse().unwrap();

    // Print the temperature in Celsius
    println!("The temperature is {} degrees Celsius.", temperature);
}