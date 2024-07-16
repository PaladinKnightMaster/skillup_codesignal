/*
fn main() {
    let temperature_celsius = 37.78; // Temperature in Celsius as a float
    let temperature_rounded: i32 = temperature_celsius; // There's an error related to types here

    println!("The rounded temperature is {} degrees Celsius.", temperature_rounded);
}
*/
fn main() {
    let temperature_celsius = 37.78; // Temperature in Celsius as a float
    let temperature_rounded: i32 = temperature_celsius as i32; // There's an error related to types here

    println!("The rounded temperature is {} degrees Celsius.", temperature_rounded);
}