fn main() {
    let temp_celsius: f32 = 30.0; // Temperature in Celsius
    let temp_fahrenheit: f64 = ( (temp_celsius as f64) * 9.0/5.0) + 32.0; // Convert to Fahrenheit

    println!("Temperature in Celsius: {}", temp_celsius);
    println!("Temperature in Fahrenheit: {}", temp_fahrenheit);
}