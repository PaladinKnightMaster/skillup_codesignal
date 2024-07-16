/*
fn main() {
    // A temperature in Celsius
    let temp_celsius: f64 = 23.75;

    // TODO: Convert the temperature from a f64 to a String
    let temperature_text: String = ___;

    // Displaying the temperature as text
    println!("The temperature is: {}°C", temperature_text);
}
*/
fn main() {
    // A temperature in Celsius
    let temp_celsius: f64 = 23.75;

    // TODO: Convert the temperature from a f64 to a String
    let temperature_text: String = temp_celsius.to_string();

    // Displaying the temperature as text
    println!("The temperature is: {}°C", temperature_text);
}