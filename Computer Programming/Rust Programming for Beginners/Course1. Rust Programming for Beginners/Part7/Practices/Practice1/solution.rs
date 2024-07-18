fn main() {
    let temperature = 15; // Temperature in Celsius
    let weather;

    // Determine weather based on temperature
    if temperature > 30 {
        weather = "Hot";
    } else if temperature > 15 {
        weather = "Warm";
    } else if temperature > 0 {
        weather = "Chilly";
    } else {
        weather = "Cold";
    }

    println!("The weather is: {}", weather);
}