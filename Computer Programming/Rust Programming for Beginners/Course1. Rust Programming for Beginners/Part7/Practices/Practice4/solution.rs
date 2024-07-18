/*
fn main() {
    let temperature_celsius = 18; // Expected temperature in degrees celsius

    if ___ { // TODO: check if the temperature is less than 15
        // Print a message for cold weather coding
    } else if ___ { // TODO: check if the temperature is less than 25
        // Print a message for moderate weather coding
    } else {
        // Print a message for hot weather coding
    }
}
*/
fn main() {
    let temperature_celsius = 18; // Expected temperature in degrees celsius

    if temperature_celsius < 15 { // TODO: check if the temperature is less than 15
        // Print a message for cold weather coding
        println!("The weather is cold.");
    } else if temperature_celsius < 25 { // TODO: check if the temperature is less than 25
        // Print a message for moderate weather coding
        println!("The weather is moderate.");
    } else {
        // Print a message for hot weather coding
        println!("The weather is hot.");
    }
}