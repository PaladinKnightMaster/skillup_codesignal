/*
fn main() {
    let earth_mass_kg: i32 = 5972;

    // TODO: Convert the earth_mass_kg i32 value to an f64 using explicit casting.
    // TODO: Now, convert the new f64 value to a String using the to_string method.

    // Printing out the String value after conversion.
    println!("The mass of our planet in kilogram is: {} kg", earth_mass_str);
}
*/
fn main() {
    let earth_mass_kg: i32 = 5972;

    // TODO: Convert the earth_mass_kg i32 value to an f64 using explicit casting.
    let earth_mass_f64: f64 = earth_mass_kg as f64;
    // TODO: Now, convert the new f64 value to a String using the to_string method.
    let earth_mass_str: String = earth_mass_f64.to_string();

    // Printing out the String value after conversion.
    println!("The mass of our planet in kilogram is: {} kg", earth_mass_str);
}